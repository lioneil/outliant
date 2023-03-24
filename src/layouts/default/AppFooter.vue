<template>
  <v-footer color="#ececec" style="margin-top: 120px;">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" align-self="start">
          <v-layout style="margin-top: -120px !important;">
            <v-spacer></v-spacer>
            <FakeImage
              style="background-color: #c4c4c4; width: 400px; min-height: 400px;"
            ></FakeImage>
          </v-layout>
        </v-col>
        <v-col cols="12" lg="5" align-self="end">
          <h2 class="text-h4 font-weight-bold mb-6">Lorem ipsum dolor sit consectetur</h2>
          <p class="text-subtitle-1 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus et sint dolorum.</p>
          <CtaBtn class="mb-10"></CtaBtn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import FakeImage from '@/components/Faker/FakeImage.vue';
import CtaBtn from '@/components/CtaBtn.vue';
</script>
