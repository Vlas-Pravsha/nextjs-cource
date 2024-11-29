import { Card } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Card className="p-6 text-center transition-shadow hover:shadow-lg">
    <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
    <h3 className="mb-2 text-3xl font-bold">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </Card>
);
