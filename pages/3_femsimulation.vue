<template>
  <div>
    <v-app>  
      <v-container fluid>
        <v-row justify="center">
          <femsimulationtopbar @clicked="toggleComponent"/>
        </v-row>
        <!--
        <femdatachart v-if="showX"/>
        <femdatafilter v-if="showY"/>
        <femdatatable v-if="showZ"/>
        -->
      </v-container>
    </v-app>
  </div>
</template>

<script>

/*
import Femdatachart from '~/components/Femdata_chart.vue'
import Femdatafilter from '~/components/Femdata_filter.vue'
import Femdatatable from '~/components/Femdata_table.vue'
*/

import Femsimulationtopbar from '~/components/Femsimulation_topbar.vue'

export default {
  transition:'transition',
  components: {
    Femsimulationtopbar
  },
    data: () => ({
      showOverview: false,
      showViewport: false,
      showStatus: false,
    }),
    methods: {
      toggleComponent (value) {
        this[value] = !this[value]
        console.log(value)
      }
      
    }
  }
</script>

<style>
.transition-enter-active, .transition-leave-active { transition: opacity .4s; }
.transition-enter, .transition-leave-active { opacity: 0; }
</style>