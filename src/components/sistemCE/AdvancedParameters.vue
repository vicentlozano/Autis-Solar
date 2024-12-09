<template>
  <div class="filter-card">
    <h5 v-if="title" class="table-title">{{ title }}</h5>
    <q-table
      class="custom-table"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-bottom
      :separator="'none'"
      :rows-per-page-options="[10000]"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const columns = ref([
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  { name: "value", label: "Value", field: "value" },
]);
const rows = ref([
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
  { name: "atomizador", value: 22 },
  { name: "rele", value: 33 },
]);
</script>

<style scoped>

.filter-card {
  display: flex;
  box-sizing: border-box;
  height: 90%;
  padding-left:1rem;
  width: 100%;
}
:deep(.custom-table) {
  max-height: 80dvh;
  height: fit-content;
  width: 100%;
  ::-webkit-scrollbar {
    width: 8px; /* Ancho de la barra vertical */
    height: 8px; /* Altura de la barra horizontal */
  }

  /* Fondo de la barra de desplazamiento */
  ::-webkit-scrollbar-track {
    background: transparent; /* Color de fondo del track */
    border-radius: 10px; /* Bordes redondeados */
  }

  /* Barra de desplazamiento */
  ::-webkit-scrollbar-thumb {
    background-color: #ff5722; /* Color de la barra */
    border-radius: 10px; /* Bordes redondeados */
    border: 2px solid #f3f3f3; /* Espacio alrededor para efecto flotante */
  }
}

:deep(.custom-table th) {
  background-color: var(--q-primary);
  color: white;
  position: sticky;
  top: 0;
  z-index: 2;
}
:deep(.custom-table td:nth-child(2)) {
  text-align: center;
  width: 150px;
}
:deep(.custom-table th:nth-child(2)) {
  text-align: center;
}

.table-title {
  padding: 1rem 1rem 1rem 1rem;
  text-align: start;
  font-weight: 600;
  font-size: 2rem;
  width: 100%;
  color: oklch(60.41% 0.1644 43.11);
  border-radius: 20px;
  margin: 0rem;
  padding-top: 0;
}

</style>
