import { BlogGrid } from "@/app/categories/components/BlogGrid";
import { BlogPagination } from "@/app/categories/components/BlogPagination";
import { Avatar, AvatarImage, Button } from "@/components/ui";
import { posts } from "@/constants/posts";
import { ChevronLeft, Pencil } from "lucide-react";

const Markered = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Home</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm">Contact Us</span>
        </div>
      </div>
      <div className="mb-12 rounded-lg shadow">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
            alt="Cover"
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="flex items-start justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </Avatar>
            <h2 className="text-lg font-semibold">Louis Hoebregts</h2>
          </div>
          <div className="flex gap-6 px-6 py-2 text-sm text-gray-600">
            <button className="font-semibold hover:text-black">Marked</button>
            <button className="font-semibold hover:text-black">
              Send Post
            </button>
            <button className="font-semibold hover:text-black">Posts</button>
          </div>
          <Button aria-label="Edit Profile" variant="destructive">
            <Pencil size={16} />
            Edit Profile
          </Button>
        </div>
      </div>
      <BlogGrid posts={posts} viewMode="grid" />
    </div>
  );
};

export default Markered;
