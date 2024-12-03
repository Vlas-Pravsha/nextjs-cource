"use client";

import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&q=80&w=200&h=200",
];

export function FooterInstagram() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">
        <span className="mr-1 text-red-500">•</span>
        Follow On Instagram
      </h3>

      {/* Mobile carousel hidden on larger screens, grid visible on larger screens */}
      <div className="block overflow-hidden sm:hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square flex-[0_0_100%] overflow-hidden rounded-lg p-2"
            >
              <a
                href="#"
                className="block h-full w-full overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden grid-cols-3 gap-2 sm:grid">
        {images.map((image, index) => (
          <a
            key={index}
            href="#"
            className="aspect-square overflow-hidden rounded-lg transition-opacity hover:opacity-90"
          >
            <img
              loading="lazy"
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
