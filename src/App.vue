<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>
    <v-content>
      <SearchBar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Home from '@/views/Home'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'App',

  components: {
    // Home,
    SearchBar,
  },

  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'favorites',
        url: '/favorites',
      },
    ],
  }),
}
</script>
