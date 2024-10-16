<template>
  <div class="horizontal">
    <FilterBasic :options="intervals" :title="'intervals'" />
    <RangeCalendar/>
  </div>
</template>
<script setup>
import { ref } from "vue";
import FilterBasic from "./FilterBasic.vue";
import CalendarBasic from "./BasicCalendar.vue";
import RangeCalendar from "./RangeCalendar.vue";

const model = ref("");
const intervals = ref([
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "This month",
  "Last Month",
]);
</script>
<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
