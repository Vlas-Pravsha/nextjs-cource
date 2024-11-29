import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
}) => (
  <div className="text-center">
    <AspectRatio ratio={1} className="mb-4">
      <img
        src={image}
        alt={name}
        className="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
    <h4 className="font-medium text-gray-900">{role}</h4>
  </div>
);
