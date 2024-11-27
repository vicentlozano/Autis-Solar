<template>
  <section v-if="isAlarm" class="alarm">
    <AlarmCard />
  </section>
  <section class="weather">
    <WeatherCard3 :city="'Gandia'" />
  </section>
  <section class="data-cards">
    <DataCard
      :title="title"
      :icon="icon"
      :data="data"
      :data-ext="dataExt"
      :title-data="titleData"
      :widgets="widgets"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import AlarmCard from "src/components/AlarmCard.vue";
import WeatherCard3 from "src/components/weatherCards/WeatherCard3.vue";
import DataCard from "src/components/cards/DataCard.vue";

const isAlarm = ref(true);
const title = "Sistema 1";
const icon = "/icons/sistemIcon.png";
const data = ref(33.5);
const dataExt = "kWh";
const titleData = "E. diaria exportada";
const widgets = [
  { src: "/icons/iconLineChart.png", route: "/Alerts" },
  { src: "/icons/iconGaugeChart.png", route: "/Exploitation" },
];
</script>

<style scoped>
.weather {
  width: 100%;
  padding: 1rem;
}
.data-card{
  width: 100%;
}
</style>
