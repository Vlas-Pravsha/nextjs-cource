import { cn } from '../../lib/utils'

const categories = [
  { name: 'Food', color: 'bg-orange-500' },
  { name: 'Animal', color: 'bg-yellow-500' },
  { name: 'Car', color: 'bg-blue-500' },
  { name: 'Sport', color: 'bg-green-500' },
  { name: 'Music', color: 'bg-yellow-400' },
  { name: 'Technology', color: 'bg-purple-500' },
  { name: 'Abstract', color: 'bg-pink-500' },
]

export function CategoryTags() {
  return (
    <div className="flex space-x-4 p-4">
      {categories.map(category => (
        <div
          key={category.name}
          className={cn(
            'relative h-24 w-full rounded-lg overflow-hidden cursor-pointer',
            category.color,
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-2 left-2 text-white font-medium">
            #
            {category.name}
          </span>
        </div>
      ))}
    </div>
  )
}
