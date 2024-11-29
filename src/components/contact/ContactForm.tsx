"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { ContactFormFields } from "./ContactFormFields";
import { FileUpload } from "./FileUpload";
import { TextEditor } from "./TextEditor";

const formSchema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  explanation: z.string().min(10, "Explanation must be at least 10 characters"),
});

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      explanation: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values, files);
  }

  return (
    <div className="container mx-auto py-4">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Home</span>
          <span className="text-muted-foreground text-sm">/</span>
          <span className="text-sm">Contact Us</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div
            className={cn(
              "grid gap-6",
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            )}
          >
            <ContactFormFields form={form} />
          </div>

          <div className="flex w-full flex-row items-center gap-8">
            <TextEditor form={form} />
            <FileUpload files={files} setFiles={setFiles} />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
