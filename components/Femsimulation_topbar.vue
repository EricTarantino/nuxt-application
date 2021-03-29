<template>
    <v-row>
      <v-col cols="12" class="label-size pa-0">
        <v-btn    
          tile    
          class="button-width" 
          :color="showOverview ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='sendToParent("showOverview"); showOverview=!showOverview'
        >
        Übersicht
        </v-btn>
        <v-btn
          tile
          class="button-width" 
          :color="showViewport ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showViewport"); showViewport=!showViewport'
        >
        Ansicht
        </v-btn>
        <v-btn
          tile
          class="button-width"
          :color="showFavorites ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showFavorites"); showFavorites=!showFavorites'
        >
        Favoriten
        </v-btn>
      </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
      showOverview: false,
      showFavorites: false,
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