<template>
  <v-container class="mt-15">
    <v-row justify="space-between" class="align-center">
      <v-col cols="12" md="4" order="2">
        <h1 class="text-h3 font-weight-bold mb-4">Lorem ipsum dolor sit amet consectetur</h1>
        <p class="text-subtitle-1 text-grey mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor delectus velit ab quae non optio.</p>

        <CtaBtn></CtaBtn>
        <v-btn variant="outlined" class="text-none ml-3">See Workspace</v-btn>
      </v-col>
      <v-col cols="12" md="5" order="1" order-md="2">
        <!-- <v-layout> -->
          <!-- <v-spacer></v-spacer> -->
          <FakeImage fancy style="background-color: #c4c4c4;"></FakeImage>
        <!-- </v-layout> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CtaBtn from '@/components/CtaBtn.vue';
import FakeImage from '../Faker/FakeImage.vue';
</script>
