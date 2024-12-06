import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { FeaturedArticles } from "@/app/components/articles/FeaturedArticles";
import { PopularPosts } from "@/app/components/articles/PopularPosts";
import { CategoryTags } from "@/components/layout/CategoryTags";

const DynamicVideoCard = dynamic(
  () => import("@/app/components/video/VideoCard"),
);
const DynamicNewPosts = dynamic(
  () => import("@/app/components/articles/NewPosts"),
);
const DynamicWeatherDashboard = dynamic(
  () => import("@/app/components/weather/WeatherDashboard"),
);
const DynamicVideoSection = dynamic(
  () => import("@/app/components/video/VideoSection"),
);

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <CategoryTags />
        <FeaturedArticles />
        <PopularPosts />
      </div>
      <Suspense fallback={<div>Loading Videos...</div>}>
        <DynamicVideoSection title="Latest Videos">
          <DynamicVideoCard
            size="large"
            imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            title="How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)"
            description="You've Read All Your Free Member-Only Stories. Become A Member To Get Unlimited Access. Your Membership Fee Supports The Voices You Want To Hear More From."
          />
          <DynamicVideoCard
            className="hidden md:block"
            imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            title="5 Reasons Why You Should Wrap..."
            description="So, You Finally Went To Your First Boxing Class And Learned The Basics Of The Sport. You Also Learned That It's Recommended To Wrap Your Hands Before Putting On The Gloves."
          />
          <DynamicVideoCard
            className="hidden md:block"
            imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
            title="Music Genre Classification With..."
            description="A Guide To Analyzing Audio/Music Signals In Python – Music Is Like A Mirror, And It Tells People A Lot About Who You Are And What You Care About."
          />
        </DynamicVideoSection>
      </Suspense>
      <Suspense fallback={<div>Loading New Posts...</div>}>
        <div className="container mx-auto">
          <DynamicWeatherDashboard />
          <DynamicNewPosts />
        </div>
      </Suspense>
    </main>
  );
}
