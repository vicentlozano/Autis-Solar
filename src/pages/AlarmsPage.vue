<template>
  <SimpleTab :columns="columns" :rows="rows" :title="title" />
  <FilterTab />
</template>
<script setup>
import { ref } from "vue";
import SimpleTab from "src/components/SimpleTab.vue";
import FilterTab from "src/components/FilterTab.vue";
const currentDate = ref(new Date().toLocaleString());
const title = "Active Warnings";

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

</style>
