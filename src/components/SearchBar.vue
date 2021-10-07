<template>
  <v-form @submit.prevent="searchBeer">
    <v-row>
      <v-col lg="4"></v-col>
      <v-col lg="4">
        <v-text-field
          v-model="query"
          label="Search Beer"
          class="text-field"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
      <v-col lg="4"></v-col>
    </v-row>
    <v-row>
      <v-col lg="4" class="d-flex justify-center"></v-col>
      <v-col lg="4" class="d-flex justify-center">
        <BaseButton type="submit">Search</BaseButton>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  data() {
    return {
      query: '',
    }
  },
  components: {
    BaseButton,
  },
  methods: {
    searchBeer() {
      this.$store.dispatch('getBeerList', this.query)
    },
  },
}
</script>

<style></style>
