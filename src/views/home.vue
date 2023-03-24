<template>
  <app-hero-banner class="mb-15"></app-hero-banner>

  <v-container>
    <v-row>
      <v-col cols="6" lg="3" align-self="start">
        <h3 class="font-weight-bold mb-5">Header Text</h3>
        <p class="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus et sint dolorum itaque adipisci, iste reprehenderit quos.</p>
      </v-col>
      <v-col cols="6" lg="" align-self="center">
        <FakeImage style="background-color: #c4c4c4; width: 100%; min-height: 400px;"></FakeImage>
      </v-col>
      <v-col cols="6" lg="4" align-self="end">
        <h3 class="font-weight-bold mb-5">Header Text</h3>
        <p class="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus et sint dolorum itaque adipisci, iste reprehenderit quia exercitationem nostrum perspiciatis ex ducimus provident quos facilis distinctio laboriosam accusamus eos.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppHeroBanner from '@/components/Hero/AppHeroBanner.vue';
import FakeImage from '@/components/Faker/FakeImage.vue';
</script>
