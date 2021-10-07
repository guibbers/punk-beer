<template>
  <div class="home">
    <SearchBar />
    <BeerList />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList.vue'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Home',
  components: {
    BeerList,
    SearchBar,
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
