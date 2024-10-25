<template>
  <div class="q-pa-md">
    <q-card bordered flat class="filter-card">
      <FilterBasic
        class="item1"
        :options="optionsSelectOne"
        :title="titleSelectOne"
        @filterSelect="updateSelect"
      />
      <q-separator vertical inset class="custom-separator item2" />
      <FilterDateTime
        class="item3"
        @dateToSearch="updateDate"
        :intervals="optionsRangeInterval"
        :title="titleRangeInterval"
        :isRange="rangeCalendar"
      />
      <q-separator vertical inset class="custom-separator item4" />
      <SearchFilter
        class="item5"
        @charactersToSearch="updateSearch"
        v-if="isSearch"
      />
      <q-separator
        vertical
        inset
        class="custom-separator item2"
        v-if="isSearch"
      />

      <div class="botton-toggle item6 q-pa-xs">
        <ToggleField @booleanSelect="updateToggle" class="toggle" />
        <q-btn
          class="custom-button"
          outline
          rounded
          dense
          color="primary"
          label="To Query"
          @click="toQuery"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from "vue";
import FilterBasic from "./filter/FilterBasic.vue";
import FilterDateTime from "./filter/FilterDateTime.vue";
import SearchFilter from "./filter/SearchFilter.vue";
import ToggleField from "./filter/ToggleField.vue";

// ---Props---
const props = defineProps({
  optionsSelectOne: Array,
  titleSelectOne: String,
  optionsRangeInterval: Array,
  titleRangeInterval: String,
  rangeCalendar: Boolean,
  isSearch: Boolean,
});

const filterBasicValue = ref("");
const filterDateTimeValue = ref(
  new Date().toISOString().slice(0, 10).replace(/-/g, "/")
);
const searchFilterValue = ref("");
const toggleValue = ref(false);
const updateSelect = (newValue) => {
  filterBasicValue.value = newValue;
};
const updateDate = (newValue) => {
  filterDateTimeValue.value = newValue;
};
const updateSearch = (newValue) => {
  searchFilterValue.value = newValue;
};
const updateToggle = (newValue) => {
  toggleValue.value = newValue;
};

const combinedFilters = computed(() => ({
  filterBasic: filterBasicValue.value,
  filterDateTime: filterDateTimeValue.value,
  searchFilter: searchFilterValue.value,
  toggle: toggleValue.value,
}));

const toQuery = () => {
  console.log(
    "Filter Basic Value:",
    combinedFilters.value.filterBasic,
    "Filter DateTime Value:",
    combinedFilters.value.filterDateTime,
    "Search Filter Value:",
    combinedFilters.value.searchFilter,
    "Toggle Value:",
    combinedFilters.value.toggle
  );
};
</script>
<style scoped>
.filter-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1 1 200px; /* Crece y se encoge con un tamaño base de 200px */
  min-width: 200px; /* Ancho mínimo */
  max-width: 400px; /* Ancho máximo */
}

.botton-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1px;
}

.custom-separator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.1px;
  background-color: var(--q-primary);
}

.custom-button {
  min-width: 100px;
  max-width: 220px;
  max-height: 40px;
}
@media (max-width: 1350px) {
  .filter-card {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .botton-toggle {
    flex-direction: row;
  }

  .toggle {
    margin-right: 10px;
  }

  .custom-separator {
    display: none;
  }
}
@media (max-width: 1056px) {
  .filter-card {
    flex-direction: column;
    gap: 0px;
  }

  .botton-toggle {
    flex-direction: row;
  }
  .toggle {
    margin-right: 10px;
  }
  .custom-separator {
    display: none;
  }
}
</style>
