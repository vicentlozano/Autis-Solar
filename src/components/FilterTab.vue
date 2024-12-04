<template>
  <div class="q-pa-md custom">
    <h5 v-if="title" class="title">{{ title }}</h5>
    <q-card bordered flat class="filter-card">
      <FilterBasic
        class="select"
        :options="optionsSelectOne"
        :title="titleSelectOne"
        @filterSelect="updateSelect"
        :selected="true"
      />
      <FilterDateTime
        class="date"
        @dateToSearch="updateDate"
        :intervals="optionsRangeInterval"
        :title="titleRangeInterval"
        :isRange="rangeCalendar"
      />
      <SearchFilter
        class="search"
        @charactersToSearch="updateSearch"
        v-if="isSearch"
      />
      <section class="query">
        <div class="custom-button">
          <q-btn
            outline
            rounded
            dense
            color="secondary"
            label="To Query"
            @click="toQuery"
            padding="0.3rem 1rem 0.3rem 1rem"
          />
        </div>
        <ToggleField
          v-if="isToggle"
          @booleanSelect="updateToggle"
          class="toggle"
          :label="togleLabel"
        />
      </section>
    </q-card>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
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
  title: String,
  isToggle: Boolean,
  togleLabel: String,
});
const emits = defineEmits(["searchData"]);

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
  emits("searchData", combinedFilters);
};
</script>
<style scoped>
.filter-card {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
}
.select {
  border-right: 4px solid blueviolet;
}

.date {
}
.search {
}
.query {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.toggle {
}
.custom-button {
}
</style>
