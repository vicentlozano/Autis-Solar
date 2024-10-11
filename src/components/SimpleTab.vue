<template>
  <div class="q-pa-md">
      <q-table
        class="custom-table"
        bordered
        :rows="rows"
        :columns="columns"
        row-key="name"
        :separator="false"
        :rows-per-page-options="[5, 10]"
      />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  rows: Array,
  columns: Array,
});
const visible = ref(true);
</script>

<style scoped>
:deep(.custom-table) {
  border-radius: 10px; /* Ajusta el valor según tus necesidades */
  overflow: hidden; /* Asegura que el contenido no se desborde */
  border: 1px solid #ccc; /* Añade un borde si es necesario */
  max-height: 300px;
  ::-webkit-scrollbar {
    display: none; /* Oculta la barra de desplazamiento en WebKit (Chrome, Safari) */
  }

}


:deep(.custom-table th) {
  background-color: #3f7cb5; /* Cambia esto al color que prefieras */
  color: white; /* Color del texto */
  position: sticky;
  top: 0;
  z-index: 1;
}

:deep(.custom-table td) {
  /* Cambia esto al color que prefieras */
}
</style>