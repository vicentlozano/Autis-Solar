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
            <q-date
              v-model="localDateRange"
              :range="isRange"
              @update:model-value="test"
            >
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
  intervalOptions: {
    type: [Object, String],
    default: () => new Date().toISOString().slice(0, 10).replace(/-/g, "/"),
  },
  isRange: Boolean,
});

const emits = defineEmits(["dateRangeSelected", "isCustom"]);

const custom = ref(false);
const localDateRange = ref(
  new Date().toISOString().slice(0, 10).replace(/-/g, "/")
);

const dateRangeDisplay = ref(
  typeof localDateRange.value === "string"
    ? localDateRange.value
    : `${localDateRange.value.from} - ${localDateRange.value.to}`
);

watch(
  () => props.intervalOptions,
  (newValue) => {
    localDateRange.value = newValue;
    typeof newValue === "string"
      ? (dateRangeDisplay.value = newValue)
      : (dateRangeDisplay.value = `${newValue.from} - ${newValue.to}`);
    custom.value = false;
    emits("isCustom", custom.value);
  }
);
const test = (value) => {
  localDateRange.value = value;
  if (typeof localDateRange.value === "string") {
    dateRangeDisplay.value = localDateRange.value;
  } else {
    dateRangeDisplay.value = `${localDateRange.value.from} - ${localDateRange.value.to}`;
  }
  custom.value = true;

  emits("dateRangeSelected", localDateRange.value);
  emits("isCustom", custom.value);
  console.log(`emit de componente base ${custom.value}`);
};
</script>

<style scoped>
::deep(.cursor-pointer) {
  padding-right: 1px;
}
.custom-input {
  min-width: 20px;
}
@media (max-width: 550px) {
  .custom-input {
    max-width: 150px;
  }
}
</style>
