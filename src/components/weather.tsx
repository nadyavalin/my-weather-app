import { useFetchWeatherItems } from "@/app/api/route";

export function WeatherComponent() {
  useFetchWeatherItems();

  return <div>Check console for weather data</div>;
}
