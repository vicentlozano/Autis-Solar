<template>
  <h4>Historical Data Search</h4>
  <FilterTab
    :optionsSelectOne="teamOptions"
    :titleSelectOne="teamTitle"
    :optionsRangeInterval="rangeIntervals"
    :titleRangeInterval="titleRange"
    :rangeCalendar="isRangeCalendar"
    :isSearch="false"
    :isToggle="true"
    :togleLabel="'Auto'"
  />
</template>
<script setup>
import FilterTab from "src/components/FilterTab.vue";

const teamOptions = ["Emet", "Sistema 1"];
const teamTitle = "General";
const rangeIntervals = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "This month",
  "Last Month",
  "Custom",
];
const titleRange = "intervals";
const isRangeCalendar = true;
</script>

<style scoped>
h4 {
  text-align: center;
}
</style>
