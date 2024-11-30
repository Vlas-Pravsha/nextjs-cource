import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const categories = ["New", "Trendy", "Popular", "Top"];

export function PostCategories({
  activeCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}: PostCategoriesProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "ghost"}
            onClick={() => onCategoryChange(category)}
            className={
              activeCategory === category ? "text-primary-foreground" : ""
            }
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewModeChange("list")}
          className={viewMode === "list" ? "bg-muted" : ""}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewModeChange("grid")}
          className={viewMode === "grid" ? "bg-muted" : ""}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
