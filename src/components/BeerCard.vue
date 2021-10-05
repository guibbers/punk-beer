<template>
  <div class="beer-wrapper">
    <div class="beer-content">
      <v-img :src="beer.image_url" />
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

<style></style>
