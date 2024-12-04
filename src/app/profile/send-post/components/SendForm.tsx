"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, Form } from "@/components/ui/";
import { FileUpload } from "@/components/FileUpload";
import { TextEditor } from "@/components/TextEditor";
import { FormFields } from "@/components/FormFields";
import { Eye, Save, Send } from "lucide-react";
import PostService from "@/services/post-service";
import UserService from "@/services/user-service";

// Updated Zod schema to match MongoDB schema
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category must be at least 2 characters"),
  image: z.string().url("Please provide a valid image URL"),
});

export function SendForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const postService = new PostService(
    process.env.NEXT_PUBLIC_SERVER_API ?? "",
    token,
  );
  const userService = new UserService(process.env.NEXT_PUBLIC_SERVER_API ?? "");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      image: "",
    },
  });

  const fields = [
    { name: "title", label: "Title" },
    { name: "category", label: "Category" },
    { name: "image", label: "Image URL" },
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await userService.getCurrentUser();

      if (!user) {
        console.error("No user found");
        return;
      }

      const payload = {
        ...values,
        user_id: user?.id ?? "",
        author: {
          id: user?.id ?? "",
          name: user?.username ?? "",
        },
      };

      console.log("Submission Payload:", payload);

      await postService.createPost(payload);
      form.reset();
      console.log("Post created successfully");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FormFields form={form} fields={fields} />
            </div>
            <TextEditor form={form} name="description" label="Description" />
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
                Publish
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
