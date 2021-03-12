<template>
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
            <v-list-item-title>{{ jwtDecoded.given_name }} {{ jwtDecoded.family_name }}</v-list-item-title>
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
            <v-list-item-title><NuxtLink to="/1_prozessparameter">Prozessparameter</NuxtLink></v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-blur-radial</v-icon>
            </v-list-item-icon>
            <v-list-item-title><NuxtLink to="/2_femdaten">FEM Daten</NuxtLink></v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-blur</v-icon>
            </v-list-item-icon>
            <v-list-item-title><NuxtLink to="/3_femsimulation">FEM Simulation</NuxtLink></v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-list-item-icon>
            <v-icon>mdi-checkbox-multiple-blank-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title><NuxtLink to="/4_femml">FEM ML</NuxtLink></v-list-item-title>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script  lang="ts">
import Logo from '~/components/Logo.vue'

export default {
   props: {
    jwtDecoded:  {
      type: String,
      required: false,
    }
  },
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
 