<template>
  <section v-if="isAlarm" class="alarm">
    <AlarmCard/>
  </section>
  <section  class="weather">
    <WeatherCard3 :city="'Gandia'"/>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import AlarmCard from 'src/components/AlarmCard.vue';
import WeatherCard3 from 'src/components/weatherCards/WeatherCard3.vue';

const isAlarm = ref(true);
</script>

<style scoped>
.weather{
    width: 100%;
    padding: 1rem;
}
</style>
