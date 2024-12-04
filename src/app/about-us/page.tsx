import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import {
  Building2,
  ChevronLeft,
  Clock,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
} from "lucide-react";

import { StatsCard } from "./components/StatsCard";
import { InfoCard } from "./components/InfoCard";
import { TeamMemberCard } from "./components/TeamMemberCard";
import { teamMembers } from "@/constants/teamMembers";
import Link from "next/link";
import { pagesConfig } from "@/config/pages.config";

const stats = [
  { icon: Users, label: "Team Members", value: "1" },
  { icon: Building2, label: "Global Offices", value: "My home" },
  { icon: Trophy, label: "Awards Won", value: "0" },
];

const contactInfo = [
  { icon: Mail, title: "Email", value: "Management@Mega.News" },
  { icon: Phone, title: "Phone Number", value: "+1(234) 567-8910" },
  {
    icon: MapPin,
    title: "Address",
    value: "1234 Forum St, New Lenox, IL 123456",
  },
  { icon: Clock, title: "Working Hours", value: "24/7, All Week" },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-white py-4">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Link href={pagesConfig.home}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Home</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 rounded-xl bg-gray-100 p-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              We pay attention to your needs and do the best design.
            </h2>
            <p className="mb-8 text-gray-600">
              MEGA.news is a comprehensive news platform designed to keep
              readers informed with the latest developments across a wide range
              of topics. Covering politics, technology, entertainment, business,
              and more, it delivers accurate, concise, and timely updates. With
              a focus on providing high-quality journalism and an
              easy-to-navigate interface, MEGA.news ensures users can quickly
              access reliable news tailored to their interests and stay
              connected to global events.
            </p>
          </div>
          <div className="relative">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-lg bg-muted"
            >
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        {/* Contact Info */}
        <div className="mb-16 rounded-lg bg-gray-50 p-8">
          <h3 className="mb-6 text-2xl font-bold">Mega News Information</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <InfoCard
                key={index}
                icon={info.icon}
                title={info.title}
                value={info.value}
              />
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="mb-8 text-2xl font-bold">Mega News Team</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
