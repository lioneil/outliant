<template>
  <v-app-bar flat>
    <v-container>
      <v-row class="px-4">
        <v-app-bar-title>
          <span class="font-weight-bold">Logo</span> <span class="text-lg text-disabled">●</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-for="(menu, i) in menus" :key="i">
          <v-btn
            :to="menu.url"
            :color="isActive(menu) ? 'primary' : 'secondary'"
            exact
            class="text-capitalize"
            v-text="menu.text"
          ></v-btn>
        </template>
        <v-spacer></v-spacer>
        <cta-btn size="large"></cta-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import menus from '@/config/menus';
import CtaBtn from '@/components/CtaBtn.vue';
import { useRoute } from 'vue-router';

const $route = useRoute();

function isActive (menu) {
  return menu.url.name === $route.name;
}
</script>
