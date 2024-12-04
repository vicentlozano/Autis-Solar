<template>
  <div class="q-pa-md principal">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey-7n banner"
      active-color="primary"
      indicator-color="purple"
      align="justify"
    >
      <q-tab
        name="inverter"
        label="Inverter"
      />
      <q-tab
        name="cboxes"
        label="C.Boxes"
      />
      <q-tab
        name="analizer"
        label="Analizer"
      />
      <q-tab
        name="follows"
        label="Follows"
      />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent text-white map">
      <q-tab-panel name="inverter" class="content">
        <MapComponent class="content"/>
      </q-tab-panel>
      <q-tab-panel name="cboxes" class="content">
      </q-tab-panel>
      <q-tab-panel name="analizer" class="content">
      </q-tab-panel>
      <q-tab-panel name="follows" class="content">
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import MapComponent from "src/components/MapComponent.vue";
import { ref } from "vue";
const tab = ref("inverter");

const titleInverter = "Inverter";
const optionsInverter = ["Parameters", "Advanced Parameters", "Historics"];

const titleCBoxes = "CBoxes";
const optionsCBoxes = ["Parameters", "Historics"];

const titleAnalizer = "Analizer";
const optionsAnalizer = ["Parameters", "Advanced Parameters", "Historics"];

const titleFollow = "Follow";
const optionsFollow = [
  "Parameters B1",
  "Historics B1",
  "Parameters B2",
  "Historics B2",
];
</script>

<style scoped>
.selectors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.map {
  display: flex;
  width: 100%;
  height: 95%;
}
.principal {
  height: 100%;
}
.content{
  height: 100%
}
.banner{
  height: 5%;
}

</style>
