import { type LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  value,
}) => (
  <div className="flex items-center">
    <Icon className="mr-3 h-8 w-8 text-primary" />
    <div>
      <p className="text-base text-gray-600">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);
