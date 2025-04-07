import axios from "axios";

export const useFetchWeatherItems = () => {
  const fetchItems = async () => {
    try {
      const city = "Saint Petersburg";
      const countryCode = "RU";
      const limit = 5;
      const apiKey = process.env.WEATHER_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=${limit}&appid=${apiKey}`;

      console.log("Fetching data from:", url);

      const response = await axios.get(url);
      console.log("API Response:", response.data);

      if (!response.data || response.data.length === 0) {
        console.warn("Received empty data from API");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  fetchItems();
};
