/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button, Form } from "@/components/ui/";
import { TextEditor } from "@/components/TextEditor";
import { FormFields } from "@/components/FormFields";
import { toast } from "react-toastify";
import UserService, { type UserData } from "@/services/user-service";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  explanation: z.string().min(10, "Explanation must be at least 10 characters"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const userService = new UserService(process.env.NEXT_PUBLIC_SERVER_API ?? "");

  useEffect(() => {
    async function getCurrentUserAsync() {
      try {
        const currentUser = await userService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error(error);
      }
    }
    void getCurrentUserAsync();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      explanation: "",
    },
  });

  const fields = [
    { name: "subject", label: "Subject", placeholder: "Enter subject" },
    { name: "name", label: "Name", placeholder: "Enter your name" },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
  ];

  function checkRateLimit(): boolean {
    if (!user) return true;

    const userSubmissionKey = `lastSubmissionTime_${user.id}`;
    const lastSubmissionTime = localStorage.getItem(userSubmissionKey);
    const currentTime = Date.now();

    if (lastSubmissionTime) {
      const timeDiff = currentTime - parseInt(lastSubmissionTime, 10);
      const fifteenMinutesInMs = 15 * 60 * 1000;

      if (timeDiff < fifteenMinutesInMs) {
        const remainingTime = Math.ceil(
          (fifteenMinutesInMs - timeDiff) / 60000,
        );
        toast.error(
          `Please wait ${remainingTime} minute(s) before submitting again.`,
        );
        return false;
      }
    }

    return true;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
      toast.error("Please log in to send a message.");
      return;
    }

    if (!checkRateLimit()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          userId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const userSubmissionKey = `lastSubmissionTime_${user.id}`;
      localStorage.setItem(userSubmissionKey, Date.now().toString());

      toast.success("Your message has been sent successfully.");

      form.reset();
    } catch (error) {
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div
          className={cn(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          <FormFields form={form} fields={fields} />
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full">
            <TextEditor form={form} name="explanation" label="Explanation" />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting || !user}
        >
          {!user ? "Log in to send" : isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
}
