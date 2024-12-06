"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, Form } from "@/components/ui/";
import { TextEditor } from "@/components/TextEditor";
import { FormFields } from "@/components/FormFields";
import { Send, ChevronDown } from "lucide-react";
import PostService from "@/services/post-service";
import UserService from "@/services/user-service";

const categories = [
  "Food",
  "Animal",
  "Car",
  "Sport",
  "Music",
  "Technology",
  "Abstract",
] as const;

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z
    .enum(categories)
    .refine(
      (value) => categories.includes(value),
      "Please select a valid category",
    ),
  image: z.string().url("Please provide a valid image URL"),
});

export function SendForm() {
  const [token, setToken] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      category: "Food",
      image: "",
    },
  });

  const fields = [
    { name: "title", label: "Title" },
    { name: "image", label: "Image URL" },
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const user = await userService.getCurrentUser();

      if (!user) {
        console.error("No user found");
        setIsSubmitting(false);
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
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full flex-row gap-12">
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <FormFields form={form} fields={fields} />
              <div className="relative w-full">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <div
                  id="category"
                  className="relative mt-1 block w-full cursor-pointer rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <span>{form.watch("category")}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                    {categories.map((category) => (
                      <div
                        key={category}
                        onClick={() => {
                          form.setValue("category", category);
                          setDropdownOpen(false);
                        }}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <TextEditor form={form} name="description" label="Description" />
          </div>
        </div>
        <Button
          type="submit"
          className="bg-red-500 text-white"
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Form>
  );
}
