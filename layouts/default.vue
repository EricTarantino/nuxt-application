<template>
  <div id="default" :key="key">    
    <div class="flex-auto">
      <nav ref="navbar" class="flex items-center justify-between flex-wrap bg-gray-900 p-6 shadow-lg">
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
    <div v-if="showSidebar()" class="p-6 justify-center text-center overflow-auto" >
      <!-- insert jwt token decoded -->
      <Sidebar :style="'margin-top:80px; height: '+sidebarHeight+'px'" jwtDecoded="jwt_decoded"/>
    </div>
    <div ref="foot" id="footer" :style="'top:'+footerPosition+'px'">
      <dfooter :style="'height:'+footerHeight+'px'" :einstellungen="this.$auth.loggedIn"/>
    </div>
  </div>
</template>

<!-- move websocket here -->
<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      footerHeight: 0,
      footerPosition: 0,
      key: 0,
      navbarHeight: 0,
      refreshContentTimer: null,
      sidebarHeight: 0,
      mobileMenu: false,
    }
  },
  computed: {
    breakpoints() {
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
  computed: mapState([
  'processParameterHeight'
  ]),
  watch:{
    processParameterHeight:function(){
      this.resizeHandler()
    }
  },
  created(){
    console.log(this.$vuetify.breakpoint)
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket('ws://localhost:3000')
    this.connection.onmessage = function(event) {
      console.log(event)
    }
    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }
  },
  mounted(){
    this.navbarHeight = this.$refs["navbar"].clientHeight
    this.footerHeight = 50
    this.resizeHandler()
    window.addEventListener('scroll', this.resizeHandler)
    window.addEventListener('resize', this.resizeHandler)
    if(window.innerWidth>420){
      this.mobileMenu = false
    } else {
      this.mobileMenu = true
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.resizeHandler)
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    showSidebar(){
      return (this.$auth.loggedIn & !this.mobileMenu)
    },
    footerPositionFct(value){
      this.footerPosition = value
    },
    // height handler
    defaultHeightHandler(){

    },
    processParameterHeightHandler(){
      let body = document.querySelector("body");
      if(this.processParameterHeight < window.innerHeight){
        body.style.overflow = "hidden"
        window.scrollTo(2, 0);
        setTimer(window.scrollTo(0, 0), 1000);
      } else {
        body.style.overflow = "visible"
      }
    },
    dataHeightHandler(){
      /* fill out */
      let body = document.querySelector("body");
      body.style.overflow = "visible"
    },
    simulationHeightHandler(){
      /* fill out */
      let body = document.querySelector("body");
      body.style.overflow = "visible"
    },
    mlHeightHandler(){
      /* fill out */
      let body = document.querySelector("body");
      body.style.overflow = "visible"
    },
    resizeHandler:function(){
      clearTimeout(this.refreshContentTimer)
      if(this.$route.name==="1_processparameter"){
        this.processParameterHeightHandler()
      } else{
        if(this.$route.name==="2_femdaten"){
          this.dataHeightHandler()
        } else {
          if(this.$route.name==="3_femsimulation"){
            this.simulationHeightHandler()
          } else {
            if(this.$route.name==="4_femml"){
              this.mlHeightHandler()
            }
          }
        }
      }
      // dataHeightHandler()
      let body = document.querySelector("body");
      if(window.innerHeight<body.scrollHeight){
        this.sidebarHeight = body.scrollHeight-this.navbarHeight-this.footerHeight
      } else {
        this.sidebarHeight = window.innerHeight-this.navbarHeight-this.footerHeight-5
      }
      this.footerPosition = this.sidebarHeight+this.navbarHeight
      
      if(body.clientWidth>585){
        this.mobileMenu = false
        this.refreshContentTimer = setTimeout(()=>{
          let doc = document.getElementsByClassName('v-navigation-drawer')
          if(typeof doc[0] !== undefined){
            doc[0].classList.remove("v-navigation-drawer--is-mobileMenu")
          }
        }, 100);
      } else {
        this.mobileMenu = true
      }
      this.footerHeight = document.getElementById("footerHeight")
      if(typeof this.footerHeight !== "undefined" && this.footerHeight !== null ){
        this.footerHeight = this.footerHeight.clientHeight
      }
    },
    sendMessage(){
      this.connection.send("message", {test:"message"})
    }
  }
}
</script>

<style>
#footer{
  position:absolute;
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

.long{
  max-height: 800px
}

.long{
  max-height: 1300px
}
</style>
