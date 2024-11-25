<template>
  <div class="q-pa-md">
    <q-card bordered flat class="filter-card">
      <h5 class="title">LineChart</h5>
      <section class="charts">
        <Chart :options="chartOptions"></Chart>
      </section>
    </q-card>
  </div>
</template>

<script setup>
import { Chart } from "highcharts-vue";

const chartOptions = {
  chart: {
    type: "bar",
    backgroundColor: "transparent",
  },
  title: {
    text: "My First Highcharts Chart in Vue.js",
    style: {
      color: "white", // Cambia el color del título
    },
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
    labels: {
      style: {
        color: "white", // Cambia el color de las etiquetas del eje X
      },
    },
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
      style: {
        color: "white", // Cambia el color del título del eje Y
      },
    },
    labels: {
      style: {
        color: "white", // Cambia el color de las etiquetas del eje Y
      },
    },
  },
  legend: {
    itemStyle: {
      color: "white", // Cambia el color de los elementos de la leyenda
    },
  },
  series: [
    {
      name: "Jane",
      data: [1, 0, 4],
      // No se necesita `style` aquí porque Highcharts automáticamente adapta los datos
    },
    {
      name: "John",
      data: [5, 7, 3],
    },
  ],
};
</script>

<style scoped>
.filter-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}
.title {
  text-align: center;
  padding: 1rem;
  margin: 0;
}

</style>
