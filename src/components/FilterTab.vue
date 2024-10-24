<template>
  <div class="q-pa-md">
    <q-card bordered flat class="filter-card">
      <FilterBasic
        class="item1"
        :options="options"
        :title="title"
        @filterSelect="updateSelect"
      />
      <q-separator vertical inset class="custom-separator item2" />
      <FilterDateTime class="item3" @dateToSearch="updateDate" />
      <q-separator vertical inset class="custom-separator item4" />
      <SearchFilter class="item5" @charactersToSearch="updateSearch" />

      <div class="botton-toggle item6 q-pa-md">
        <ToggleField @booleanSelect="updateToggle" />
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
import { ref, computed } from "vue";
import FilterBasic from "./FilterBasic.vue";
import FilterDateTime from "./FilterDateTime.vue";
import SearchFilter from "./SearchFilter.vue";
import ToggleField from "./ToggleField.vue";
const options = ["pepe", "maria", "jose"];
const title = "Team";
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
  display: grid;
  grid-template-columns:
    minmax(200px, 1fr) 0.000001fr minmax(400px, 2fr) 0.0000001fr minmax(
      200px,
      1fr
    )
    minmax(100px, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
  justify-content: space-around;
  align-items: center;
  gap: 0rem;
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
  max-width: 220;
  max-height: 40px;
}

@media (max-width: 1350px) {
  .filter-card {
    display: grid;
    grid-template-columns: auto 0.00001fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "item1 item2 item3"
      "item5 item4 item6";
    gap: 0.1rem;
  }

  .item1 {
    grid-area: item1;
  }

  .item2 {
    grid-area: item2;
  }

  .item3 {
    grid-area: item3;
  }

  .item4 {
    grid-area: item4;
  }

  .item5 {
    grid-area: item5;
  }

  .item6 {
    grid-area: item6;
  }

  .botton-toggle {
    flex-direction: row;
  }
}
@media (max-width: 800px) {
}
</style>
