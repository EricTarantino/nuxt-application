<template>
  <div>
      <NuxtLink to="/">From Prozessparameter to Home page</NuxtLink>
      <v-container>
        <v-row v-row>
          <v-col cols="2">
            Prozessparameter: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
          <v-col offset="1" cols="2">
            Niederhaltekraft: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            Prozessparameter: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
          <v-col offset="1" cols="2">
            Niederhaltekraft: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            Prozessparameter: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
          <v-col offset="1" cols="2">
            Niederhaltekraft: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            Prozessparameter: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
          <v-col offset="1" cols="2">
            Niederhaltekraft: 
          </v-col>
          <v-col cols="3">
            <v-select
              class="zero"
              :items="items"
              label="Outlined style"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style>
.avatar {
  margin-right:20px
}
.zero{
  border-radius:0px
}
.v-menu__content{
  border-radius:0px
}
.lifted{
  padding-bottom:4%
}
</style>