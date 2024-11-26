<template>
  <BaseSpinner
    v-if="
      !weatherDataToday.data.temperature ||
      !weatherDataTomorrow.data.temperature
    "
  ></BaseSpinner>
  <section v-else class="card">
    <div class="grid-column">
      <div class="vertical-flex">
        <img class="icon-big" :src="iconSrc" />
        <p>{{ weatherDataToday.data.temperature }}{{ degrees }}</p>
        <div class="city">
          <p>{{ currentDateToday }}</p>
          <p>{{ city }} <img src="../../assets/weather/location.png" /></p>
        </div>
      </div>
      <div class="grid with-border">
        <div class="grid-column">
          <img class="clouds" src="../../assets/weather/clouds.png" />
          <img
            class="precipitation"
            src="../../assets/weather/precipitation.png"
          />
        </div>
        <div class="grid-column">
          <div class="vertical-flex">
            <div>
              <p>{{ weatherDataToday.data.cloudCover }} {{ slash }}</p>
            </div>
          </div>
          <div class="vertical-flex">
            <div>
              <p>{{ precipitationToday.data.total }}{{ milimeters }}</p>
            </div>
          </div>
        </div>
        <div class="grid-column">
          <div class="vertical-flex">
            <img
              class="arrow"
              src="../../assets/weather/arrow.png"
              :style="{ transform: `rotate(${windToday.data.angle}deg)` }"
            />
            <p>{{ windToday.data.speed }} {{ kilHour }}</p>
          </div>
          <div class="vertical-flex">
            <div class="grid-column">
              <img class="bar-down" src="../../assets/weather/bar-down.svg" />
              <p>{{ weatherDataToday.data.temperatureMin }}</p>
            </div>
            <div class="grid-column">
              <img class="bar-up" src="../../assets/weather/bar-up.svg" />
              <p>{{ weatherDataToday.data.temperatureMax }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tomorrow">
      <div>
        <p>{{ currentDateTomorrow }}</p>
        <div class="grid-column">
          <div class="right">
            <img class="icon-medium" :src="iconSrc2" />
          </div>
          <div class="left">
            <p>{{ weatherDataTomorrow.data.temperature }}{{ degrees }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="vertical-flex">
          <div class="grid-column">
            <img class="bar-down" src="../../assets/weather/bar-down.svg" />
            <p>{{ Math.round(weatherDataTomorrow.data.temperatureMin) }}</p>
          </div>
          <div class="grid-column">
            <img class="bar-up" src="../../assets/weather/bar-up.svg" />
            <p>{{ Math.round(weatherDataTomorrow.data.temperatureMax) }}</p>
          </div>
        </div>
      </div>
      <div class="vertical-flex">
        <img class="clouds" src="../../assets/weather/clouds.png" />
        <p>{{ weatherDataTomorrow.data.cloudCover.total }} {{ slash }}</p>
      </div>
      <div class="vertical-flex">
        <img
          class="precipitation"
          src="../../assets/weather/precipitation.png"
        />
        <p>{{ precipitationTomorrow.data.total }}{{ milimeters }}</p>
      </div>
      <div>
        <div class="vertical-flex">
          <img
            class="arrow"
            src="../../assets/weather/arrow.png"
            :style="{ transform: `rotate(${windTomorrow.data.angle}deg)` }"
          />
          <p>{{ windTomorrow.data.speed }} {{ kilHour }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useWeather } from "../../utils/weather/fetchWeather3";
import BaseSpinner from "../weatherCards/BaseSpinner.vue";
import { computed, defineProps, onMounted, ref } from "vue";
const props = defineProps({
  city: String,
});
let day = 0;
const degrees = "°C";
const milimeters = " mm";
const slash = "%";
const kilHour = "km/h";
const {
  weatherDataToday,
  weatherDataTomorrow,
  precipitationToday,
  precipitationTomorrow,
  windToday,
  windTomorrow,
  currentDateToday,
  currentDateTomorrow,
  fetchingWeather,
} = useWeather();
const tomorrow = ref(true);

const iconSrc = computed(() => {
  const icon = weatherDataToday.data.icon;
  return icon
    ? require(`../../assets/weather/${icon}.png`)
    : require("../../assets/weather/7.png");
});
const iconSrc2 = computed(() => {
  const icon = weatherDataTomorrow.data.icon;
  return icon
    ? require(`../../assets/weather/${icon}.png`)
    : require("../../assets/weather/7.png");
});

onMounted(async () => {
  await fetchingWeather(props.city);
});

// setInterval(()=>fetchingWeather(),100000000);
// const formatHour = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap");
*{
  box-sizing: border-box !important;
}
.card {
  display: grid;
  grid-template-rows: 2fr 1fr;
  background: url("../../assets/weather/background2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 0.4rem;
  padding: 1rem 0rem 0.5rem 0rem;
  border-radius:10px;
  box-sizing: border-box;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  font-family: "Helvetica Neue", sans-serif;
}
.grid {
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}
.grid.with-border {
  border-left: 0.5px solid white;
  padding-top: 0.6rem;
}

.grid-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.grid-column img {
  justify-self: center;
  align-self: center;
}
.right {
  display: flex;
  align-items: flex-end;
  justify-content: end;
}
.left {
  display: flex;
  align-items: flex-end;
  justify-content: start;
}
.grid-row {
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.vertical-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.city {
  display: flex;
  align-items: center;
}
p {
  color: white;
  text-align: center;
  margin: 0.3rem;
}
.image-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.image-button img {
  display: block;
}
.calendar {
  display: flex;
  flex-direction: row;
}
.temicon {
  margin: 4.8px;
}
.bar-up,
.bar-down {
  width: 20px;
  height: 20px;
}
.two-cards {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
.tomorrow {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border-top: 0.5px solid white;
  padding-top: 0.6rem;
  column-gap: 2px;
}
.clouds,
.precipitation,
.arrow {
  width: 30px;
  height: 30px;
}
.icon-big {
  width: 80px;
  height: 80px;
}
.icon-medium {
  width: 40px;
  height: 40px;
}
</style>
