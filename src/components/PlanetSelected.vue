<template>
  <q-dialog
    v-model="planetSelected.modal"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card v-if="planetSelected.modal" class="bg-black text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" color="red" v-close-popup>
          <q-tooltip class="bg-white text-red">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h4 text-bold">{{ planetSelected.data.name }}</div>
      </q-card-section>

      <q-card-section class="container-space">
        <div v-for="(content, key) in planetSelected.data.orbits" :key="key">
          <q-img
            :alt="content.name"
            :style="`position: absolute; top: ${content.y}px; left: ${content.x}px; height: ${content.width}px; max-width: ${content.height}px; object-fit: none;`"
            :src="content.image"
            :ratio="content.ratio"
            :initial-ratio="content.ratio"
            class="cursor-pointer"
            :fit="'contain'"
            @click="$emit('onSelectPlanetOrbiter', content)"
          >
          </q-img>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ $t(planetSelected.data.description) }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    planetSelected: {
      type: Object,
      default: {
        modal: false,
        data: null,
      },
    },
  },
});
</script>
