<template>
  <div class="home">
    <BeerList />
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
