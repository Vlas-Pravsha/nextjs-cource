import React from "react";

interface VideoSectionProps {
  title: string;
  children: React.ReactNode;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="bg-gray-100 px-4 py-8">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="border-l-4 border-red-500 pl-3">{title}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
};
