<template>
  <div>    
    <div class="flex-auto">
      <nav  class="flex items-center justify-between flex-wrap bg-gray-900 p-6 shadow-lg">
        <!--<v-app-bar-nav-icon style="color:white; margin-right:20px" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
        <nuxt-link to="/" class="flex items-center flex-shrink-0 text-white text-xl tracking-tight mr-6">
          FEM as a Service
        </nuxt-link>
        <div>
          <a v-if="!this.$auth.loggedIn" class="zero inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-0" @click="$auth.loginWith('aad')">Sign in with Microsoft</a>
          <a v-if="this.$auth.loggedIn" class="zero inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-0" @click="$auth.logout('aad')">Sign out</a>
        </div>
      </nav>
    </div>  
    <subnav/>      
    <nuxt style="padding-left:10%; padding-right:10%"/>    
    <div v-if="this.$auth.loggedIn" class="p-6 justify-center text-center overflow-auto" >
      <!-- insert jwt token decoded -->
      <Sidebar style="margin-top:80px" jwtDecoded="jwt_decoded"/>
    </div>
    <div id="footer">
      <dfooter :einstellungen="this.$auth.loggedIn"/>
    </div>
  </div>
</template>

<!-- move websocket here -->
<script>
  export default {
    created () {
      console.log(this.$vuetify.breakpoint)
    },

    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '400px'
          case 'md': return '500px'
          case 'lg': return '600px'
          case 'xl': return '800px'
        }
        console.log(this.$vuetify.breakpoint)
      },
    },
  }
</script>

<style>
#footer{
  position:fixed;
  bottom:0;
  width:100%;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.zero {
  border-radius:0px
}
</style>
