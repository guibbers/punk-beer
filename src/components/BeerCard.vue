<template>
  <div class="beer-wrapper">
    <h1>{{ beer.name }}</h1>
    <div class="beer-content">
      <p class="description">{{ beer.tagline }}</p>
      <img class="beer" :src="beer.image_url" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beer: Object,
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
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 6px;
  background-color: rgb(177, 171, 171);
  border-radius: 30px;
}

.beer-content {
  display: flex;
  margin: auto;
  height: 350px;
  width: 400px;
  padding: 40px;
}

.beer {
  padding-left: 100px;
  height: 100%;
}

.description {
  align-self: center;
  font-size: 1.4rem;
}
</style>
