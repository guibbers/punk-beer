<template>
  <div class="beer-wrapper">
    <h1>{{ beer.name }}</h1>
    <div class="beer-content">
      <p>{{ beer.description }}</p>
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

.beer-wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 6px;
  padding: 20px;
  margin: 1px solid black;
}

.beer-content {
  display: flex;
  margin: auto;
  border: 1px solid red;
  height: 350px;
  width: 400px;
}

.beer {
  padding-left: 150px;
  height: 100%;
}
</style>
