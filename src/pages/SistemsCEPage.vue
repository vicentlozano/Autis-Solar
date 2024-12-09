<template>
  <div class="q-pa-md principal">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey-7n banner"
      active-color="primary"
      indicator-color="purple"
      align="justify"
    >
      <q-tab name="contador" label="Contador" class="minimal"/>
      <q-tab name="rele" label="Rele" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent text-white map">
      <q-tab-panel name="contador" class="content">
        <div class="panel-container">
          <!-- Panel izquierdo fijo -->
          <div class="left-panel">
            <q-tabs v-model="innerTab" vertical class="text-teal">
              <q-tab name="parameters" icon="mail" label="Parameters" class="custom-label" />
              <q-tab name="advancedParameters" icon="mdi-abacus" label="Advanced Parameters" class="custom-label" />
              <q-tab name="historic" icon="movie" label="Historic" class="custom-label" />
            </q-tabs>
          </div>

          <!-- Panel derecho dinámico -->
          <div class="right-panel">
            <q-tab-panels
              v-model="innerTab"
              animated
              transition-prev="slide-down"
              transition-next="slide-up"
              class="bg-transparent text-black is-full"
              
            >
              <q-tab-panel name="parameters" class="content">
                <HomePage/>
              </q-tab-panel>
              
              <q-tab-panel name="advancedParameters" class="content">
                <AdvancedParameters />
              </q-tab-panel>

              <q-tab-panel name="historic">
                <FilterTab :range-calendar="isRangeCalendar" :options-range-interval="rangeIntervals" :title-range-interval="titleRange" :is-toggle="true" :togleLabel="'auto'"/>
                <SimpleTab :columns="columns" :rows="rows" :rows-xpage="[7,20]"/>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="rele" class="content">
        <AdvancedParameters />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import AdvancedParameters from "src/components/sistemCE/AdvancedParameters.vue";
import FilterTab from "src/components/FilterTab.vue";
import { ref } from "vue";
import SimpleTab from "src/components/SimpleTab.vue";
import HomePage from "./HomePage.vue";

const tab = ref("contador");
const innerTab = ref("parameters");
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


//Example table
const currentDate = ref(new Date().toLocaleString());
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
.principal {
  box-sizing: border-box;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-rows: minmax(40px,50px) 1fr;
}

.content {
  height: 100%;
  margin: 0;
  padding: 0;
}



/* Contenedor principal */
.panel-container {
  display: flex;
  height: 100%;
}

/* Panel izquierdo fijo */
.left-panel {
  width: 100px; 
  background-color: transparent;
}

/* Panel derecho dinámico */
.right-panel {
  flex: 1; 
}
.custom-label{
  white-space: pre-wrap;
  text-align: center; /* Opcional: Centrar el texto */
  line-height: 1.5; /* Ajusta el espaciado entre líneas */
}
.is-full{
height: 100%;
}
.minimal {
  ::v-deep(.q-tab__label) {
  font-size: 14px;
  line-height: 1.8em;
  font-weight: 600;
}
}
.text-teal {
  ::v-deep(.q-tab__label) {
  font-size: 11px;
  line-height: 1.8em;
  font-weight: 600;
}
}

</style>
