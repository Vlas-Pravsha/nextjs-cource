"use client";

import type { UseFormReturn } from "react-hook-form";

import { AlignLeft, Bold, Image, Italic, Link, Palette } from "lucide-react";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface TextEditorProps {
  form: UseFormReturn<any>;
}

export function TextEditor({ form }: TextEditorProps) {
  return (
    <FormField
      control={form.control}
      name="explanation"
      render={({ field }) => (
        <FormItem className="w-4/5">
          <FormLabel>Explanation</FormLabel>
          <div className="space-y-2">
            <div className="bg-muted flex flex-wrap gap-2 rounded-md p-2">
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