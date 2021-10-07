<template>
  <div class="home">
    <BeerList />
    <v-snackbar :timeout="-1" :value="true" dark bottom outlined>
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar>
  </div>
</template>

<script>
import BeerList from '@/components/BeerList.vue'

export default {
  name: 'Home',
  components: {
    BeerList,
  },
  methods: {
    getBeers() {
      this.$store.dispatch('getBeerList')
    },
  },
  mounted() {
    this.getBeers()
  },
}
</script>
