<template>
  <div class="q-pa-md">
    <h5 class="table-title ">{{ title }}</h5>
    <q-table
      class="custom-table"
      bordered
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="'none'"
      :rows-per-page-options="[5, 10]"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  rows: Array,
  columns: Array,
  title: String,
});
const visible = ref(true);

</script>

<style scoped>
:deep(.custom-table) {
  max-height: 300px;
  ::-webkit-scrollbar {
    display: none; /* Oculta la barra de desplazamiento en WebKit (Chrome, Safari) */
  }
}

:deep(.custom-table th) {
  background-color: var(--q-primary);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}

:deep(.custom-table td) {
  width: 200px;
}
.table-title {
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 400;
  width: 100%;
  color: oklch(60.41% 0.1644 43.11);
  border-radius: 20px;
  margin: 0.6rem;
  padding-top: 0;
}


</style>
