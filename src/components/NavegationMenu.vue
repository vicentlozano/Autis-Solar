<template>
  <template v-for="(menuItem, index) in props.menuList" :key="index">
    <q-expansion-item
      v-if="menuItem.subMenuItem"
      :label="menuItem.label"
      :icon="menuItem.icon"
    >
      <template
        v-for="(subMenuItem, subIndex) in menuItem.subMenuItem"
        :key="subIndex"
      >
        <q-item clickable :active="subMenuItem.link === $route.path"  :to="subMenuItem.link" v-ripple>
          <q-item-section avatar>
            <q-icon :name="subMenuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ subMenuItem.label }}
          </q-item-section>
        </q-item>
        <q-separator :key="'sep' + subIndex" v-if="subMenuItem.separator" />
      </template>
    </q-expansion-item>
    <q-item v-else clickable :active="menuItem.link === $route.path" v-ripple :to="menuItem.link">
      <q-item-section avatar>
        <q-icon :name="menuItem.icon" />
      </q-item-section>
      <q-item-section>
        {{ menuItem.label }}
      </q-item-section>
    </q-item>
    <q-separator :key="'sep' + index" v-if="menuItem.separator" />
  </template>
</template>

<script setup>
import {defineProps } from "vue";

const props = defineProps({
 
  menuList: {
    type: Array,
    default: () => [],
  },
});
// const menuList = [
//   {
//     icon: "inbox",
//     label: "Inbox",
//     separator: true,
//     subMenuItem: [
//       {
//         icon: "send",
//         label: "Outbox",
//         separator: false,
//       },
//       {
//         icon: "delete",
//         label: "Trash",
//         separator: true,
//       },
//     ],
//   },
//   {
//     icon: "send",
//     label: "Outbox",
//     separator: false,
//     subMenuItem: [
//       {
//         icon: "send",
//         label: "Outbox",
//         separator: false,
//       },
//       {
//         icon: "delete",
//         label: "Trash",
//         separator: true,
//       },
//     ],
//   },
//   {
//     icon: "delete",
//     label: "Trash",
//     separator: false,
//   },
//   {
//     icon: "error",
//     label: "Spam",
//     separator: true,
//   },
//   {
//     icon: "settings",
//     label: "Settings",
//     separator: false,
//   },
//   {
//     icon: "feedback",
//     label: "Send Feedback",
//     separator: false,
//   },
//   {
//     icon: "help",
//     iconColor: "primary",
//     label: "Help",
//     separator: false,
//   },
// ];
</script>
