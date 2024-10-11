<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-badge color="secondary" multi-line>{{ title }}</q-badge>
      <q-select
        filled
        v-model="model"
        :options="options"
        stack-label
        label=""
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
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps({
  options: Array,
  title: String,
});
const model = ref("");

const emits = defineEmits(["update:modelValue"]);
watch(model, (newValue) => {
  emits("update:modelValue", newValue);
});
</script>
