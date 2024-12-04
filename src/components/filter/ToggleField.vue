<template>
  <q-toggle
    v-model="fourth"
    checked-icon="check"
    color="green"
    left-label
    label="Historic Mode"
    unchecked-icon="clear"
    class="toggle"
    dense
  />
</template>
<script setup>
import { ref, watch } from "vue";
const fourth = ref(false);
const emits = defineEmits(["booleanSelect"]);
const props = defineProps({
  label: String,
});
watch(fourth, (newValue) => {
  emits("booleanSelect", newValue);
});
</script>
<style scoped>
.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
