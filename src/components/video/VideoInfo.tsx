import React from 'react'

interface VideoInfoProps {
  title: string
  description: string
}

export const VideoInfo: React.FC<VideoInfoProps> = ({ title, description }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
