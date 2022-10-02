<template>
  <q-dialog
    v-model="planetOrbiterSelected.modal"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card v-if="planetOrbiterSelected.modal" class="bg-black text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" color="red" v-close-popup>
          <q-tooltip class="bg-white text-red">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h4 text-bold">
          {{ planetOrbiterSelected.data.name }}
        </div>
      </q-card-section>

      <q-card-section v-if="planetOrbiterSelected.data.dataSet.length > 0">
        <q-scroll-area style="height: 100vh">
          <div class="row no-wrap">
            <div
              v-for="(dS, key) in planetOrbiterSelected.data.dataSet"
              :key="key"
              style="width: 500px"
              class="q-ma-sm"
            >
              <template v-if="dS.type == 'image'">
                <q-img :alt="dS.name" :src="dS.url" class="q-ma-sm">
                  <div class="absolute-bottom text-subtitle1 text-center">
                    {{ dS.name }}
                  </div>
                </q-img>
              </template>
              <template v-if="dS.type == 'video'">
                <q-video :ratio="16 / 9" :src="dS.url" class="q-ma-sm" />
              </template>
              <template v-if="dS.type == 'article'">
                <q-btn
                  :href="dS.url"
                  target="_blank"
                  style="width: 300px; height: 300px"
                >
                  <q-img
                    :src="dS.logo"
                    style="width: 300px; height: 300px"
                    ratio="1"
                    fit="contain"
                  >
                    <div class="absolute-bottom text-subtitle1 text-center">
                      {{ dS.name }}
                    </div>
                  </q-img>
                </q-btn>
              </template>
            </div>
          </div>
        </q-scroll-area>
      </q-card-section>

      <q-card-section
        v-if="planetOrbiterSelected.data.threeDmodelCorpus"
        v-html="planetOrbiterSelected.data.threeDmodelCorpus.url"
      >
      </q-card-section>

      <q-card-section v-if="planetOrbiterSelected.data.realTimeVideo">
        <q-video
          :ratio="16 / 9"
          :src="planetOrbiterSelected.data.realTimeVideo"
          class="q-ma-sm"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ $t(planetOrbiterSelected.data.description) }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    planetOrbiterSelected: {
      type: Object,
      default: {
        modal: false,
        data: null,
      },
    },
  },
});
</script>