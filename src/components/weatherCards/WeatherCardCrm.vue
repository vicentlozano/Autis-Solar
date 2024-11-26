<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <div class="container" v-else>
    <div>
      <div class="weather-card">
        <div class="header">
          <div class="temperature-container">
            <h2 class="temperature">{{ current.temp }}{{ current.text }}</h2>
            <div class="maxmin" @click="cambiarTemp">
              <p>{{ tempRange }}</p>
            </div>
            <div class="city-name">
              <div class="city-name-content">
                <img
                  src="../../assets/weather-images/location.png"
                  class="img-locate"
                />
                {{ city }}
              </div>
              <div class="city-name-content">
                <img
                  src="../../assets/weather-images/calendar.png"
                  class="img-locate"
                />
                {{ date }} - {{ $t("today") }}
              </div>
            </div>
          </div>
          <div class="weather-info">
            <img class="weather-icon" :src="imagenElegida" alt="Weather Icon" />
          </div>
        </div>
        <div class="info">
          <div class="info-item">
            <img
              class="icon"
              src="../../assets/weather-images/wind.png"
              alt="Wind"
            />
            <p class="info-text">{{ current.windSpeed }} {{ windSpeedUnit }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-item">
            <img
              class="icon"
              src="../../assets/weather-images/right-arrow.png"
              alt="Direction"
              :style="{
                transform: 'rotate(' + (current.windAngle - 90) + 'deg)',
              }"
            />
            <p class="info-text">{{ current.windDir }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-item">
            <img
              class="icon"
              src="../../assets/weather-images/cloud.png"
              alt="Clouds"
            />
            <p class="info-text">{{ current.clouds }}{{ cloudUnit }}</p>
          </div>
          <div class="divider"></div>
          <div class="info-item">
            <img
              class="icon"
              src="../../assets/weather-images/rainy.png"
              alt="Rain"
            />
            <p class="info-text">
              {{ current.precTotal }} {{ precipitationUnit }}
            </p>
          </div>
        </div>
        <hr class="divider-line" />
        <section class="tomorrow-card">
          <div class="tom-header">
            <div class="left-section">
              <img
                class="weather-icon2"
                :src="imagenManana"
                alt="Weather Icon"
              />
              <div class="city-name">
                <img
                  src="../../assets/weather-images/location.png"
                  class="img-locate"
                />
                {{ tomDay }} - {{ $t("tomorrow") }}
              </div>
            </div>
            <div class="temperature-container">
              <h2 class="tom-temperature">
                {{ tomorrow.temp }}{{ tomorrow.text }}
              </h2>
              <div class="maxmin" @click="cambiarTemp">
                <p>{{ tomTempRange }}</p>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="info-item">
              <img
                class="icon"
                src="../../assets/weather-images/wind.png"
                alt="Wind"
              />
              <p class="info-text">
                {{ tomorrow.windSpeed }} {{ windSpeedUnit }}
              </p>
            </div>
            <div class="divider"></div>
            <div class="info-item">
              <img
                class="icon"
                src="../../assets/weather-images/right-arrow.png"
                alt="Direction"
                :style="{
                  transform: 'rotate(' + (tomorrow.windAngle - 90) + 'deg)',
                }"
              />
              <p class="info-text">{{ tomorrow.windDir }}</p>
            </div>
            <div class="divider"></div>
            <div class="info-item">
              <img
                class="icon"
                src="../../assets/weather-images/cloud.png"
                alt="Clouds"
              />
              <p class="info-text">{{ tomorrow.clouds }}%</p>
            </div>
            <div class="divider"></div>
            <div class="info-item">
              <img
                class="icon"
                src="../../assets/weather-images/rainy.png"
                alt="Rain"
              />
              <p class="info-text">
                {{ tomorrow.precTotal }} {{ precipitationUnit }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchWeather, convertTemperature } from "../../utils/weatherUtil";
import LoadingSpinner from "src/layouts/LoadingSpinner.vue";

const props = defineProps({
  /**
   * @param {String} city Defines the city to be shown on the weather card.
   * example "London"
   * @param {String} unit The unit wich the information will be deployed
   *
   */
  city: {
    type: String,
    default: "Gandia",
  },
  unit: {
    type: String,
    default: "metric",
  },
});

