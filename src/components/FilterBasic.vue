<template>
  <div class="q-pa-md custom">
    <q-select
      class="custom-select"
      outlined
      dense
      v-model="model"
      :options="options"
      :label="title"
      :display-value="`${model ? model : options[0]}`"
    >
      <template v-slot:append>
        <q-icon
          v-if="model !== null"
          class="cursor-pointer"
          name="clear"
          @click.stop.prevent="model = null"
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
});
const model = ref(props.options.length > 0 ? props.options[0] : "");
const emits = defineEmits(["filterSelect"]);
watch(model, (newValue) => {
  emits("filterSelect", newValue);
});
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
