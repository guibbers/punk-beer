<template>
  <div>
    <v-card color="rgb(201, 200, 200)" class="beer-wrapper">
      <v-card-title>{{ beer.name }}</v-card-title>
      <div class="beer-content">
        <v-card-text class="description">{{ beer.tagline }}</v-card-text>
        <img class="beer" :src="beer.image_url" />
      </div>
      <v-btn @click="favoriteBeer">
        {{ isFavorite ? 'Favorited' : 'Favorite This Beer' }}
        <v-icon color="red">{{
          isFavorite ? 'mdi-heart' : 'mdi-heart-outline'
        }}</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFavorite: false,
    }
  },
  props: {
    beer: Object,
  },
  methods: {
    favoriteBeer() {
      this.$store.dispatch('favoriteBeer', this.beer)
      this.isFavorite = !this.isFavorite
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  padding: 10px;
  font-size: 1.8rem;
}

.beer-wrapper {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 6px;
  background-color: rgb(201, 200, 200);
  padding: 10px;
}

.beer-content {
  display: flex;
  height: 350px;
  width: 400px;
  padding: 40px;
}

.beer {
  height: 100%;
  padding-left: 20px;
}

.description {
  align-self: center;
  font-size: 1.4rem;
}
</style>
