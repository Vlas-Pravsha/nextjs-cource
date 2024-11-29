import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  Clock,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Trophy,
  Users,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Programmer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "James Wilson",
    role: "Marketing",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Maya Patel",
    role: "Administrative",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "David Kim",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80",
  },
  {
    name: "Emma Thompson",
    role: "Financial",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80",
  },
];

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Building2, label: "Global Offices", value: "12" },
  { icon: Trophy, label: "Awards Won", value: "25+" },
];

export default function AboutUs() {
  return (
    <div className="w-full bg-white py-4">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="h-6 w-6" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat.
            </p>
            <Button className="group">
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="relative">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-lg bg-muted"
            >
              <div className="absolute inset-0" />
              <PlayCircle className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-white transition-transform hover:scale-110" />
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
            <Card
              key={index}
              className="p-6 text-center transition-shadow hover:shadow-lg"
            >
              <stat.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mb-16 rounded-lg bg-gray-50 p-8">
          <h3 className="mb-6 text-2xl font-bold">Mega News Information</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center">
              <Mail className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="text-base text-gray-600">Email</p>
                <p className="font-medium">Management@Mega.News</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="text-base text-gray-600">Phone Number</p>
                <p className="font-medium">+1(234) 567-8910</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="text-base text-gray-600">Address</p>
                <p className="font-medium">
                  1234 Forum St, New Lenox, IL 123456
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-3 h-8 w-8 text-primary" />
              <div>
                <p className="text-base text-gray-600">Working Hours</p>
                <p className="font-medium">24/7, All Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="mb-8 text-2xl font-bold">Mega News Team</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <AspectRatio ratio={1} className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </AspectRatio>
                <h4 className="font-medium text-gray-900">{member.role}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
