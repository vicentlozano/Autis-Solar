<template>
  <div class="horizontal">
    <FilterBasic
      :options="intervals"
      :title="'Intervals'"
      :custom="custom"
      @filterSelect="setRangeOption"
    />
    <BasicCalendar
      :intervalOptions="intervalSelected"
      @dateRangeSelected="setRangeData"
      @isCustom="customDateOrNot"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits, computed, watch } from "vue";
import FilterBasic from "./FilterBasic.vue";
import BasicCalendar from "./BasicCalendar.vue";

const emits = defineEmits(["dateToSearch"]);
const intervalSelected = ref(
  new Date().toISOString().slice(0, 10).replace(/-/g, "/")
);
const custom = ref(false);
const intervals = ref([
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "This month",
  "Last Month",
  "Custom",
]);


const setRangeData = (value) => {
  intervalSelected.value = value;
};
const customDateOrNot = (isCustom) => {
  custom.value = isCustom;
};

const setRangeOption = (value) => {
  const today = new Date();
  let from, to;

  switch (value) {
    case "Today":
      intervalSelected.value = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "/");
      return;
    case "Yesterday":
      intervalSelected.value = new Date(today.setDate(today.getDate() - 1))
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "/");
      return;
    case "This week":
      from = new Date(today.setDate(today.getDate() - today.getDay()));
      to = new Date();
      break;
    case "Last week":
      from = new Date(today.setDate(today.getDate() - today.getDay() - 7));
      to = new Date(today.setDate(today.getDate() + 6));
      break;
    case "This month":
      from = new Date(today.getFullYear(), today.getMonth(), 1);
      from.setHours(23, 59, 59, 999);
      to = today;
      to.setHours(23, 59, 59, 999);
      break;
    case "Last Month":
      from = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      from.setHours(23, 59, 59, 999);
      to = new Date(today.getFullYear(), today.getMonth(), 0);
      to.setHours(23, 59, 59, 999);
      break;
    default:
      from = to = today;
  }

  // Formatea las fechas para que usen '/'
  const formatDate = (date) =>
    date.toISOString().slice(0, 10).replace(/-/g, "/");

  intervalSelected.value = {
    from: formatDate(from),
    to: formatDate(to),
  };
};
watch(intervalSelected, (newValue) => {
  emits("dateToSearch", intervalSelected.value);
  console.log(intervalSelected.value);
});
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
