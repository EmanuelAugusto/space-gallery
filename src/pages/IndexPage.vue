<template>
  <div>
    <ListPlanetsScrollRight
      :planets="planets"
      @on-select-planet="navigatePlanet"
    />

    <PlanetSelected
      :planet-selected="planetSelected"
      @on-select-planet-orbiter="navigateplanetOrbiterSelected"
    />

    <PlanetOrbiterSelectedVue
      :planet-orbiter-selected="planetOrbiterSelected"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PlanetOrbiterSelectedVue from "../components/PlanetOrbiterSelected.vue";
import PlanetSelected from "../components/PlanetSelected.vue";
import ListPlanetsScrollRight from "../components/ListPlanetsScrollRight.vue";

import PLANETS_JSON from "../assets/PLANETS_JSON.json";

export default defineComponent({
  name: "IndexPage",
  components: {
    PlanetOrbiterSelectedVue,
    PlanetSelected,
    ListPlanetsScrollRight,
  },
  setup() {
    const planetSelected = ref({
      modal: false,
      data: null,
    });

    const planetOrbiterSelected = ref({
      modal: false,
      data: null,
    });

    const planets = ref(PLANETS_JSON);

    function navigatePlanet(pl) {
      if (!pl.clickable) {
        return;
      }

      planetSelected.value = {
        modal: true,
        data: pl,
      };
    }

    function navigateplanetOrbiterSelected(pl) {
      planetOrbiterSelected.value = {
        modal: true,
        data: pl,
      };
    }

    return {
      planets,
      planetSelected,
      planetOrbiterSelected,
      navigatePlanet,
      navigateplanetOrbiterSelected,
    };
  },
});
</script>
