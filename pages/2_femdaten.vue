<template>
  <div>
    <v-app>  
      <v-container fluid>
        <v-row justify="center" class="mb-4">
          <femdatatopbar @clicked="toggleComponent"/>
        </v-row>

        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <femdatachart  v-if="showChart"/>
        </transition>

        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
        <femdatafilter v-if="showFilter"/>
        </transition>

        <transition
          name="fade"
          mode="out-in"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <femdatatable v-if="showTable"/>
        </transition>

      </v-container>
    </v-app>
  </div>
</template>

<script>

import Femdatachart from '~/components/Femdata_chart.vue'
import Femdatafilter from '~/components/Femdata_filter.vue'
import Femdatatable from '~/components/Femdata_table.vue'

import Femdatatopbar from '~/components/Femdata_topbar.vue'

export default {
  transition:'transition',
  components: {
    Femdatachart,
    Femdatafilter,
    Femdatatable,
    Femdatatopbar
  },
  data: () => ({
    showChart: false,
    showFilter: false,
    showTable: false,
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