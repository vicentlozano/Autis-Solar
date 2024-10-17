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
import { ref } from "vue";
const fourth = ref(false);
</script>
