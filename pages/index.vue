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
      <div class="ma-12 pa-12">
        
          <v-navigation-drawer
            expand-on-hover
            absolute     
            style="margin-top:84px"       
          >
            <v-list>
              <v-list-item-group>
                <v-list-item >
                  <v-list-item-avatar size="30">
                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                       {{ jwt_decoded.given_name }} {{ jwt_decoded.family_name }}
                    </v-list-item-title>
                    <!--<v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>-->
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-divider></v-divider>

            <v-list
              nav
              dense
            >
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-vector-circle-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Prozessparameter</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shared with me</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Starred</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-card-text>
             {{ jwt_decoded }}<br>
             <button @click="sendMessage">Button</button>
          </v-card-text>
<!--
          <h1 class="text-4xl">
            Hi, {{ jwt_decoded.given_name }}
          </h1>
          <hr class="m-6">
          <code><strong>Decoded JWT:</strong> {{ jwt_decoded }}</code>
          
-->     
      </div>
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
