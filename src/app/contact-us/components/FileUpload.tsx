"use client";

import type { Dispatch, SetStateAction } from "react";

import { Folder, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Card } from "@/components/ui";

interface FileUploadProps {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export function FileUpload({ files, setFiles }: FileUploadProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-1/5 space-y-4">
      <h5 className="text-sm font-medium">Add File</h5>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={cn(
          "h-64 rounded-lg border-2 border-dashed p-8",
          "flex flex-col items-center justify-center gap-4",
          "bg-muted/50 transition-colors hover:bg-muted/80",
        )}
      >
        <Folder className="h-10 w-10 text-muted-foreground" />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Drop Image Here, Paste Or
          </p>
          <label htmlFor="file-upload">
            <Button
              variant="ghost"
              className="mt-2"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              Select
            </Button>
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
          </label>
        </div>
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {files.map((file, index) => (
            <Card key={index} className="relative p-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Folder className="h-6 w-6" />
                <span className="truncate text-sm">{file.name}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
