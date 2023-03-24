<template>
  <div v-bind="$attrs" class="mt-10 mr-16" style="position: relative; width: 300px; height: 300px;">
    <div
      v-if="fancy"
      :style="`
        width: 150px;
        height: 150px;
        background-color: #9d9d9d;
        position: absolute;
        top: -30px;
        right: -60px;
      `"
    ></div>
  </div>
</template>

<script setup>
const { fancy } = defineProps({
  fancy: Boolean,
});
</script>
