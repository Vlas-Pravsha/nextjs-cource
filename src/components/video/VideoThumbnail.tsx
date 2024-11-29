import { Play } from 'lucide-react'
import React from 'react'

interface VideoThumbnailProps {
  imageUrl: string
  alt: string
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ imageUrl, alt }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  )
}
