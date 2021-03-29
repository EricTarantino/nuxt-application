<template>
      <v-col cols="12" class="label-size ma-0 pa-0">
        <v-btn    
          class="button-width"
          tile     
          :color="showMaterial ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='handler(0)'
        >
        Werkstoff
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showRingjack ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='handler(1)'
        >
        Ringzacke
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showProcess ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='handler(2)'
        >
        Prozess
        </v-btn>
      </v-col>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
    }),
    computed: mapState([
      'showMaterial','showRingjack','showProcess', 'toggles'
    ]),
    methods:{
      handler(param){
        this.$store.commit('toggleParameter', this.toggles[param])
      }
    }
  }
</script>

<style>
.button-width{
  width:"150px"
}
</style>