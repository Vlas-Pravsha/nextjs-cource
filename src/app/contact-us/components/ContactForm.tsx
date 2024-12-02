"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button, Form } from "@/components/ui/";
import { FileUpload } from "@/components/FileUpload";
import { TextEditor } from "@/components/TextEditor";
import { FormFields } from "@/components/FormFields";

const formSchema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values, files);
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

        <div className="flex flex-row items-center gap-8">
          <div className="w-4/5">
            <TextEditor form={form} label="Explanation" />
          </div>
          <div className="w-1/5">
            <FileUpload files={files} setFiles={setFiles} />
          </div>
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Send
        </Button>
      </form>
    </Form>
  );
}
