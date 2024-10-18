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
import BasicCalendar from "./BasicCalendar.vue";

const props = defineProps({
  intervalOptions: [Object, String],
});
const emits = defineEmits(['dateToSearch']);
const dateRange = ref("");
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
</script>

<style scoped></style>
