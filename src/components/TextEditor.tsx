"use client";

import type { UseFormReturn } from "react-hook-form";

import { AlignLeft, Bold, Image, Italic, Link, Palette } from "lucide-react";
import {
  Button,
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
}

export function TextEditor({ form, label }: TextEditorProps) {
  return (
    <FormField
      control={form.control}
      name="explanation"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 rounded-md bg-muted p-2">
              <Button variant="ghost" size="icon">
                <Image className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Palette className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Link className="h-4 w-4" />
              </Button>
            </div>
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
