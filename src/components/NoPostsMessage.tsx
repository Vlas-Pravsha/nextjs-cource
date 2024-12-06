import Link from "next/link";

import NoPosts from "@/components/images/NoPosts";
import { Button } from "@/components/ui";

export function NoPostsMessage() {
  return (
    <div className="rounded-lg bg-gray-100 p-8 text-center dark:bg-gray-800">
      <div className="mx-auto max-w-md">
        <NoPosts />
        <h2 className="my-4 text-xl font-semibold text-muted-foreground">
          No posts available in this category.
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          It looks like there are no posts yet in this category. Please check
          back later.
        </p>
        <Button variant="default">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-700 text-sm font-semibold"
          >
            Go back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
