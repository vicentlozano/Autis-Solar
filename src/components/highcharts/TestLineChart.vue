<template>
  <div class="q-pa-md">
    <q-card bordered  class="filter-card">
      <highcharts
        :options="chartOptions"
        class="highcharts-container"
      ></highcharts>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, watch } from "vue";
import { Dark } from "quasar";
const props = defineProps({
  type: String,
  title: String,
  categories: Array,
  labelY: String,
  series: Array,
});

const darkMode = ref(Dark.isActive);
watch(
  () => Dark.isActive,
  (newDarkMode) => {
    darkMode.value = newDarkMode; 
  }
);

const textColor = computed(() => {
  if (darkMode.value) {
    console.log("white");

    return "white";
  } else {
    console.log("black");

    return "black";
  }
});
const chartOptions = ref({
  chart: {
    type: props.type,
    backgroundColor: "transparent",
    animation: {
      duration: 500, // Duración en milisegundos
    },
  },
  credits: {
    enabled: false // Esto elimina la marca de agua de Highcharts
  },
  title: {
    text: props.title,
    style: {
      color: textColor,
    },
  },
  xAxis: {
    categories: props.categories,
    labels: {
      style: {
        color: textColor,
      },
    },
  },
  yAxis: {
    title: {
      text: props.labelY,
      style: {
        color: textColor,
      },
    },
    labels: {
      style: {
        color: textColor,
      },
    },
  },
  legend: {
    itemStyle: {
      color: textColor,
    },
  },
  series: props.series,
});
</script>

<style scoped>
.q-pa-md {
  width: 100%; 
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 0;
  
}

.filter-card {
  display: grid;
  width: 100%; 
  max-width: 100%; 
  box-sizing: border-box;
  height: 100%; 
  border-radius: 12px;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.highcharts-container {
  width: 100%; 
  height: 98%;
  box-sizing: border-box;
}
* {
  box-sizing: border-box !important;
}
</style>
