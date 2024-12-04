<template>
  <q-layout view="lHh Lpr lFf" class="globalStyle">
    <q-header elevated class="header">
      <q-toolbar class="center">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="center-title">
          {{ pageTitle || company }}
        </q-toolbar-title>

        <q-btn
          flat
          icon="brightness_6"
          @click="toggleDarkMode"
          :label="darkMode ? 'Light Mode' : 'Dark Mode'"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="menu-text">
        <!-- <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        /> -->
        <NavegationMenu :menuList="menuList" />
      </q-list>
    </q-drawer>

    <q-page-container class="normalize">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Dark } from "quasar";
import NavegationMenu from "src/components/NavegationMenu.vue";

defineOptions({
  name: "MainLayout",
});

const title = company + " Solar";
const company = "Autis";
const darkMode = ref(!Dark.isActive);
const route = useRoute();
const pageTitle = ref(route.name);
const menuList = [
  {
    icon: "home",
    label: "Home",
    separator: true,
    link: "/Home",
  },
  {
    icon: "settings",
    label: "Exploitation",
    separator: false,
    link: "/Exploitation",
  },
  {
    icon: "memory",
    label: "Sistems",
    separator: true,
    subMenuItem: [
      {
        icon: "Danger",
        label: "Sistem 1",
        separator: false,
        link: "/SistemsPage",
      },
      {
        icon: "Alert",
        label: "Sistem CE",
        separator: true,
        link: "/SistemsCEPage",
      },
    ],
  },
  {
    icon: "search",
    label: "SSAA",
    separator: false,
    link: "/",
  },
  {
    icon: "device_hub",
    label: "Single Line",
    separator: false,
    link: "/",
  },
  {
    icon: "wb_sunny",
    label: "Meteo",
    separator: false,
    link: "/",
  },
  {
    icon: "bar_chart",
    label: "Historical Data",
    separator: false,
    link: "/Historic",
  },
  {
    icon: "balance",
    label: "Balance",
    separator: false,
    link: "/",
  },
  {
    icon: "notifications",
    label: "Alerts",
    separator: false,
    subMenuItem: [
      {
        icon: "Danger",
        label: "Alarms",
        separator: false,
        link: "/Alerts",
      },
      {
        icon: "Alert",
        label: "Notifications",
        separator: true,
        link: "/Notifications",
      },
    ],
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false,
    link: "/",
  },
];
const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    link: "/",
  },
  {
    title: "Panel Control",
    caption: "",
    icon: "tune",
    link: "/PanelControl",
  },
  {
    title: "Weather",
    caption: "",
    icon: "wb_sunny",
    link: "/Weather",
  },
  {
    title: "Parameters",
    caption: "",
    icon: "settings_applications",
    link: "/Parameters",
  },
  {
    title: "Statistics",
    caption: "",
    icon: "bar_chart",
    link: "/Statistics",
  },
  {
    title: "Projections",
    caption: "",
    icon: "trending_up",
    link: "/Projections",
  },
  {
    title: "Historical Data",
    caption: "",
    icon: "history",
    link: "/Historic",
  },
  {
    title: "Alerts",
    caption: "",
    icon: "alarm",
    link: "/Alerts",
  },
];

watch(route, (newRoute) => {
  pageTitle.value = newRoute.name;
});
const leftDrawerOpen = ref(false);
const toggleDarkMode = () => {
  Dark.set(darkMode.value);
  darkMode.value = !darkMode.value;
};

function toggleLeftDrawer() {
  Array;
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  box-sizing: border-box !important;
}


.globalStyle {
  padding: 0;
  margin:0;
  font-family: "Roboto", sans-serif; /* Aplicar la fuente de Material Design */
  display: grid;
  min-height: 100dvh;
  grid-auto-rows: auto 1fr;
}
.label {
  font-weight: bolder;
  font-size: larger;
}
.center {
  text-align: center;
}
.center-title {
  padding-left: 7rem;
}
.menu-text {
  font-size: 1em;
}
.normalize{
  height: 100%;
}

</style>
