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
import { ref, defineProps, defineEmits, watch} from "vue";
const props = defineProps({
  options: Array,
  title: String,
  custom: Boolean,
  selected: Boolean,
});
const emits = defineEmits(["filterSelect"]);
const isCustom = ref(false);
const select = (value) => {
  inputSelected.value = value;
  emits("filterSelect", inputSelected.value);
};
const inputSelected = ref(props.selected? props.options[0] : '');
watch(
  () => props.custom,
  () => {
    if (props.custom) {
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
@media (max-width: 550px) {
  .custom-select {
    min-width: 150px;
  }
}

</style>
