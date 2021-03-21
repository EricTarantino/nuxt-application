<template>
    <row>
      <v-col cols="12" class="label-size pa-0">
        <v-btn
          tile
          class="button-width"
          :color="showStatus ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showStatus"); toggleColor(showStatus)'
        >
        Status
        </v-btn>
        <v-btn    
          tile    
          class="button-width" 
          :color="showChart ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='sendToParent("showOverview"); toggleColor(showOverview)'
        >
        Übersicht
        </v-btn>
        <v-btn
          tile
          class="button-width" 
          :color="showFilter ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showViewport"); toggleColor(showViewport)'
        >
        Ansicht
        </v-btn>
      </v-col>
    </row>
</template>

<script>
export default {
    data: () => ({
      showOverview: false,
      showStatus: false,
      showViewport: false,
    }),
    methods:{
      sendToParent(message){
        this.$emit('clicked', message)
      },
      toggleColor(value){
        this[value] = !this[value];
      }
    }
  }
</script>

<style>
.button-width{
  width:150px
}
</style>