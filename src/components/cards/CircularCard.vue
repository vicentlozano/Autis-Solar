<template>
  <div class="circular" :style="{ '--dynamic-color': color }">
    <p class="value">{{ value }}</p>
    <p class="unit">{{ unit }}</p>
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
  width: 100%;
  height: 100%;
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
  font-weight: bold;
  color: var(--dynamic-color, white);
  margin: 0;
  padding: 0;
}

 .unit {
  font-size: 01rem;
  text-align: center;
  margin: 0;
  color: var(--dynamic-color, white);
  padding: 0;


}



@keyframes pulse {
  0% {   
    border: 2px solid #9b27b034;


  }
  50% {
    border: 2px solid var(--dynamic-color, white);;

    
  }
  100% {       
    border: 2px solid #9b27b033;

  }
}
</style>