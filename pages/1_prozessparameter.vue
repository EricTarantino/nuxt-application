<template>
  <div>
    <v-app>  
      <v-container fluid>
        <v-row justify="center" class="mb-4">
          <processparametertopbar @clicked="toggleComponent"/>
        </v-row>
        <processparameter :showMaterial="showMaterial" :showRingjack="showRingjack" :showProcess="showProcess"/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Processparameter from '~/components/Femprocessparameter.vue'
import Processparametertopbar from '~/components/Femprocessparameter_topbar.vue'

export default {
  transition: 'transition',
  components: {
    Processparameter,
    Processparametertopbar
  },
  data: () => ({
    showMaterial: false,
    showRingjack: false,
    showProcess: false,
  }),
  methods: {
    toggleComponent (value) {
      this[value] = !this[value]
    }
  }
}
</script>

<style>
.transition-enter-active, .transition-leave-active { transition: opacity .4s; }
.transition-enter, .transition-leave-active { opacity: 0; }
.zero{
  border-radius:
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
</style>