const current = ref({});
const tomorrow = ref({});
const windSpeedUnit = ref("km/h");
const cloudUnit = ref("%");
const precipitationUnit = ref("mm");
const imagenElegida = ref("");
const imagenManana = ref("");
const date = ref("");
const tomDay = ref("");
const boolTemp = ref(false);
const loading = ref(false);

// Returns a string with the max and min temperature of today
const tempRange = computed(
  () => `${current.value.tempMax}º / ${current.value.tempMin}º`,
);
// Returns a string with the max and min temperature of tomorrow
const tomTempRange = computed(
  () => `${tomorrow.value.tempMax}º / ${tomorrow.value.tempMin}º`,
);

// Changes the temperature between Celsius and
const cambiarTemp = () => {
  boolTemp.value = !boolTemp.value;

  if (boolTemp.value) {
    current.value.temp = convertTemperature(current.value.temp, "F");
    current.value.tempMax = convertTemperature(current.value.tempMax, "F");
    current.value.tempMin = convertTemperature(current.value.tempMin, "F");
    tomorrow.value.temp = convertTemperature(tomorrow.value.temp, "F");
    tomorrow.value.tempMax = convertTemperature(tomorrow.value.tempMax, "F");
    tomorrow.value.tempMin = convertTemperature(tomorrow.value.tempMin, "F");
    current.value.text = "ºF";
    tomorrow.value.text = "ºF";
  } else {
    current.value.temp = convertTemperature(current.value.temp, "C");
    current.value.tempMax = convertTemperature(current.value.tempMax, "C");
    current.value.tempMin = convertTemperature(current.value.tempMin, "C");
    tomorrow.value.temp = convertTemperature(tomorrow.value.temp, "C");
    tomorrow.value.tempMax = convertTemperature(tomorrow.value.tempMax, "C");
    tomorrow.value.tempMin = convertTemperature(tomorrow.value.tempMin, "C");
    current.value.text = "ºC";
    tomorrow.value.text = "ºC";
  }
};

// Call the API to obtain the weather data and stores it
const fetchWeatherData = async () => {
  try {
    loading.value = true;

    const weatherData = await fetchWeather(props.city, props.unit);

    current.value = weatherData.current;
    tomorrow.value = weatherData.tomorrow;

    imagenElegida.value = require(
      `../../assets/weather-images/${current.value.icon}.png`,
    );
    imagenManana.value = require(
      `../../assets/weather-images/${tomorrow.value.icon}.png`,
    );

    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(today.getDate() + 1);

    date.value = today.toLocaleDateString(undefined, options);
    tomDay.value = tomorrowDate.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWeatherData();
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: sans-serif;
}

.container {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
}

.weather-card {
  background-image: url("../../assets/weather-images/clouds-back.jpg");
  background-size: cover;
  background-position: 100% 100%;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: left;
  color: white;
  position: relative;
  filter: brightness(70%), contrast(150%);
}

.tomorrow-card {
  margin-top: 1%;
  background: transparent;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: left;
  color: white;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.tom-header {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.left-section {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-icon {
  width: 100px;
  height: 100px;
}

.weather-icon2 {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.weather-desc {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.temperature-container {
  text-align: center;
  justify-content: start;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.temperature {
  margin: 0;
  font-size: 4rem;
  color: white;
}

.tom-temperature {
  top: 0;
  margin: 0;
  height: auto;
  font-size: 2.2rem;
  color: white;
}

.city-name {
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  color: white;
}

.city-name-content {
  text-align: left;
}

.maxmin {
  display: flex;
  justify-content: center;
  border: 1px solid white;
  padding: 2px;
  border-radius: 4px;
  margin-top: 0;
  margin-bottom: 5px;
}

.maxmin p {
  margin: 0 5px;
  text-align: center;
}

.maxmin:hover {
  cursor: pointer;
  background-color: rgba(240, 248, 255, 0.2);
}

.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 1rem;
  color: white;
  text-align: left;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 0.5rem 0rem 0.2rem;
}

.info-item {
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
}

.info-text {
  margin: 0;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: white;
  margin: 0 10px;
}

.divider2 {
  width: 1px;
  height: 20px;
  background-color: white;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.tomorrow-info {
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
}

.tomorrow-info p {
  margin: 5px 0;
}

.img-locate {
  width: 16px;
  height: 16px;
  filter: invert();
}

.divider-line {
  border: 0;
  border-top: 1px solid white;
  margin: 1rem 0;
}
</style>
