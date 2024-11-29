import { WeatherCityCard } from "./WeatherCityCard";
import { WeatherMainCard } from "./WeatherMainCard";

const cities = [
  {
    name: "Ankara",
    temperature: 32,
    precipitation: 0,
    humidity: 41,
    wind: 27,
    time: "Tuesday 2:00 PM",
    icon: "sun",
    bgClass: "from-orange-400 to-orange-600",
  },
  {
    name: "Alaska",
    temperature: 16,
    precipitation: 18,
    humidity: 32,
    wind: 16,
    time: "Tuesday 3:00 AM",
    icon: "cloud-rain",
    bgClass: "from-blue-400 to-blue-600",
  },
  {
    name: "Berlin",
    temperature: 24,
    precipitation: 70,
    humidity: 50,
    wind: 14,
    time: "Tuesday 1:00 PM",
    icon: "cloud-rain",
    bgClass: "from-green-400 to-green-600",
  },
  {
    name: "Paris",
    temperature: 27,
    precipitation: 10,
    humidity: 44,
    wind: 14,
    time: "Tuesday 10:00 PM",
    icon: "cloud",
    bgClass: "from-purple-400 to-purple-600",
  },
];

export function WeatherDashboard() {
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeatherMainCard
            city="New York, NY"
            temperature={29}
            precipitation={2}
            humidity={70}
            wind={3}
            time="Wednesday 04:00"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {cities.map((city) => (
            <WeatherCityCard key={city.name} {...city} />
          ))}
        </div>
      </div>
    </div>
  );
}
