<template>
  <div class="q-pa-md custom" style="max-width: 300px">
    <q-input
    rounded
      outlined
      bottom-slots
      v-model="text"
      label="Search"
      counter
      maxlength="20"
      dense
    >
      <template v-slot:before>
        <q-icon name="flight_takeoff" />
      </template>

      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-input>
  </div>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
</script>
<style scoped>
.custom {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
