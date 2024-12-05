import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Why I Stopped Using Multiple Monitor",
    description:
      "A Single Monitor Manifesto — Many Developers Believe Multiple Monitors Improve Productivity. Studies Have Proven It, Right? Well, Keep In Mind, Many Of...",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "How to Drive a Car Safely",
    description:
      "Ah, The Joy Of The Open Road—It's A Good Feeling. But If You're New To Driving, You May...",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "How to Make Dance Music",
    description:
      "Download Torrents From Verified Or Trusted Uploaders. If You're A BitTorrent User Looking...",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
  },
];

export function FeaturedArticles() {
  return (
    <div className="relative">
      {/* Desktop view */}
      <div className="hidden space-x-6 p-4 md:flex">
        {articles.map((article) => (
          <Card key={article.id} className="w-full">
            <CardContent className="p-0">
              <div className="relative h-[300px] rounded-md">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="text-sm opacity-90">{article.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile view */}
      <div className="block p-4 md:hidden">
        {articles.slice(0, 1).map((article) => (
          <Card key={article.id} className="w-full">
            <CardContent className="p-0">
              <div className="relative h-[300px] rounded-md">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="text-sm opacity-90">{article.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
