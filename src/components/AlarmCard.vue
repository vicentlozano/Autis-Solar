<template>
  <div class="q-pa-md normalize">
    <q-card bordered  class="filter-card">
      <img
        alt="error-icon"
        src="../assets/error-icon-30.png"
        class="error-image"
      />
      <div class="equipments">
        <p class="center">{{ alarmActives }} {{ message }}</p>
        <ul class="list" v-if="listequipment">
          <li v-for="(equipment,index) in listequipment" :key="index">
            {{equipment}}
          </li>
        </ul>
      </div>
      <img
        alt="error-icon"
        src="../assets/error-icon-30.png"
        class="error-image"
      />
    </q-card>
  </div>
</template>

<script setup>
const alarmActives = 3;
const message = "equipos con alarmas activas";
const listequipment = ["PLC 2", "Alternador", "Rele 3"];
</script>

<style scoped>
.normalize {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.filter-card {
  display: grid;
  grid-template-columns: auto 5fr auto;
  justify-content: center;
  align-items: center;
  height: auto;                        
  gap: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-image: linear-gradient(240deg, orange,rgba(255, 0, 0, 0.685),orange);
  box-sizing: border-box;
  padding: 1rem;
}
.error-image {
  animation: alert 2s infinite ease-in-out;
  z-index: 1;
}
.center {
  text-align: center;
  margin: 0;
  font-size: 1.2em;
  font-weight: bolder;
}
.equipments{
    display: flex;
    flex-direction: column;
    align-items:center ;
}
.list{
    display: flex;
    gap: 2rem;
    margin:0;
    padding: 0;
}
@keyframes alert {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
