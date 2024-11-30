import { BlogGrid } from "@/app/categories/components/BlogGrid";
import { Button } from "@/components/ui";
import { posts } from "@/constants/posts";
import { ChevronLeft } from "lucide-react";

const Marked = () => {
  return (
    <div className="container mx-auto">
      <BlogGrid posts={posts} viewMode="grid" />
    </div>
  );
};

export default Marked;
