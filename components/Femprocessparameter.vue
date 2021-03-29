<template>
  <div ref="processParameter" class="left_border"> 
    <div id="material" v-if="showMaterial" style="padding-top:30px">
      <v-row class="hml">
        <v-col cols="3" class="label-size">
          Werkstoff Bezeichnung
        </v-col>
        <v-col cols="3" >
          <v-select
            class="zero font_size_description"
            type="number" 
            label="Werkstoff Bezeichnung"
            outlined
            :items="items"
          ></v-select>
        </v-col>
        <v-col cols="3"  class="label-size">
          ​Werkstoffradius
        </v-col>
        <v-col cols="3">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="​Werkstoffradius"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="hml">
        <v-col cols="3" class="label-size">
          Werkstückdicke
        </v-col>
        <v-col cols="3">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Werkstückdicke"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="label-size">
          Werkstück Oberflächengröße
        </v-col>
        <v-col cols="3" >
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Oberflächengröße"
            outlined
            :rules="rules"
            suffix="mm²"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="hml p-3" justify="end" >
        <v-btn
          class="button-width"
          tile
          color="deep-purple lighten-3"
          x-large
          >
            Bestätigen
        </v-btn>
      </v-row>
      <hr style="padding-bottom:30px; margin-top:50px">
    </div>

    <div id="parameter" v-if="showRingjack" style="padding-top:30px">
      <v-row class="hml">
        <v-col cols="3" class="label-size">
          Obere Ringzackenhöhe
        </v-col>
        <v-col cols="3">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Obere Ringzackenhöhe"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="label-size">
          Untere Ringzackenhöhe
        </v-col>
        <v-col cols="3" >
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Untere Ringzackenhöhe"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="hml">
        <v-col cols="3" class="label-size">
          Obere Ringzackenposition
        </v-col>
        <v-col cols="3">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Obere Ringzackenpos."
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="label-size">
          Untere Ringzackenposition
        </v-col>
        <v-col cols="3" >
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Untere Ringzackenpos."
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="hml p-3" justify="end" >
        <v-btn
          class="button-width"
          tile
          color="deep-purple lighten-3"
          x-large
          >
            Bestätigen
        </v-btn>
      </v-row>
      <hr style="padding-bottom:30px; margin-top:50px">
    </div>

    <div id="showProcess" v-if="showProcess" style="padding-top:30px">
      <v-row class="hml">
        <v-col cols="2">
          <v-radio-group
            v-model="model"
            row
            mandatory          
          >
            <v-radio
              label="Matrizenfase"
              value="Matrizenfase"
            ></v-radio>
            <v-radio
              label="Matrizenverrundung"
              value="Matrizenverrundung"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="2" class="label-size">
          {{model}}
        </v-col>
        <v-col cols="2">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            :label="model"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="label-size">
          Stempelverrundung
        </v-col>
        <v-col cols="3">
          <v-text-field        
            class="zero font_size_description"
            type="number" 
            label="Stempelverrundung"
            outlined
            :rules="rules"
            suffix="mm"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="hml p-3" justify="end" >
        <v-btn
          class="button-width"
          tile
          color="deep-purple lighten-3"
          x-large
          >
            Bestätigen
        </v-btn>
      </v-row>
      <hr style="padding-bottom:30px; margin-top:50px">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data:() => ({
    processParameterHeight: 0,
    items: ['130426_HS-MaterialDB_FerrousAlloys_V6.csv', '130426_HS-MaterialDB_Non-FerrousAlloys_V6.csv'],
    rules: [
      value => !!value || 'Required.',
      value => (Number(String(value).replace(/[^0-9]/g, '')) >= 5) || 'Mindestens 5 Ziffern', // Anzahl an Nachkommastellen?
    ],
    model: "Matrizenfase",
  }),
  computed: mapState([
  'showMaterial','showRingjack','showProcess'
  ]),
  watch:{
    showMaterial:function(){
      this.setProcessParameterHeight()
    },
    showRingjack:function(){
      this.setProcessParameterHeight()
    },
    showProcess:function(){
      this.setProcessParameterHeight()
    }
  },
  methods:{
    setProcessParameterHeight(){
      setTimeout(function(){
        this.$store.commit('setProcessParameterHeight', this.$refs['processParameter'].clientHeight); 
      }.bind(this), 0)
    }
  }
}
</script>

<style>
.hml{
  max-height: 15%;
}
.avatar {
    margin-right:20px
}
.zero font_size_description{
    border-radius:0px;
}

.font_size_description{
  font-size: 1.3rem;
}

.v-menu__content{
    border-radius:0px
}
.label-size{
    font-size: 1.3rem;
}
.left_border{
  padding-left:0%;
}
.button-width{
  width: 150px
}
</style>