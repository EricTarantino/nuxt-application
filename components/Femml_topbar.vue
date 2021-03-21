<template>
    <row>
      <v-col cols="12" class="label-size pa-0">
        <v-btn    
          tile     
          style="button-width"
          :color="showChart ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"  
          x-large
          @click='sendToParent("showGenerate"); toggleColor(showGenerate)'
        >
        Generieren
        </v-btn>
        <v-btn
          tile
          style="button-width"
          :color="showFilter ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showModel"); toggleColor(showModel)'
        >
        Modellieren
        </v-btn>
        <v-btn
          tile
          style="button-width"
          :color="showStatus ? 'deep-purple lighten-1' : 'deep-purple lighten-3'"
          x-large
          @click='sendToParent("showApply");  toggleColor(showApply)'
        >
        Anwenden
        </v-btn>
      </v-col>
    </row>
</template>

<script>
export default {
    data: () => ({
      showGenerate: false,
      showModel: false,
      showApply: false
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