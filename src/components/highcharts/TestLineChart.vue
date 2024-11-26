<template>
  <div class="q-pa-md">
    <q-card bordered flat class="filter-card">
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
    darkMode.value = newDarkMode; // Actualizamos el valor de darkMode cuando cambie el estado de Dark.isActive
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
  width: 100%; /* Asegura que el contenedor principal ocupe todo el ancho */
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
}

.filter-card {
  display: grid;
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 100%; /* Previene desbordamientos */
  box-sizing: border-box;
  height: 100%; /* Asegura que el contenedor ocupe el 100% de la altura disponible */
  align-items: center;
}

.highcharts-container {
  width: 100%; /* Obliga al gráfico a ocupar todo el ancho del contenedor */
  height: 98%;
  padding: 1rem;
  box-sizing: border-box;
}
* {
  box-sizing: border-box !important;
}
</style>
