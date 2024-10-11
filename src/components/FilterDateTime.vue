<template>
  <FilterBasic :options="intervals" :title="'intervals'" />
</template>
<script setup>
import { ref} from "vue";
import FilterBasic from "./FilterBasic.vue";

const model = ref("");
</script>
