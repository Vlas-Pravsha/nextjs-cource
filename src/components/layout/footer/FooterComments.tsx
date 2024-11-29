const comments = [
  {
    author: 'Ellsmartx',
    comment: 'How Nice Does This Look 😍 I Feel It Should Be Delicious...',
  },
  {
    author: 'Cassia',
    comment: 'Take A Rest, I\'ll Be Cheer Up You Again In Z Next Game Go G...',
  },
  {
    author: 'Amanda',
    comment: 'You Were Stunning Today, Jan! ❤️ Great Match 🏸🏸',
  },
  {
    author: 'Denis Simonassi',
    comment: 'It Was A Great Match Today Jan2!! You Did Great!🥇',
  },
]

export function FooterNewComments() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">
        <span className="text-red-500 mr-1">•</span>
        New Comments
      </h3>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="space-y-1 bg-gray-100 rounded-lg p-3">
            <h4 className="text-sm font-medium">{comment.author}</h4>
            <p className="text-sm text-muted-foreground">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
