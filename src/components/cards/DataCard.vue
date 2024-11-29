<template>
  <q-card bordered   class="filter-card" :style="{ '--dynamic-color': color }">
    <p class="title">{{ title }}</p>
    <CircularCard
      :title="titleData"
      :unit="dataExt"
      :value="data"
      :image="icon"
      :color="color"
      class="circular-card"
    />
    <p class="title-data">{{ titleData }}</p>
    <section class="widgets">
      <div v-for="widget in widgets" :key="widget.route" class="widget-buttons">
        <router-link :to="widget.route" class="button-card">
          <img :src="widget.src" alt="widget icon" class="icon" />
        </router-link>
      </div>
    </section>
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
  color: String,
});
</script>

<style scoped>
.filter-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 12px;
  width: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  will-change: transform;
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

.circular-card {
  max-width: 130px;
  max-height: 130px;
}

.widgets {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.button-card {
  width: fit-content;
  height: fit-content;
}
.title {
  font-size: 1.5em;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 0.4rem;
}
.title-data {
  font-size: 1.5em;
  margin-top: 10px;
  text-align: center;
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
.filter-card:hover {
  transform: perspective(800px) rotateX(5deg) rotateY(10deg) scale(1.02);
}
@media(max-width: 900px){
  .filter-card:hover {
  transform:  scale(1.03);
}
}
</style>
