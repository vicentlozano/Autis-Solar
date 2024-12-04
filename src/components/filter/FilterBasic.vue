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
.q-pa-md{
  padding: 0.8rem;
}
.custom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-select {
  min-width: 200px;
}
@media (max-width:1300px) {
  .custom-select {
  min-width: 130px;
}
}
@media (max-width:609px) {
  .custom {
 padding: 0.7rem 0.4rem 0.4rem 0.4rem;
 max-width: 130px;

}

}

</style>
