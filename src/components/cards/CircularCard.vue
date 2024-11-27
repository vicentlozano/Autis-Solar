<template>
  <div class="circular" :style="{ '--border-color': color }">
    <p class="value">{{ value }}</p>
    <p class="title">{{ unit }}</p>
  </div>
</template>

<script setup>
import {defineProps } from "vue";
const props = defineProps({
  title: String,
  image: String,
  value: Number,
  color: {
    type: String,
    default: "bisque",
  },
  unit: {
    type: String,
    default: "",
  },
});


</script>

<style scoped>
.circular {
  display: flex;
  flex-direction: column;
  border-radius: 50% !important;
  width: 100px;
  height: 100px;
  border: 2px solid #109587;
  box-sizing: border-box;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  animation: pulse 3s infinite ease-in-out;
  padding: 0.6rem;
}


.value{
  font-size: 1.5rem;
  text-align: center;
  color: #9C27B0;
  margin: 0;
  padding: 0;
}

 .title {
  font-size: 01rem;
  text-align: center;
  margin: 0;
  color: #9C27B0;
  padding: 0;


}



@keyframes pulse {
  0% {   
    border: 2px solid #9b27b034;


  }
  50% {
    border: 2px solid #9C27B0;

    
  }
  100% {       
    border: 2px solid #9b27b033;

  }
}
</style>