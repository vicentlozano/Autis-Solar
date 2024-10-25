<template>
  <div class="q-pa-md custom">
    <q-select
      class="custom-select"
      outlined
      dense
      @update:model-value="select"
      v-model="inputSelected"
      :options="options"
      :label="title"
    >
      <template v-slot:append>
        <q-icon
          v-if="inputSelected !== null"
          class="cursor-pointer"
          name="clear"
          @click.stop.prevent="inputSelected = null"
        />
      </template>
    </q-select>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";
const props = defineProps({
  options: Array,
  title: String,
  custom: Boolean,
});
const emits = defineEmits(["filterSelect"]);
const select = (value) => {
  inputSelected.value = value;
  emits("filterSelect", inputSelected.value);
};
const inputSelected = ref(props.options[0]);
watch(
  () => props.custom,
  (newValue) => {
    if (newValue) {
      inputSelected.value = props.options[6];
    }
  }
);
emits("filterSelect", inputSelected.value);

</script>
<style scoped>
.custom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-select {
  min-width: 220px;
}
</style>
