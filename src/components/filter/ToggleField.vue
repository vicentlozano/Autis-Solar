<template>
  <q-toggle
    v-model="fourth"
    checked-icon="check"
    color="green"
    label="Historic Mode"
    unchecked-icon="clear"
  />
</template>
<script setup>
import { ref, defineEmits, watch } from "vue";
const fourth = ref(false);
const emits = defineEmits(["booleanSelect"]);
watch(fourth, (newValue) => {
  emits("booleanSelect", newValue);
});
</script>
