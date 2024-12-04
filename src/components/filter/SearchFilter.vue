<template>
  <div class="custom q-pa-md" style="max-width: 300px">
    <q-input
      class="custom-input"
      rounded
      outlined
      v-model="text"
      label="Search"
      @update:model-value="changeText"
      dense
    >
      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const text = ref("");
const emits = defineEmits(["charactersToSearch"]);
const changeText = () => {
  emits("charactersToSearch", text.value);
};
</script>
<style scoped>
.custom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-input {
  min-width: 220px;
}
@media (max-width: 550px) {
  .custom{
    padding: 0rem;
  }
  .custom-input {
    min-width: 150px;
  }
}
</style>
