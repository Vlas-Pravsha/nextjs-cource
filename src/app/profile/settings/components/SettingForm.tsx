"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, Form } from "@/components/ui/";
import { FileUpload } from "@/components/FileUpload";
import { TextEditor } from "@/components/TextEditor";
import { FormFields } from "@/components/FormFields";
import { Eye, Save, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export function SettingForm() {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const fields = [
    {
      name: "name",
      label: "First Name",
    },
    {
      name: "surname",
      label: "Last Name",
    },
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
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
        <div className="flex w-full flex-row gap-12">
          <TextEditor form={form} label="Explanation" />
          <div className="w-2/5">
            <FileUpload files={files} setFiles={setFiles} />
          </div>
        </div>
        <Button type="button" variant="destructive" className="">
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
      </form>
    </Form>
  );
}
