<template>
  <q-card class="filter-card">
    <FilterBasic :options="options" :title="title"/>
  </q-card>
</template>
<script setup>
import FilterBasic from "./FilterBasic.vue";
const options = ["pepe", "maria", "jose"];
const title = "Team";
</script>
