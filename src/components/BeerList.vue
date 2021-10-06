<template>
  <div class="beer-list">
    <div class="d-flex flex-wrap">
      <BeerCard v-for="beer in beerList" :key="beer.id" :beer="beer" />
    </div>
  </div>
</template>

<script>
import BeerCard from '@/components/BeerCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    BeerCard,
  },
  computed: {
    ...mapState(['beerList']),
  },
}
</script>

<style></style>
