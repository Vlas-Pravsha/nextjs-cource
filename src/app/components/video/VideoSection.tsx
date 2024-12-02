import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface VideoSectionProps {
  title: string;
  children: React.ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  children,
  onPrevious,
  onNext,
}) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="border-l-4 border-red-500 pl-3">{title}</span>
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={onPrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
};
