import { FeaturedArticles } from "@/app/components/articles/FeaturedArticles";
import { NewPosts } from "@/app/components/articles/NewPosts";
import { PopularPosts } from "@/app/components/articles/PopularPosts";
import { CategoryTags } from "@/components/layout/CategoryTags";
import { VideoCard } from "@/app/components/video/VideoCard";
import { VideoSection } from "@/app/components/video/VideoSection";
import { WeatherDashboard } from "@/app/components/weather/WeatherDashboard";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <CategoryTags />
        <FeaturedArticles />
        <PopularPosts />
      </div>
      <VideoSection title="Latest Videos">
        <VideoCard
          size="large"
          imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          title="How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)"
          description="You've Read All Your Free Member-Only Stories. Become A Member To Get Unlimited Access. Your Membership Fee Supports The Voices You Want To Hear More From."
        />
        <VideoCard
          imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          title="5 Reasons Why You Should Wrap..."
          description="So, You Finally Went To Your First Boxing Class And Learned The Basics Of The Sport. You Also Learned That It's Recommended To Wrap Your Hands Before Putting On The Gloves."
        />
        <VideoCard
          imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          title="Music Genre Classification With..."
          description="A Guide To Analyzing Audio/Music Signals In Python – Music Is Like A Mirror, And It Tells People A Lot About Who You Are And What You Care About."
        />
      </VideoSection>
      <div className="container mx-auto">
        <WeatherDashboard />
        <NewPosts />
      </div>
    </main>
  );
}
