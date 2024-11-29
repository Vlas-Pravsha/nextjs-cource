import { Cloud, CloudRain, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WeatherCityCardProps {
  name: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
  time: string;
  icon: string;
  bgClass: string;
}

export function WeatherCityCard({
  name,
  temperature,
  precipitation,
  humidity,
  wind,
  time,
  icon,
  bgClass,
}: WeatherCityCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-90`}
      />
      <div className="relative p-4 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm opacity-90">{time}</p>
          </div>
          <div className="text-4xl font-bold">
            {temperature}
            °C
          </div>
        </div>

        <div className="mt-4 space-y-1 text-sm">
          <p>
            Precipitation:
            {precipitation}%
          </p>
          <p>
            Humidity:
            {humidity}%
          </p>
          <p>
            Wind:
            {wind} Km/H
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          {icon === "sun" && <Sun className="h-12 w-12" />}
          {icon === "cloud" && <Cloud className="h-12 w-12" />}
          {icon === "cloud-rain" && <CloudRain className="h-12 w-12" />}
        </div>
      </div>
    </Card>
  );
}
