<template>
  <div
    :class="{
      'q-pa-md normalize-home': isAlarm,
      'q-pa-md normalize-grid': !isAlarm,
    }"
  >
    <section v-if="isAlarm" class="alarm">
      <AlarmCard />
    </section>
    <section class="data-cards">
      <WeatherCard3 :city="'Gandia'" class="weather" />
      <DataCard
        :title="title"
        :icon="icon"
        :data="data"
        :data-ext="dataExt"
        :title-data="titleData"
        :widgets="widgets"
        :color="'purple'"
        class="first-card"
      />
      <DataCard
        :title="title"
        :icon="icon"
        :data="data"
        :data-ext="dataExt"
        :title-data="titleData"
        :widgets="widgets"
        :color="'blue'"
        class="second-card"
      />
      <DataCard
        :title="title"
        :icon="icon"
        :data="data"
        :data-ext="dataExt"
        :title-data="titleData"
        :widgets="widgets"
        :color="'green'"
        class="third-card"
      />
    </section>
    <section class="graph">
      <TestLineChart
        :type="'column'"
        :title="'LineChart'"
        :categories="['Enero', 'Febrero', 'Marzo']"
        :labelY="'kW'"
        :series="serieArray"
        class="line-graph"
      />
      <MapComponent class="map" />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AlarmCard from "src/components/AlarmCard.vue";
import WeatherCard3 from "src/components/weatherCards/WeatherCard3.vue";
import DataCard from "src/components/cards/DataCard.vue";
import TestLineChart from "src/components/highcharts/TestLineChart.vue";
import MapComponent from "src/components/MapComponent.vue";

const isAlarm = ref(false);
const title = "Sistema 1";
const icon = "/icons/sistemIcon.png";
const data = ref(33.5);
const dataExt = "kWh";
const titleData = "E. diaria exportada";
const widgets = [
  { src: "/icons/iconLineChart.png", route: "/Alerts" },
  { src: "/icons/iconGaugeChart.png", route: "/Exploitation" },
];
const serieArray = [
  {
    name: "Potencia Activa",
    data: [1, 0, 4],
  },
  {
    name: "Potencia Pasiva",
    data: [5, 7, 3],
  },
];
</script>

<style scoped>
.normalize-home {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr 1.6fr;
  height: 100%;
  max-height: 100%;
  width: 100%;
}
.normalize-grid {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 0.4fr 1fr;
  justify-items: center;
  height: 100%;
  max-height: 100%;
  width: 100%;
}

.graph {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.weather {
  width: 100%;
  padding: 1rem;
  transition: transform 0.3s ease;
}
.data-cards {
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.line-graph {
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
}
.alarm {
  height: fit-content;
}
.map {
  min-height: 350px;
}
.third-card:hover {
  transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.02);
}
.second-card:hover {
  transform: scale(1.04);
}
@media (min-width: 2500px) {
  .third-card:hover {
    transform: perspective(800px) rotateX(2deg) rotateY(-3deg) scale(1);
  }
  .weather:hover {
    transform: perspective(800px) rotateX(-2deg) rotateY(3deg) scale(1);
  }
  .first-card:hover {
    transform: scale(1.04);
  }
}
@media (min-width: 1500px) and (max-width: 2500px) {
  .weather:hover {
    transform: perspective(800px) rotateX(5deg) rotateY(10deg) scale(1.005);
  }
  .first-card:hover {
    transform: scale(1.04);
  }
  .second-card:hover {
    transform: scale(1.04);
  }
  .third-card:hover {
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.005);
  }
  .normalize-home {
  
  grid-template-rows: auto 1fr 1.5fr;
 
}
}
@media (min-width: 1010px) and (max-width: 1499px) {
  .data-cards {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .weather {
    grid-column: span 3;
  }
  .normalize-home {
    grid-template-rows: 0.5fr 3fr 3fr;
    max-height: none;
  }
  
  .normalize-grid {
    grid-template-rows: 1fr 1fr;
    max-height: none
  }
}
@media (min-width: 712px) and (max-width: 1009px) {
  .normalize-home {
    display: grid;
    grid-template-rows: 0.01fr 3fr 4fr;
    max-height: none;

  }
  .graph {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: none;
  }
  .normalize-grid {
    grid-template-rows: 1fr 1.2fr;
    max-height: none

  }

  .weather:hover {
    transform: perspective(800px) rotateX(5deg) rotateY(10deg) scale(1.02);
  }
  .first-card:hover {
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.02);
  }
  .second-card:hover {
    transform: perspective(800px) rotateX(5deg) rotateY(10deg) scale(1.02);
  }
  .third-card:hover {
    transform: perspective(800px) rotateX(-5deg) rotateY(-10deg) scale(1.02);
  }
}

@media (max-width: 711px) {
  .normalize-home {
    display: grid;
    grid-template-rows: 0.01fr 3.6fr 3fr;
    max-height: none;

  }

  .weather:hover {
    transform: scale(1.02);
  }
  .first-card:hover {
    transform: scale(1.02);
  }
  .second-card:hover {
    transform: scale(1.02);
  }
  .third-card:hover {
    transform: scale(1.02);
  }

  .normalize-grid {
    grid-template-rows: 1.2fr 1fr;
    max-height: none

  }
  .graph {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));
    max-height: none;
  }
  

}
</style>
