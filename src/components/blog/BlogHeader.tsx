import { ChevronRight } from 'lucide-react'

export function BlogHeader() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <span className="hover:text-foreground cursor-pointer">Home</span>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">Sport</span>
    </div>
  )
}
