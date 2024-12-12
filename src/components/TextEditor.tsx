"use client";

import type { UseFormReturn } from "react-hook-form";

import {
  Textarea,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/";

interface TextEditorProps {
  form: UseFormReturn<any>;
  label: string;
  name: string;
}

export function TextEditor({ form, label, name }: TextEditorProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <div className="space-y-2">
            <FormControl>
              <Textarea
                placeholder="Type your message here"
                className="min-h-[200px]"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
