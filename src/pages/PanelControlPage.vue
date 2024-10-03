<template>
  <div class="center-flex">
    <h1>Panel Control</h1>
    <WindyMap />
  </div>
</template>
<script setup>
import WindyMap from "../components/WindyMap.vue";
</script>

<style scoped>
.center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
