"use client";

import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Food", color: "bg-orange-500" },
  { name: "Animal", color: "bg-yellow-500" },
  { name: "Car", color: "bg-blue-500" },
  { name: "Sport", color: "bg-green-500" },
  { name: "Music", color: "bg-yellow-400" },
  { name: "Technology", color: "bg-purple-500" },
  { name: "Abstract", color: "bg-pink-500" },
];

export function CategoryTags() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="w-full p-4">
      <div ref={emblaRef} className="embla overflow-hidden md:hidden">
        <div className="embla__container flex">
          {categories.map((category) => (
            <div
              key={category.name}
              className="embla__slide mr-4 flex-shrink-0 flex-grow-0 basis-[40%] last:mr-0"
            >
              <div
                className={cn(
                  "relative h-24 w-full cursor-pointer overflow-hidden rounded-lg",
                  category.color,
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform font-medium text-white">
                  #{category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden space-x-4 md:flex">
        {categories.map((category) => (
          <div
            key={category.name}
            className={cn(
              "relative h-24 w-full cursor-pointer overflow-hidden rounded-lg",
              category.color,
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform font-medium text-white">
              #{category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryTags;
