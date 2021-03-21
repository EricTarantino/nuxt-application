<template>
  <v-row>
    <v-col cols="12" class="label-size"> 
      <v-data-table
        :headers="headers"
        :items="columns"
        :items-per-page="5"
          :footer-props="{
            'items-per-page-options': [10, 20, 30]
          }"
        class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Action', align: 'start', sortable: false, value: 'action' },
          { text: 'Charts', align: 'start', sortable: false, value: 'charts' },
          { text: 'ID', value: 'id' },
          { text: 'Materialname', value: 'materialname' },
          { text: 'WP Thickness', value: 'wp_thickness' },
          { text: 'WP Diameter', value: 'wp_diameter' },
          { text: 'Fbbh Force', value: 'fbbh_force' },
          { text: 'Fbcp Force', value: 'fbcp_force' },
          { text: 'Fbp Force', value: 'fbp_force' },
          { text: 'Ttvr Position', value: 'ttvr_force' },
          { text: 'Ttcr Height', value: 'ttcr_height' },
          { text: 'Tbvr Position', value: 'tbvr_position' },
          { text: 'Tbvr Height', value: 'tbvr_height' },
          { text: 'T Radius Punch', value: 't_radius_punch' },
          { text: 'T Radius Die', value: 't_radius_die' },
          { text: 'T Fase Die', value: 't_fase_die' },
          { text: 'WP Area', value: 'wp_area' },
          { text: 'RZ Length', value: 'rz_length' },
          { text: 'M Speed', value: 'm_speed' },
        ],
        columns: [
          {
            action: "action", chart: "chart", id: "id1",
          },
          {
            action: "action", chart: "chart", id: "id2",
          },
          {
            action: "action", chart: "chart", id: "id3",
          },
          {
            action: "action", chart: "chart", id: "id4",
          },
          {
            action: "action", chart: "chart", id: "id5",
          },
          {
            action: "action", chart: "chart", id: "id6",
          },
          {
            action: "action", chart: "chart", id: "id7",
          },
          {
            action: "action", chart: "chart", id: "id8",
          },
          {
            action: "action", chart: "chart", id: "id9",
          },
          {
            action: "action", chart: "chart", id: "id10",
          },
          {
            action: "action", chart: "chart", id: "id11",
          },
          {
            action: "action", chart: "chart", id: "id12",
          },
        ],
      }
    },
  }
</script>