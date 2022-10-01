<template>
  <div>
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
          @click="navigatePlanet(pl)"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            {{ pl.name }}
          </div>
        </q-img>
      </div>
    </q-scroll-area>

    <q-dialog
      v-model="plenetSelected.modal"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card v-if="plenetSelected.modal" class="bg-black text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" color="red" v-close-popup>
            <q-tooltip class="bg-white text-red">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h4 text-bold">{{ plenetSelected.data.name }}</div>
        </q-card-section>

        <q-card-section class="container-space">
          <div v-for="(content, key) in plenetSelected.data.orbits" :key="key">
            <q-img
              :alt="content.name"
              :style="`position: absolute; top: ${content.y}px; left: ${content.x}px; height: ${content.width}px; max-width: ${content.height}px; object-fit: none;`"
              :src="content.image"
              :ratio="content.ratio"
              :initial-ratio="content.ratio"
              class="cursor-pointer"
              :fit="'contain'"
              @click="navigateCorpusOfPlanet(content)"
            >
            </q-img>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ plenetSelected.data.description }}
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="corpusOfPlanet.modal"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card v-if="corpusOfPlanet.modal" class="bg-black text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" color="red" v-close-popup>
            <q-tooltip class="bg-white text-red">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h4 text-bold">{{ corpusOfPlanet.data.name }}</div>
        </q-card-section>

        <q-card-section>
          <div v-for="(dS, key) in corpusOfPlanet.data.dataSet" :key="key">
            <q-img v-if="dS.type == 'image'" :alt="dS.name" :src="dS.url">
              <div class="absolute-bottom text-subtitle1 text-center">
                {{ dS.name }}
              </div>
            </q-img>
          </div>
        </q-card-section>

        <q-card-section
          v-if="corpusOfPlanet.data.threeDmodelCorpus"
          v-html="corpusOfPlanet.data.threeDmodelCorpus.url"
        >
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ $t(corpusOfPlanet.data.description) }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import PLANETS_JSON from "../boot/PLANETS.json";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const plenetSelected = ref({
      modal: false,
      data: null,
    });

    const corpusOfPlanet = ref({
      modal: false,
      data: null,
    });

    function navigatePlanet(pl) {
      if (!pl.clickable) {
        return;
      }

      plenetSelected.value = {
        modal: true,
        data: pl,
      };
    }

    function navigateCorpusOfPlanet(pl) {
      corpusOfPlanet.value = {
        modal: true,
        data: pl,
      };
    }

    const planets = ref(PLANETS_JSON);

    return {
      planets,
      plenetSelected,
      corpusOfPlanet,
      navigatePlanet,
      navigateCorpusOfPlanet,
    };
  },
});
</script>
<style>
.container-space {
  position: relative;
}
.absolute-full {
}
</style>