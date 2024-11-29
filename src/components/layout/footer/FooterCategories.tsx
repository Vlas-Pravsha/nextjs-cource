const categories = [
  'Culture',
  'Fashion',
  'Featured',
  'Food',
  'Healthy Living',
  'Technology',
]

export function FooterCategories() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        <span className="text-red-500 mr-1">•</span>
        Categories
      </h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <a href={`/category/${category.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
