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
      <q-tab name="contador" label="Contador" />
      <q-tab name="rele" label="Rele" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent text-white map">
      <q-tab-panel name="contador" class="content">
        <div class="panel-container">
          <!-- Panel izquierdo fijo -->
          <div class="left-panel">
            <q-tabs v-model="innerTab" vertical class="text-teal">
              <q-tab name="innerMails" icon="mail" label="Mails" />
              <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
              <q-tab name="innerMovies" icon="movie" label="Movies" />
            </q-tabs>
          </div>

          <!-- Panel derecho dinámico -->
          <div class="right-panel">
            <q-tab-panels
              v-model="innerTab"
              animated
              transition-prev="slide-down"
              transition-next="slide-up"
              class="bg-transparent text-black"
            >
              <q-tab-panel name="innerMails" class="content">
                <AdvancedParameters />
              </q-tab-panel>

              <q-tab-panel name="innerAlarms" class="content">
              </q-tab-panel>

              <q-tab-panel name="innerMovies" class="content">
               <AlarmsPage/>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="rele" class="content">
        <AdvancedParameters />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import AlarmsPage from "src/components/sistemCE/AlarmsPage.vue";
import AdvancedParameters from "src/components/sistemCE/AdvancedParameters.vue";
import { ref } from "vue";

const tab = ref("contador");
const innerTab = ref("innerMails");
</script>

<style scoped>
.principal {
  box-sizing: border-box;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 17fr;
}

.content {
  height: 100%;
  margin: 0;
  padding: 0;
}

.banner {
  min-height: 50px;
}

/* Contenedor principal */
.panel-container {
  display: flex;
  height: 100%;
}

/* Panel izquierdo fijo */
.left-panel {
  width: 100px; /* Ajusta el ancho según lo necesario */
  background-color: transparent;
}

/* Panel derecho dinámico */
.right-panel {
  flex: 1; /* Ocupa el espacio restante */
}
</style>
