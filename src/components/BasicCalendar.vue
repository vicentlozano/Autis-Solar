<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="dateRangeDisplay">
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
    type: Object,
    default: () => ({
      from: new Date().toISOString().slice(0, 10),
      to: new Date().toISOString().slice(0, 10),
    }),
  },
});

const emits = defineEmits(["dateRangeSelected"]);

const dateRange = ref({...props.dateRange});
const dateRangeDisplay = ref(`${dateRange.value.from} - ${dateRange.value.to}`);

// Watch for changes in the date range and emit the event
watch(dateRange, (newDateRange) => {
  dateRangeDisplay.value = `${newDateRange.from} - ${newDateRange.to}`;
  emits("dateRangeSelected", newDateRange);
});
</script>

<style scoped></style>
