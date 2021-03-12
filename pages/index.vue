<template>
  <div class="p-6 justify-center text-center overflow-auto">
    <div v-if="!this.$auth.loggedIn">
      <logo />
      <h1 class="text-4xl">
        FEM as a Service
      </h1>
      <a class="tracking-tight cursor-pointer" @click="$auth.loginWith('aad')">Sign in with Microsoft</a>
    </div>
    <div v-else="">
      <Sidebar jwtDecoded="jwt_decoded"/>
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  asyncData (context: any) {
    return {
      jwt_decoded: context.app.$auth.$storage.getUniversal('jwt_decoded')
    }
  },
  data () {
    return { jwt_decoded: null, connection: null}
  },
  created: function(){
    console.log("Starting connection to WebSocket Server")
    
    this.connection = new WebSocket('ws://localhost:3000')

    this.connection.onmessage = function(event) {
      console.log(event);
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }
    
  },

  methods:{
    sendMessage(){
      this.connection.send("message", {test:"message"})
    }
  }
}
</script>

<style>
.avatar {
  margin-right:20px
}
</style>
