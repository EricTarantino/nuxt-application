<template>
    <row>
      <v-col cols="12" class="label-size pa-0">
        <v-btn    
          class="button-width"
          tile     
          :color="showMaterial ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='sendToParent("showMaterial"); showMaterial =! showMaterial'
        >
        Werkstoff
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showRingjack ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showRingjack"); showRingjack =! showRingjack'
        >
        Ringzacke
        </v-btn>
        <v-btn
          class="button-width"
          tile
          :color="showProcess ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showProcess"); showProcess =! showProcess'
        >
        Prozess
        </v-btn>
      </v-col>
    </row>
</template>

<script>
export default {
    data: () => ({
      showMaterial: false,
      showRingjack: false,
      showProcess: false,
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
  width:"150px"
}
</style>