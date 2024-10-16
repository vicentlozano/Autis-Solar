<template>
  <div class="q-pa-md">
    <q-card class="filter-card">
      <FilterBasic :options="options" :title="title" />
      <FilterDateTime />
    </q-card>
  </div>
</template>
<script setup>
import FilterBasic from "./FilterBasic.vue";
import FilterDateTime from "./FilterDateTime.vue";
const options = ["pepe", "maria", "jose"];
const title = "Team";
</script>
<style scoped>
.filter-card {
  display: flex;
  flex-direction: row;
}
</style>
