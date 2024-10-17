<template>
  <div class="q-pa-md">
    <q-card bordered flat class="filter-card">
      <FilterBasic :options="options" :title="title" />
      <q-separator vertical inset class="custom-separator" />
      <FilterDateTime />
      <q-separator vertical inset class="custom-separator" />
      <SearchFilter />
      <div class="botton-toggle q-pa-md">
        <ToggleField />
        <q-btn outline rounded color="primary" label="To Query" />
      </div>
    </q-card>
  </div>
</template>
<script setup>
import FilterBasic from "./FilterBasic.vue";
import FilterDateTime from "./FilterDateTime.vue";
import SearchFilter from "./SearchFilter.vue";
import ToggleField from "./ToggleField.vue";
const options = ["pepe", "maria", "jose"];
const title = "Team";
</script>
<style scoped>
.filter-card {
  display: grid;
  grid-template-columns: 1fr 0.000001fr 2fr 0.000001fr 1fr 1fr;
  justify-content: space-around;
  gap: 0.5rem;
}
.botton-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1px;
}
.custom-separator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.1px;
  background-color: var(--q-primary);
}
</style>
