import { Cloud, CloudRain, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WeatherChart } from "./WeatherChart";

interface WeatherMainCardProps {
  city: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
  time: string;
}

export function WeatherMainCard({
  city,
  temperature,
  precipitation,
  humidity,
  wind,
  time,
}: WeatherMainCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Sun className="h-12 w-12 text-yellow-500" />
          <div>
            <h2 className="text-4xl font-bold">
              {temperature}
              °C
            </h2>
            <div className="space-y-1 text-sm text-muted-foreground">
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
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-lg font-semibold">{city}</h3>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </div>

      <WeatherChart />

      <div className="mt-6 grid grid-cols-8 gap-2">
        {["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"].map(
          (day, i) => (
            <div key={i} className="text-center">
              <p className="mb-2 text-sm">{day}</p>
              {i === 0 && <Sun className="mx-auto h-6 w-6 text-yellow-500" />}
              {i === 1 && <Cloud className="mx-auto h-6 w-6 text-gray-500" />}
              {i > 1 && <CloudRain className="mx-auto h-6 w-6 text-gray-500" />}
              <div className="mt-2 flex justify-center gap-1">
                <span className="text-sm">29°</span>
                <span className="text-sm text-muted-foreground">20°</span>
              </div>
            </div>
          ),
        )}
      </div>
    </Card>
  );
}
