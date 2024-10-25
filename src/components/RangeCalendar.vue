<template>
  <div>
    <BasicCalendar
      @dateRangeSelected="setDateRange"
      :dateRange="intervalOptions"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";
import BasicCalendar from "./Filter/BasicCalendar.vue";

const props = defineProps({
  intervalOptions: [Object, String],
});
const emits = defineEmits(["dateSelected"]);
const dateRange = ref("");
const model = ref({ from: "2020/07/08", to: "2020/07/17" });

watch(
  () => props.intervalOptions,
  (newVal) => {
    dateRange.value = { ...newVal };
  },
  { immediate: true }
);
watch(dateRange, (newVal) => {
  emits("dateSelected", dateRange.value);
});

const setDateRange = (range) => {
  dateRange.value = range;
};
</script>

<style scoped></style>
