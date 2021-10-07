<template>
  <div class="beer-list">
    <div class="d-flex flex-wrap">
      <BeerCard v-for="beer in favoriteBeers" :key="beer.id" :beer="beer" />
    </div>
  </div>
</template>

<script>
import BeerCard from '@/components/BeerCard'
import { mapState } from 'vuex'

export default {
  components: {
    BeerCard,
  },
  computed: {
    ...mapState(['favoriteBeers']),
  },
}
</script>
