<template>
  <v-app :style="'height:'+(processParameterHeight+paddingtopheight)+'px'">  
    <v-container :v-html="key">
      <v-row justify="center">
        <processparametertopbar/>
      </v-row>
      <div>
        <processparameter id="processParameterHeight"/>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Processparameter from '~/components/Femprocessparameter.vue'
import Processparametertopbar from '~/components/Femprocessparameter_topbar.vue'
import { mapState } from 'vuex'

export default {
  transition: 'transition',
  components: {
    Processparameter,
    Processparametertopbar,
  },
  data:() => ({
    key:0,
    vApplicationHeight: 0,
    paddingtopheight: 50
  }),
  computed: mapState([
    'processParameterHeight'
  ]),
  mounted(){
    let foo = document.getElementsByClassName('v-application--wrap')
    foo[0].classList.remove("v-application--wrap")
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
.transition-enter-active, .transition-leave-active { transition: opacity .4s; }
.transition-enter, .transition-leave-active { opacity: 0; }
.zero{
  border-radius: 0px
}
.v-menu__content{
  border-radius:0px
}
.lifted{
  padding-bottom:4%
}
.button-width{
  width: 150px
}

.mystyle {
  height: 400px !important
}

.overflow_hidden{
  overflow: 'hidden' !important
}

.placer-class{
 height: 600px
}

.overflow_show{
  overflow: 'visible' !important
}

.v-application--wrap{
  height: 2000px !important
}
</style>