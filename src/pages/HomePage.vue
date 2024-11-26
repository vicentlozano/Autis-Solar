<template>
  <section v-if="isAlarm" class="alarm">
    <AlarmCard/>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import AlarmCard from 'src/components/AlarmCard.vue';

const isAlarm = ref(true);
</script>

<style scoped></style>
