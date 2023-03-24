<template>
  <v-btn
    class="text-none bg-primary text--white"
  >{{ text }}</v-btn>
</template>

<script setup>
const { text } = defineProps({
  text: {
    type: String,
    default: 'Call to Action',
  },
});
</script>
