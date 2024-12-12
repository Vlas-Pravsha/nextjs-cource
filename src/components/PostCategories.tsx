import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type CategoriesType, useCategory } from "@/context/CategoryContext";

const categories: CategoriesType[] = [
  "Food",
  "Animal",
  "Car",
  "Sport",
  "Music",
  "Technology",
  "Abstract",
];

export function PostCategories({
  viewMode,
  onViewModeChange,
}: {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}) {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap gap-2">
        <Button
          key="All"
          variant={selectedCategory === "All" ? "default" : "ghost"}
          onClick={() => setSelectedCategory("All")}
          className={
            selectedCategory === "All" ? "text-primary-foreground" : ""
          }
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? "text-primary-foreground" : ""
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
