<template>
  <v-container class="my-5 mx-auto" max-width="300">
    <v-row>
      <v-col
        v-for="mov in movies"
        :key="mov.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-card @click="$router.push('/movie/' + mov.id)">
          <v-img
            :src="mov.poster"
            :aspect-ratio="12 / 16"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-actions>
            <v-card-title class="text-h6" justify="center">
              {{ mov.title }}
            </v-card-title>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-progress-circular
        v-show="movieLoading"
        :size="70"
        :width="7"
        color="teal"
        indeterminate
        class="my-16"
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    movieLoading: true,
    movies: [],
  }),

  created() {
    this.getAllMovies();
  },

  methods: {
    async getAllMovies() {
      this.movieLoading = true;
      let result = await Vue.axios.get("/movie/get-all-movies");
      this.movies = result.data.movies;
      this.movieLoading = false;
    },
  },
};
</script>

<style></style>
