<template>
  <BaseSpinner v-if="!weatherData.data.temperature"></BaseSpinner>
  <section v-else class="card">
    <div class="vertical-flex">
      <img class="bigIcon" :src="iconSrc" />
      <p>{{ weatherData.data.temperature }}{{degrees}}</p>
      <div class="city">
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
            <p>{{ weatherData.data.cloudCover }}{{ percent }}</p>
          </div>
        </div>
        <div class="vertical-flex">
          <div>
            <p>{{ precipitation.data.total }}{{ milimeters }}</p>
          </div>
        </div>
      </div>
      <div class="grid-column">
        <div class="vertical-flex">
          <img
            class="arrow"
            src="../../assets/weather/arrow.png"
            :style="{ transform: `rotate(${wind.data.angle}deg)` }"
          />
          <p>{{ wind.data.speed }} {{ kmHour }}</p>
        </div>
        <div class="calendar">
          <button class="image-button" @click="setLessDay">
            <img src="../../assets/date/left.png" />
          </button>
          <img :src="iconDate" />
          <button class="image-button" @click="setPlusDay">
            <img src="../../assets/date/right.png" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useWeather } from "../../utils/weather/fetchWeather";
import BaseSpinner from "../../components/Weather/BaseSpinner.vue";
import { computed, defineProps, onMounted } from "vue";

const props = defineProps({
  city: String,
});

let day = 0;
const {
  weatherData,
  precipitation,
  wind,
  fetchingWeather,
  fetchingWeatherTomorrow,
  currentDate,
} = useWeather();
const kmHour = "km/h";
const degrees = '°C';
const percent = ' %';
const milimeters =' mm'
const setLessDay = async () => {
  if (day === 1) {
    await fetchingWeather(props.city);

    day--;
    currentDate.value;
  } else if (day > 1) {
    day--;
    currentDate.value--;

    await fetchingWeatherTomorrow(props.city, day);
  }
};
const setPlusDay = async () => {
  if (day < 6) {
    day++;
    currentDate.value++;

    await fetchingWeatherTomorrow(props.city, day);
  }
};

const iconSrc = computed(() => {
  const icon = weatherData.data.icon;
  return icon
    ? require(`../../assets/weather/${icon}.png`)
    : require("../../assets/weather/7.png");
});
const iconDate = computed(() => {
  const icon = currentDate.value;
  return icon
    ? require(`../../assets/date/${icon}.png`)
    : require("../../assets/date/01.png");
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
.card {
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  background: url("../../assets/weather/background2.png");
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 15px;
  padding: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.grid {
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}
.grid.with-border {
  border-top: 0.5px solid white;
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
.arrow,
.clouds,
.precipitation {
  width: 30px;
  height: 30px;
}
.bigIcon {
  width: 80px;
  height: 80px;
}
</style>
