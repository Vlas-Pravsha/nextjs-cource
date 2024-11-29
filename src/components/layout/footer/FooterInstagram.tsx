const images = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&q=80&w=200&h=200',
]

export function FooterInstagram() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">
        <span className="text-red-500 mr-1">•</span>
        Follow On Instagram
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <a
            key={index}
            href="#"
            className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <img
              loading="lazy"
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
