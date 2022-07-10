<template>
  <v-container class="my-5 mx-auto" max-width="300">
    <v-card class="mx-auto" outlined max-width="800">
      <div class="d-flex flex-no-wrap">
        <v-img
          :src="movie.poster"
          :aspect-ratio="12 / 16"
          max-width="200"
          class="grey lighten-2"
        ></v-img>
        <div>
          <v-card-title v-text="movie.title"></v-card-title>
          <v-card-subtitle>{{ movie.duration }} m</v-card-subtitle>
          <v-card-subtitle v-text="movie.description"></v-card-subtitle>
          <v-spacer></v-spacer>
        </div>
      </div>
      <v-card-actions class="pa-0">
        <v-btn
          absolute
          bottom
          right
          text
          color="#0f3742"
          :to="{ name: 'Movie', params: { id: $route.params.id } }"
          >Book Movie</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-10" outlined max-width="500">
      <v-card-title>Trailer</v-card-title>
      <video
        :src="movie.trailer"
        width="100%"
        class="mx-auto grey lighten-2"
        controls
      ></video>
    </v-card>

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
    movie: null,
  }),

  created() {
    this.getMovieDetail();
  },

  methods: {
    async getMovieDetail() {
      this.movieLoading = true;
      let result = await Vue.axios.get(
        "/movie/get-movie/" + this.$route.params.id
      );
      this.movie = result.data.movie;
      this.movieLoading = false;
    },
  },
};
</script>

<style></style>
