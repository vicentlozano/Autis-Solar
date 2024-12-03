<template>
  <section :class="rows2 ? 'normalize-all' : 'normalize'">
    <SimpleTab :columns="columns" :rows="rows" :title="title" />
    <div class="filter">
      <FilterTab
        :optionsSelectOne="teamOptions"
        :titleSelectOne="teamTitle"
        :optionsRangeInterval="rangeIntervals"
        :titleRangeInterval="titleRange"
        :rangeCalendar="isRangeCalendar"
        :isSearch="true"
        @searchData="showData"
        :title="'Alarms Historic'"
      />
      <SimpleTab v-if="rows2" :columns="columns" :rows="rows2" />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SimpleTab from "src/components/SimpleTab.vue";
import FilterTab from "src/components/FilterTab.vue";
const currentDate = ref(new Date().toLocaleString());
const title = "Active Warnings";
const teamOptions = ["Vicent", "Marc", "Carles"];
const teamTitle = "Team";
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
const rows2 = ref(null);
const showData = (data) => {
  rows2.value = [...rows];
  rows2.value[2].component = data.value.filterDateTime;
};
const columns = [
  {
    name: "name",
    required: true,
    label: "Date",
    align: "center",
    field: (row) => row.date,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "component",
    align: "center",
    label: "Component",
    align: "center",

    field: "component",
    sortable: false,
  },
  {
    name: "description",
    label: "Description",
    field: "description",
    align: "center",
    sortable: false,
  },
];

const rows = [
  {
    date: currentDate.value,
    component: "RELE",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta a niveles extremos. precaución",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
  {
    date: currentDate.value,
    component: "PLC INGETEAM",
    description: "Temperatura alta",
  },
];
</script>

<style scoped>
.normalize {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  max-height: 100%;
}
.normalize-all {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;
}
</style>
