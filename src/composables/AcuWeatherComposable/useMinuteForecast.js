import { ref, onMounted } from "vue";
import axios from "axios";

export const useMinuteForecast = () => {
  const forecastData = ref(null);
  const apiKey = "CjOd5AkexpGVAG8m9Zln9Lf8rr98GQun";
  const url = "/api.accuweather.com/forecasts/v1/minute";
  const params = {
    q: "38.956239%2C0.1822883",
    apikey: apiKey,
  };
  const requestForecast = async () => {
    try {
      const response = await axios.get(url, { params });
      forecastData.value = response.data;
    } catch (error) {
      console.error("Error making a request", error);
    }
  };

  onMounted(() => {
    requestForecast();
  });
  return {
    forecastData,
  };
};
