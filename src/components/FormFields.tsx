import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui/";

interface FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

interface FormFieldsProps {
  form: UseFormReturn<any>;
  fields: FieldConfig[];
}

export function FormFields({ form, fields }: FormFieldsProps) {
  return (
    <>
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: fieldProps }) => (
            <FormItem className="w-full">
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={field.placeholder}
                  type={field.type ?? "text"}
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
}
