<template>
  <q-scroll-area style="height: 100vh">
    <div
      class="row no-wrap"
      style="display: flex; align-items: center; justify-content: center"
    >
      <q-img
        v-for="(pl, key) in planets"
        :key="key"
        :alt="pl.name"
        :height="`${pl.height}px`"
        :width="`${pl.width}px`"
        :ratio="16 / 9"
        :src="pl.image"
        :class="`q-ma-md ${pl.clickable ? 'cursor-pointer' : ''}`"
        @click="$emit('onSelectPlanet', pl)"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ pl.name }}
        </div>
      </q-img>
    </div>
  </q-scroll-area>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    planets: {
      type: Array,
      default: [],
    },
  },
});
</script>

<style>
</style>