<template>
  <v-footer
     style="border-top: 1px solid #E0E0E0"
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in getLinks()"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    props:["einstellungen"],
    data: () => ({
      links: [
        'Unternehmen',
        'Wie funktioniert FEM-AAS',
        'Datenschutz',
        'Nutzungsbedingungen'
      ],
      links_authenticated_user: [
        'Unternehmen',
        'Wie funktioniert FEM-AAS?',
        'Datenschutz',
        'Nutzungsbedingungen',
        'Einstellungen'
      ],
    }),
    methods:{
      getLinks(){
        if(!this.einstellungen){
          return this.links
        }
        return this.links_authenticated_user
      }
    }
  }
</script>