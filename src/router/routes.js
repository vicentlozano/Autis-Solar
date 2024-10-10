const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "Panel Control",
        path: "/PanelControl",
        component: () => import("pages/PanelControlPage.vue"),
      },
      {
        name: "Weather",
        path: "/Weather",
        component: () => import("pages/WeatherPage.vue"),
      },
      {
        name: "Statistics",
        path: "/Statistics",
        component: () => import("pages/StatisticsPage.vue"),
      },
      {
        name: "Exploitation",
        path: "/Exploitation",
        component: () => import("src/pages/ExploitationPage.vue"),
      },
      {
        name: "Parameters",
        path: "/Parameters",
        component: () => import("pages/ParametersPage.vue"),
      },
      {
        name: "Alerts",
        path: "/Alerts",
        component: () => import("src/pages/AlarmsPage.vue"),
      },
      {
        name: "Historical Data",
        path: "/Historic",
        component: () => import("pages/HistoricalPage.vue"),
      },
      {
        name: "Notifications",
        path: "/Notifications",
        component: () => import("pages/NotificationsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
