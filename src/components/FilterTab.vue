<template>
  <div class="q-pa-md custom">
    <h5 v-if="title" class="title">{{ title }}</h5>
    <q-card bordered  class="filter-card">
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
      <section class="toggle-plus-button">
        <div class="custom-button">
          <q-btn
            outline
            rounded
            dense
            color="secondary"
            label="To Query"
            @click="toQuery"
            width="200px"
            height="40px"
            padding="0.1rem 1rem 0.1rem 1rem"
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
.title {
  padding: 0;
  margin: 0.5rem;
}
.filter-card {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 20px
}
.query {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.toggle-plus-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0 1rem;
}
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1013px) {
  .toggle {
    padding-bottom: 0.3rem;
  }
  
}
@media (max-width: 695px){
  .custom-button{
    padding: 0rem 0 0.4rem 0;
  }
}
</style>
