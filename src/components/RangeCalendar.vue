<template>
  <div>
    <BasicCalendar @dateRangeSelected="setDateRange" :dateRange="intervalOptions" />
    <div></div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import BasicCalendar from "./BasicCalendar.vue";
const props = defineProps({
  intervalOptions: [Object,String]
});
const dateRange = ref('');
const model = ref({ from: "2020/07/08", to: "2020/07/17" });
watch(
  () => props.intervalOptions,
  (newVal) => {
    dateRange.value = { ...newVal };
  },
  { immediate: true }
);
const setDateRange = (range) => {
  dateRange.value = range;
};
console.log(props.intervalOptions);
</script>

<style scoped></style>
