<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input
      class="custom-input"
      label="Range"
      dense
      outlined
      v-model="dateRangeDisplay"
    >
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="dateRange" range>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  dateRange: {
    type: [Object, String],
    default: () => new Date().toISOString().slice(0, 10).replace(/-/g, "/"),
  },
});

const emits = defineEmits(["dateRangeSelected"]);

const dateRange = ref(
  typeof props.dateRange === "string"
    ? { from: props.dateRange, to: props.dateRange }
    : { ...props.dateRange }
);

const dateRangeDisplay = ref(
  typeof props.dateRange === "string"
    ? props.dateRange
    : `${dateRange.value.from} - ${dateRange.value.to}`
);

watch(
  () => props.dateRange,
  (newVal) => {
    if (typeof newVal === "string") {
      dateRange.value = { from: newVal, to: newVal };
      dateRangeDisplay.value = newVal;
    } else {
      dateRange.value = { ...newVal };
      dateRangeDisplay.value = `${newVal.from} - ${newVal.to}`;
    }
  },
  { immediate: true }
);

watch(dateRange, (newDateRange) => {
  if (newDateRange && newDateRange.from && newDateRange.to) {
    if (newDateRange.from === newDateRange.to) {
      dateRangeDisplay.value = newDateRange.from;
    } else {
      dateRangeDisplay.value = `${newDateRange.from} - ${newDateRange.to}`;
    }
  } else if (typeof newDateRange === "string") {
    dateRangeDisplay.value = newDateRange;
  }
  emits("dateRangeSelected", newDateRange);
});
</script>

<style scoped>
::deep(.cursor-pointer) {
  padding-right: 1px;
}
.custom-input {
  min-width: 220px;
}
</style>
