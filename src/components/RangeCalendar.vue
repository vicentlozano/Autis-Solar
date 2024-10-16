<template>
  <div>
    <BasicCalendar @dateRangeSelected="setDateRange" />
    <div>
      <p>Initial Date: {{ dateRange[0] }}</p>
      <p>Final Date: {{ dateRange[1] }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BasicCalendar from "./BasicCalendar.vue";

const dateRange = ref(["", ""]);

const setDateRange = (range) => {
  dateRange.value = range;
};
</script>

<style scoped></style>