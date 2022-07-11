<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="5">
        <v-row class="justify-center mb-5">
          <v-col v-for="(seat_type, i) in seat_types" :key="i" cols="6">
            <v-row>
              <v-col align-self="center" cols="2">
                <v-icon :color="seat_type.color">{{ seat_type.icon }}</v-icon>
              </v-col>
              <v-col>
                <span class="ma-0">{{ seat_type.name }}</span>
                <p class="ma-0 sub-title">{{ seat_type.price }} Baht</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card elevation="0" min-height="50vh" class="pr-5">
          <v-img :src="require('../assets/screen.png')"></v-img>
          <v-row class="justify-center mt-1">
            <v-col
              class="pa-0"
              v-for="seat in normal_seats"
              v-bind:key="seat.id"
              cols="1"
            >
              <v-btn
                class="justify-center"
                plain
                icon
                :disabled="disableButton(seat.status)"
              >
                <v-icon :color="getSeatColor(seat.status, 0)">mdi-seat</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="justify-center mt-8">
            <v-col
              class="pa-0"
              v-for="seat in premium_seats"
              v-bind:key="seat.id"
              cols="1"
            >
              <v-btn
                class="justify-center"
                plain
                icon
                :disabled="disableButton(seat.status)"
              >
                <v-icon :color="getSeatColor(seat.status, 1)"
                  >mdi-sofa-single</v-icon
                >
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card
          color="rgba(15, 55, 66,0.2)"
          elevation="0"
          outlined
          class="pa-5"
          min-height="50vh"
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
      normal_seats: [],
      premium_seats: [],
      selected_seat: [],
      seat_types: [
        {
          icon: "mdi-seat",
          name: "Executive",
          color: "blue",
          price: 400,
        },
        {
          icon: "mdi-sofa-single",
          name: "First class",
          color: "red",
          price: 1000,
        },
      ],
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
      for (let i = 1; i <= 60; i++) {
        this.normal_seats.push({
          id: i,
          status: Math.floor(Math.random() * 11) > 6 ? "AVAILABLE" : "BOOKED",
        });
      }
      for (let i = 1; i <= 10; i++) {
        this.premium_seats.push({
          id: i,
          status: Math.floor(Math.random() * 11) > 6 ? "AVAILABLE" : "BOOKED",
        });
      }
      console.log(this.seats);
    },

    getSeatColor(status, seat_type) {
      if (status === "AVAILABLE") {
        return seat_type === 0 ? "blue" : "red";
      }
      return "";
    },

    disableButton(status) {
      return status !== "AVAILABLE";
    },
  },
};
</script>

<style scoped>
.sub-title {
  font-size: 12px;
  color: gray;
}
</style>
