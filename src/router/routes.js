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
        name: "Projections",
        path: "/Projections",
        component: () => import("pages/ProjectionsPage.vue"),
      },
      {
        name: "Parameters",
        path: "/Parameters",
        component: () => import("pages/ParametersPage.vue"),
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
