<template>
  <div class="q-pa-md table-div">
    <h5 v-if="title" class="table-title">{{ title }}</h5>
    <q-table
      class="custom-table"
      :class="{ 'flat': isFlat, 'normal': !isFlat }"
      bordered
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="'none'"
      :rows-per-page-options="rowsXpage || [5, 10]"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  rows: Array,
  columns: Array,
  title: String,
  isFlat: Boolean,
  rowsXpage: Array,
});
const visible = ref(true);
</script>

<style scoped>
:deep(.custom-table) {
  height: fit-content;
  ::-webkit-scrollbar {
    display: none; /* Oculta la barra de desplazamiento en WebKit (Chrome, Safari) */
  }
}
:deep(.flat) {
  max-height: 290px;
}
:deep(.normal) {
  max-height: 1290px;
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
  white-space: pre-wrap;
  text-align: center; 
  line-height: 1.5; 
}
.table-title {
  padding: 1rem 1rem 1rem 0rem;
  text-align: start;
  font-weight: 600;
  font-size: 2rem;
  width: 100%;
  color: oklch(60.41% 0.1644 43.11);
  border-radius: 20px;
  margin: 0rem;
  padding-top: 0;
}
.table-div {
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0;
  height: fit-content;
  margin: 0;
}
</style>
