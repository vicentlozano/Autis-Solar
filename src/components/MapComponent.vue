<template>
  <q-card bordered class="filter-card">
    <img src="../../public/map_bg.a2e40de4.png" class="image" />
    <CircularProgres :max="4000" :min="0" :unit="'kW'" :value="1900.2" />
  </q-card>
</template>
<script setup>
import CircularProgres from "./CircularProgres.vue";
</script>
<style scoped>
.filter-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 12px;
  width: 100%;
  will-change: transform;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.image {
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: absolute;
  z-index: 0;
  transform: rotate(deg);
}
</style>
