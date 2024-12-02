<template>
  <div class="q-pa-md principal">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey-7"
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

    <q-tab-panels v-model="tab" animated class="bg-transparent text-white">
      <q-tab-panel name="inverter" class="normalize">
      </q-tab-panel>
      <q-tab-panel name="cboxes" class="normalize">
      </q-tab-panel>
      <q-tab-panel name="analizer" class="normalize">
      </q-tab-panel>
      <q-tab-panel name="follows" class="normalize">
      </q-tab-panel>
    </q-tab-panels>
  </div>
  <section class="content"></section>
</template>
<script setup>
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
.normalize {
  display: flex;
  height: 100%;
}
.principal {
  height: 100%;
}
</style>
