<template>
  <v-app-bar flat>
    <v-container>
      <v-row class="px-4">
        <v-app-bar-title>
          <span class="font-weight-bold">Logo</span> <span class="text-lg text-disabled">●</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile()" v-for="(menu, i) in menus" :key="i">
          <v-btn
            :to="menu.url"
            :color="isActive(menu) ? 'primary' : 'secondary'"
            exact
            class="text-capitalize"
            v-text="menu.text"
          ></v-btn>
        </template>
        <v-spacer></v-spacer>
        <cta-btn v-if="!isMobile()" size="large"></cta-btn>
      </v-row>
    </v-container>
    <v-app-bar-nav-icon v-if="isMobile()" @click="toggleMenu"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="menu"
    temporary
    location="bottom"
    min-height="400px"
  >
    <v-list>
      <v-list-item
        v-for="(menu, i) in menus" :key="i"
        :to="menu.url"
        :class="isActive(menu) ? 'primary' : 'secondary'"
        exact
      >
        <v-list-item-title class="text-center">{{ menu.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="pa-2">
      <cta-btn block size="large"></cta-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import menus from '@/config/menus';
import CtaBtn from '@/components/CtaBtn.vue';
import { useRoute } from 'vue-router';
import { reactive, ref } from 'vue';
import { useDisplay } from 'vuetify';

const $route = useRoute();

function isActive (menu) {
  return menu.url.name === $route.name;
}

const menu = ref(false);

function toggleMenu () {
  menu.value = !menu.value;
}

const $display = reactive(useDisplay());
function isMobile () {
  return $display.smAndDown;
}
</script>
