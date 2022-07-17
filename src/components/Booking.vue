<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="7">
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
          <v-img :src="require('../assets/screen.png')" alt="screen">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="rgb(15,55,66)"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
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
      <v-col cols="3">
        <v-card
          color="rgba(23, 87, 105,0.15)"
          elevation="0"
          outlined
          class="pa-5"
        >
          <h3>Booking Information</h3>
          <v-divider class="mt-1 mb-3"></v-divider>
          <v-card class="mx-auto mb-5" max-width="250" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-1">Profile</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ username }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="65">
                <v-avatar color="red" size="65">
                  <span class="white--text text-h5">{{
                    username[0].toUpperCase()
                  }}</span>
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
          <div>
            <span style="font-weight: bold" class="mr-1">Movie:</span>
            <v-chip color="rgba(11, 181, 147,0.7)" class="ma-2">
              {{ movie_name || "N/A" }}
            </v-chip>
          </div>
          <div class="mb-3">
            <span style="font-weight: bold" class="mr-1">Time slot:</span>
            <v-chip color="rgba(11, 181, 147,0.7)" class="ma-2">
              {{ time_slot || "N/A" }}
            </v-chip>
          </div>
          <v-card class="mx-auto" max-width="170" elevation="0">
            <v-card-title class="pt-2 pb-0">
              <span style="font-size: 14px" class="mx-auto">Selected Seat</span>
            </v-card-title>
            <v-card-text
              class="mx-auto text-center"
              v-if="selected_seat.length !== 0"
            >
              <span v-for="(seat, i) in selected_seat" :key="i"
                >{{ seat }},</span
              >
            </v-card-text>
            <v-card-text class="mx-auto text-center" v-else>
              <span>-</span>
            </v-card-text>
            <v-card-text class="pt-0 text-center">
              <p class="font-weight-bold">Price</p>
              <v-chip dark color="#0f3742">
                <v-icon class="mr-1">mdi-currency-btc</v-icon>
                <span class="price-text">{{ price }} Baht</span>
              </v-chip>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store";

export default {
  name: "Booking",
  props: ["time_slot", "movie_name"],
  data() {
    return {
      username: "",
      email: "",
      price: 0,
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
    this.username = store.state.username || "Guest";
    this.email = store.state.email || "Please login";
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

.price-text {
  font-size: 16px;
}
</style>
