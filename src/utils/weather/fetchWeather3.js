import { reactive, ref } from "vue";

export function useWeather() {
  const weatherDataToday = reactive({
    data: {
      icon: "",
      temperature: null,
      temperatureMin: null,
      temperatureMax: null,
      cloudCover: null,
      precipitation: {},
      wind: {},
    },
  });
  const weatherDataTomorrow = reactive({
    data: {
      icon: "",
      temperature: null,
      temperatureMin: null,
      temperatureMax: null,
      cloudCover: null,
      precipitation: {},
      wind: {},
    },
  });
  const precipitationToday = reactive({ data: {} });
  const windToday = reactive({ data: {} });
  const precipitationTomorrow = reactive({ data: {} });
  const windTomorrow = reactive({ data: {} });
  const currentDateToday = ref("");
  const currentDateTomorrow = ref("");

  const fetchingWeather = async (prop) => {
    const apiKey = "m5k6939i9lv8tblbjg6uq4hvfunthrwfhmis1cc1";

    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${prop}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`,
    );
    const responseData = await response.json();

    weatherDataToday.data.icon = responseData.current.icon_num;
    weatherDataToday.data.temperature = responseData.current.temperature;
    weatherDataToday.data.temperatureMin =
      responseData.daily.data[0].all_day.temperature_min;
    weatherDataToday.data.temperatureMax =
      responseData.daily.data[0].all_day.temperature_max;
    weatherDataToday.data.cloudCover = responseData.current.cloud_cover;
    precipitationToday.data = responseData.current.precipitation;
    windToday.data = responseData.current.wind;

    const date = new Date(responseData.daily.data[0].day);
    const options = { year: "numeric", month: "short", day: "numeric" };
    currentDateToday.value = date.toLocaleDateString("es-ES", options);

    weatherDataTomorrow.data.icon = responseData.daily.data[1].all_day.icon;
    weatherDataTomorrow.data.temperature =
      responseData.daily.data[1].all_day.temperature;
    weatherDataTomorrow.data.temperatureMin =
      responseData.daily.data[1].all_day.temperature_min;
    weatherDataTomorrow.data.temperatureMax =
      responseData.daily.data[1].all_day.temperature_max;
    weatherDataTomorrow.data.cloudCover =
      responseData.daily.data[1].all_day.cloud_cover;
    precipitationTomorrow.data =
      responseData.daily.data[1].all_day.precipitation;
    windTomorrow.data = responseData.daily.data[1].all_day.wind;
    

    const date1 = new Date(responseData.daily.data[1].day);
    const dayOptions1 = { weekday: 'short' };
    currentDateTomorrow.value = date1.toLocaleDateString('es-ES', dayOptions1);
  };

  return {
    weatherDataToday,
    weatherDataTomorrow,
    precipitationToday,
    precipitationTomorrow,
    windToday,
    windTomorrow,
    currentDateToday,
    currentDateTomorrow,
    fetchingWeather,
  };
}
