<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <v-card elevation="0" outlined min-height="700" class="pa-10">
          <v-img :src="require('../assets/screen.png')" max-width="400"></v-img>
          <v-row class="justify-center">
            <v-col v-for="seat in seats" v-bind:key="seat.id" cols="1">
              <v-btn plain icon :disabled="disableButton(seat.status)">
                <v-icon :color="getSeatColor(seat.status)"
                  >mdi-sofa-single</v-icon
                >
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          color="rgba(15, 55, 66,0.2)"
          elevation="0"
          outlined
          class="pa-5"
          min-height="700"
        >
          <h3>Booking Information</h3>
          <v-divider></v-divider>
          <v-card
            class="mx-auto mb-5"
            max-width="300"
            max-height="250"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Profile</div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Vue from "vue";
export default {
  name: "Booking",
  data() {
    return {
      seats: [],
    };
  },

  created() {
    this.getAllSeats();
  },

  methods: {
    async getAllSeats() {
      // let result = await Vue.axios.post("/seating/get-all-seats", {
      //   theater_id: 2,
      //   time_slot_id: 2,
      // });
      // this.seats = result.data.seats_info;
      // Mock for now
      for (let i = 1; i <= 100; i++) {
        this.seats.push({
          id: i,
          status: Math.floor(Math.random() * 11) > 6 ? "AVAILABLE" : "BOOKED",
        });
      }
      console.log(this.seats);
    },

    getSeatColor(status) {
      if (status === "AVAILABLE") {
        return "blue";
      }
      return "";
    },

    disableButton(status) {
      return status !== "AVAILABLE";
    },
  },
};
</script>

<style scoped></style>
