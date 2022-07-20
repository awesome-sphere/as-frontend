<template>
  <v-card
    class="mx-auto pa-5"
    max-width="450"
    color="#0f3742"
    outlined
    elevation="0"
  >
    <v-img
      width="20%"
      src="@/assets/logo.png"
      class="mx-auto mb-5"
      outlined
      elevation="0"
    ></v-img>

    <v-card
      class="mx-auto pa-2 pb-5"
      max-width="420"
      outlined
      width="100%"
      elevation="0"
    >
      <v-col>
        <v-row align="center" justify="space-around">
          <v-card-text>
            <div class="text--primary">
              <v-row align="center" justify="center">
                <strong> MOVIE </strong>
              </v-row>
            </div>
          </v-card-text>
          <v-sheet
            class="mx-auto mb-2 text--secondary pa-2"
            height="40"
            width="340"
            color="grey lighten-3"
            align="center"
            justify="center"
            v-text="movieName"
          >
          </v-sheet>
        </v-row>
      </v-col>

      <v-list-item three-line>
        <v-row>
          <v-col cols="18" sm="6" align="center" justify="center">
            <v-card-text>
              <div class="text--primary">
                <v-row align="center" justify="center">
                  <strong> DATE </strong>
                </v-row>
              </div>
            </v-card-text>
            <v-sheet
              class="mx-auto mb-2 text--secondary pa-2"
              height="40"
              width="150"
              color="grey lighten-3"
              elevation="0"
            >
              {{ formatDate(timeSlot) }}
            </v-sheet>
            <v-card-text>
              <div class="text--primary">
                <v-row align="center" justify="center">
                  <strong> SHOWTIME </strong>
                </v-row>
              </div>
            </v-card-text>
            <v-sheet
              class="mx-auto text--secondary pa-2"
              height="40"
              width="150"
              color="grey lighten-3"
              elevation="0"
              v-text="formatTime(timeSlot)"
            >
            </v-sheet>
          </v-col>

          <v-col cols="18" sm="6" align="center" justify="center">
            <v-card-text>
              <div class="text--primary">
                <v-row align="center" justify="center">
                  <strong> THEATER {{ theater }} </strong>
                </v-row>
              </div>
            </v-card-text>
            <v-sheet
              class="mx-auto text--secondary pa-2"
              height="120"
              width="150"
              color="grey lighten-3"
              elevation="0"
            >
              <span v-for="(seat, i) in selectedSeat" :key="i">
                {{ seat }}
                <span v-if="i !== selectedSeat.length - 1">,</span>
              </span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-list-item>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Ticket",
  props: ["timeSlot", "movieName", "theater", "selectedSeat"],

  methods: {
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },
    formatTime(date) {
      return (
        this.padTo2Digits(date.getHours()) +
        ":" +
        this.padTo2Digits(date.getMinutes())
      );
    },
    formatDate(date) {
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
      return `${da} ${mo} ${ye}`;
    },
  },
};
</script>

<style scoped></style>
