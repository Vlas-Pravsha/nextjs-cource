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

const formSchema = z.object({
  tille: z.string().min(2, "Name must be at least 2 characters"),
  tag: z.string().min(2, "Subject must be at least 2 characters"),
});

export function SendForm() {
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tille: "",
      tag: "",
    },
  });

  const fields = [
    { name: "Title", label: "Title" },
    { name: "Tags", label: "Add tags" },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line no-console
    console.log(values, files);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FormFields form={form} fields={fields} />
            </div>
            <TextEditor form={form} label="Explanation" />
          </div>
          <div className="flex w-1/3 flex-col gap-4">
            <FileUpload files={files} setFiles={setFiles} />
            <div className="flex justify-between">
              <Button type="button" variant="secondary">
                <Save className="mr-2 h-4 w-4" />
                Draft
              </Button>
              <Button type="button" variant="secondary">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button type="submit" className="bg-red-500 text-white">
                <Send className="mr-2 h-4 w-4" />
                Public
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
