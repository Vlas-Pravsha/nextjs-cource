import { ChevronRight } from 'lucide-react'
import { posts } from '../../constants/posts'
import { Button } from '../ui/button'
import { NewPostCard } from './NewPostCard'

export function NewPosts() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">📌 New Posts</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Show All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 6).map(post => (
          <NewPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
