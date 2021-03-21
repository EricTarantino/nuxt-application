<template>
    <row>
      <v-col cols="12" class="label-size pa-0">
        <v-btn
          class="button-width"
          tile     
          :color="showChart ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='sendToParent("showChart"); showChart = !showChart;'
        >
        Chart
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showFilter ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showFilter"); showFilter = !showFilter'
        >
        Filter
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showStatus ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showTable"); showStatus = !showStatus'
        >
        Table
        </v-btn>
      </v-col>
    </row>
</template>

<script>
export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      showChart: false,
      showFilter: false,
      showStatus: false,
      showTable: false
    }),
    methods:{
      sendToParent(message){
        this.$emit('clicked', message)
      },
    }
  }
</script>

<style>
.button-width{
  width: 150px
}
</style>