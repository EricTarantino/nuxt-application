<template>
  <div> 
    <v-container>
      <femsimulationfilter/>
      <v-data-table
        :headers="dessertHeaders"
        :items="desserts"
        :single-expand="true"
        :expanded.sync="expanded"
        item-key="id"
        show-expand
        class="elevation-1"
        :items-per-page="5"
        :footer-props="{
          'items-per-page-options': [5, 10]
        }"
      >
        <template v-slot:[`item.favorite`]="{  item }">
          <v-icon
            v-if="item.favorite"
            @click="item.favorite=!item.favorite"
            color="grey lighten-1"
          >
            mdi-star-outline
          </v-icon>
          <v-icon
            v-else
            @click="item.favorite=!item.favorite"
            color="yellow darken-3"
          >
            mdi-star
          </v-icon>
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Overview</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            Preview of {{ item.id }}
          </td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>

import Femsimulationfilter from '~/components/Femsimulation_filter.vue'

export default {
  components: {
    Femsimulationfilter,
  },
  data () {
    return {
      expanded: [],
      dessertHeaders: [
        { text: 'Id', align: 'start', value: 'id' },
        { text: 'Status', value: 'status' },
        { text: 'Erstellt am', value: 'created_at' },
        { text: 'Erstellt von', value: 'created_by' },
        { text: 'Favorit', value: 'favorite'},
        { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
          id: '01',
          status: 'Gesendet',
          created_at: 'date 1',
          created_by: 'Max',
          favorite: false,
        },
        {
          id: '02',
          status: 'Bearbeitung',
          created_at: 'date 2',
          created_by: 'Max',
          favorite: true,
        },
        {
          id: '03',
          status: 'Fertig',
          created_at: 'date 3',
          created_by: 'Maria',
          favorite: false,
        },
        {
          id: '04',
          status: 'Bearbeitung',
          created_at: 'date 4',
          created_by: 'Maria',
          favorite: true,
        },
        {
          id: '05',
          status: 'Fertig',
          created_at: 'date 5',
          created_by: 'Max',
          favorite: false,
        },         
      ],
    }
  },
}
</script>