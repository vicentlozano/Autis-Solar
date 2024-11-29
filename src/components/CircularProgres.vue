<template>
  <q-circular-progress
    show-value
    class="text-light-blue q-ma-md circular"
    :value="value"
    :max="max"
    :min="min"
    :track-color="'white'"
    size="50px"
    color="light-blue"
    ><div class="values">
      <p class="value">{{ value }}</p>
      <p class="unit">{{ unit }}</p>
    </div></q-circular-progress
  >
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  value: Number,
  unit: String,
  max: Number,
  min: Number,
});
</script>
<style scoped>
.value {
  padding: 0;
  margin: 0;
  font-size: 1.4em;
}
.unit {
  padding: 0;
  margin: 5px 0 0 0;
}
.values {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
}
.circular {
  position: absolute;
  top: calc(20% + 32px);
  left: calc(26%);
  width:90px;
  height: 90px;
}
</style>
