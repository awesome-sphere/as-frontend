<template>
  <v-container>
    <div class="background-circle-left"></div>
    <div class="background-circle-right"></div>
    <v-row>
      <v-col cols="7" align-self="center" class="mx-auto">
        <div class="content">
          <div class="text-box">
            <h2 style="z-index: 4">
              It's not just a Movie
              <br />
              It's <span style="z-index: 4">AS Cinema</span>
            </h2>
            <p style="z-index: 4">
              Joining 40 years on the path of family entertainment business that
              intends to bring happiness to family and friends in Asia as a
              movie distributor, we have been in the cinema business for a very
              long time, hoping to bring change to this business by launching a
              new cinema brand in Thailand under the name
              <span class="cinema-name">AS Cinema</span>.
            </p>
          </div>
        </div>
        <v-btn
          style="z-index: 4"
          rounded
          elevation="0"
          color="#175769"
          dark
          to="/all-movies"
        >
          <v-icon class="mr-1">mdi-movie-filter</v-icon>
          See Movies
        </v-btn>
      </v-col>
      <v-col align-self="center">
        <carousel></carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Home",
  components: { Carousel },
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
};
</script>

<style src="../css/Home.css"></style>
