import { clsx } from 'clsx'
import React from 'react'
import { VideoInfo } from './VideoInfo'
import { VideoThumbnail } from './VideoThumbnail'

interface VideoCardProps {
  imageUrl: string
  title: string
  description: string
  className?: string
  size?: 'small' | 'large'
}

export const VideoCard: React.FC<VideoCardProps> = ({
  imageUrl,
  title,
  description,
  className,
  size = 'small',
}) => {
  return (
    <article
      className={clsx(
        'bg-white rounded-lg shadow-lg overflow-hidden',
        size === 'large' ? 'col-span-2 row-span-2' : '',
        className,
      )}
    >
      <div className={clsx(
        'relative',
        size === 'large' ? 'aspect-[16/9]' : 'aspect-video',
      )}
      >
        <VideoThumbnail imageUrl={imageUrl} alt={title} />
      </div>
      <VideoInfo title={title} description={description} />
    </article>
  )
}
