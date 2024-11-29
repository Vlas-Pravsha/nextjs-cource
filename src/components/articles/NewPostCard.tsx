import type { Post } from '../../types/post'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

interface NewPostCardProps {
  post: Post
}

export function NewPostCard({ post }: NewPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src={post.image}
            alt={post.title}
            className="w-80 h-48 object-cover rounded-lg"
          />
          <div className="flex-1 min-w-0 p-4">
            <h3 className="font-semibold text-base mb-1 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-2 py-1">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-2 flex-shrink-0">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
