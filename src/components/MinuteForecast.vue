<template>\
    <h1>data</h1>
</template>
<script setup>
import { useMinuteForecast } from "../composables/AcuWeatherComposable/useMinuteForecast";
const { forecastData } = useMinuteForecast();
console.log(forecastData.value);
</script>
<style scoped></style>
