<template>
  <q-card bordered flat class="filter-card">
    <p>{{ title }}</p>
    <p>{{ title }}</p>
    <img :src="icon" alt="icon" class="icon-tab" />
    <div v-for="widget in widgets" :key="widget.route" class="widget-buttons">
      <router-link :to="widget.route" class="button-card">
        <img :src="widget.src" alt="widget icon" class="icon" />
      </router-link>
    </div>
    <CircularCard :title="titleData" :unit="dataExt" :value="data" :image="icon"/>


  </q-card>
</template>
<script setup>
import { defineProps } from "vue";
import CircularCard from "./CircularCard.vue";
const props = defineProps({
  title: String,
  icon: String,
  widgets: Array,
  data: Number,
  titleData: String,
  dataExt: String,
});
</script>

<style scoped>
.filter-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  justify-items:center
}

.button-card {
  width: fit-content;
  height: fit-content;
}
.icon-tab {
  width: 64px;
  height: 64px;
}
.icon {
  width: 24px;
  height: 24px;
}
.icon:hover {
  border-radius: 3px;
  border: 1px solid rgb(110, 103, 103);
}
</style>
