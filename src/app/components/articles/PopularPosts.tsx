"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/";

import { posts } from "@/constants/posts";

export function PopularPosts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">📌 Popular Posts</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={scrollPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex space-x-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 flex-grow-0 basis-full md:basis-1/2 lg:basis-1/4"
            >
              <Card>
                <CardContent className="p-0">
                  <img
                    loading="lazy"
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 font-bold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
