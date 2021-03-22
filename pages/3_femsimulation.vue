<template>
  <div>
    <v-app>  
      <v-container fluid>
        <v-row justify="center">
          <femsimulationtopbar @clicked="toggleComponent"/>
        </v-row>
        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <femsimulationoverview v-if="showOverview"/>
        </transition>
        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <femsimulationviewport v-if="showViewport"/>
        </transition>        
        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <femsimulationfavorites v-if="showFavorites"/>
        </transition> 
      </v-container>
    </v-app>
  </div>
</template>

<script>

import Femsimulationoverview from '~/components/Femsimulation_overview.vue'
import Femsimulationviewport from '~/components/Femsimulation_viewport.vue'
import Femsimulationfavorites from '~/components/Femsimulation_favorites.vue'

import Femsimulationtopbar from '~/components/Femsimulation_topbar.vue'

export default {
  transition:'transition',
  components: {
    Femsimulationtopbar, 
    Femsimulationoverview, 
    Femsimulationviewport, 
    Femsimulationfavorites,
  },
    data: () => ({
      showOverview: false,
      showViewport: false,
      showFavorites: false,
    }),
  methods: {
    toggleComponent (value) {
      this[value] = !this[value]
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = 0;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    enterTable(element) {
      const { height } = getComputedStyle(element);

      element.style.height = 0;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnterTable(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>
.transition-enter-active, .transition-leave-active { transition: opacity .4s; }
.transition-enter, .transition-leave-active { opacity: 0; }

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
</style>