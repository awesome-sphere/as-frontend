<template>
  <v-carousel
    cycle
    height="600px"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item v-for="(n, i) in movie" :key="i" style="width: 460px">
      <div class="number-label">
        <span>{{ i + 1 }}</span>
      </div>
      <v-img
        style="border-radius: 10%"
        class="mx-auto mb-5"
        max-width="300"
        :src="n.image_src"
      ></v-img>
      <v-card class="mx-auto pb-4" max-width="400" elevation="1">
        <v-card-title>
          <v-row>
            <v-col cols="1">
              <v-icon color="#0f3742" class="mt-5 mr-2"
                >mdi-movie-open</v-icon
              >
            </v-col>
            <v-col>
              <v-list-item two-line>
                <v-list-item-content class="pa-0">
                  <v-list-item-title class="text-h5">
                    {{ n.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{
                    n.sub_title
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      movie: [
        {
          image_src: require("../assets/doctor-strange.jpeg"),
          name: "Docker strange",
          sub_title: "Mon, 13:30 PM on Theater 1",
        },
        {
          image_src: require("../assets/avenger-endgame.jpeg"),
          name: "Avenger Endgame",
          sub_title: "Tues, 04:00 PM on Theater 5",
        },
        {
          image_src: require("../assets/spiderman-no-way-home.jpeg"),
          name: "Spider-man: No Way Home",
          sub_title: "Friday, 03:00 PM on Theater 2",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
