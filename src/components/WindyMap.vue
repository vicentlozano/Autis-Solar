<template>
  <div id="windy"></div>
</template>
<script setup>
import { useMapForecastWindy } from "../composables/useMapForecastWindy.js";
useMapForecastWindy();
</script>

<style scoped>
#windy {
  width: 80%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
