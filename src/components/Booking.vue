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
                <v-icon
                  v-if="!isSelectedSeat(seat.id, 'normal')"
                  :color="getSeatColor(seat.status, 0)"
                  @click="onChangeSelectedNormalSeat(seat.id)"
                  >mdi-seat</v-icon
                >
                <v-icon
                  v-else
                  @click="onChangeSelectedNormalSeat(seat.id)"
                  color="green"
                  >mdi-check-circle</v-icon
                >
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
                <v-icon
                  v-if="!isSelectedSeat(seat.id, 'premium')"
                  @click="onChangeSelectedPremiumSeat(seat.id)"
                  :color="getSeatColor(seat.status, 1)"
                  >mdi-sofa-single</v-icon
                >
                <v-icon
                  v-else
                  @click="onChangeSelectedPremiumSeat(seat.id)"
                  color="green"
                  >mdi-check-circle</v-icon
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
              Theater {{ theater }} - {{ time_slot || "N/A" }}
            </v-chip>
          </div>
          <v-card class="mx-auto" max-width="170" elevation="0">
            <v-card-title class="pt-2 pb-0">
              <span style="font-size: 14px" class="mx-auto">Selected Seat</span>
            </v-card-title>
            <v-card-text class="mx-auto text-center pb-0">
              <span>Executive</span>
            </v-card-text>
            <v-card-text
              class="mx-auto text-center pt-1 pb-3"
              v-if="selected_normal_seat.length !== 0"
            >
              <span v-for="(seat, i) in selected_normal_seat" :key="i"
                >{{ seat
                }}<span v-if="i !== selected_normal_seat.length - 1"
                  >,</span
                ></span
              >
            </v-card-text>
            <v-card-text class="mx-auto text-center pt-0 pb-2" v-else>
              <span>-</span>
            </v-card-text>
            <v-card-text class="mx-auto text-center pt-0 pb-1">
              <span>First Class</span>
            </v-card-text>
            <v-card-text
              class="mx-auto text-center pt-1 pb-3"
              v-if="selected_premium_seat.length !== 0"
            >
              <span v-for="(seat, i) in selected_premium_seat" :key="i"
                >{{ seat
                }}<span v-if="i !== selected_premium_seat.length - 1"
                  >,</span
                ></span
              >
            </v-card-text>
            <v-card-text class="mx-auto text-center pt-0 pb-2" v-else>
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
          <v-card-actions class="mt-2">
            <v-btn
              color="#FFD54F"
              class="ml-auto"
              rounded
              elevation="0"
              @click="submitSelectedSeat"
              >Confirm</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store";

export default {
  name: "Booking",
  props: ["time_slot", "movie_name", "theater"],
  data() {
    return {
      username: "",
      email: "",
      price: 0,
      normal_seats: [],
      premium_seats: [],
      selected_normal_seat: [],
      selected_premium_seat: [],
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
    isSelectedSeat(seat_id, seat_list_type) {
      let seat_lists =
        seat_list_type === "normal"
          ? this.selected_normal_seat
          : this.selected_premium_seat;
      return seat_lists.includes(seat_id);
    },
    calculatePrice() {
      let normal_seat_price = this.seat_types.find(
        (seat_type) => seat_type.name === "Executive"
      ).price;
      let premium_seat_price = this.seat_types.find(
        (seat_type) => seat_type.name === "First class"
      ).price;
      this.price =
        this.selected_normal_seat.length * normal_seat_price +
        this.selected_premium_seat.length * premium_seat_price;
    },
    onChangeSelectedNormalSeat(seat_id) {
      if (this.isSelectedSeat(seat_id, "normal")) {
        this.selected_normal_seat = this.selected_normal_seat.filter(
          (selected_seat_id) => selected_seat_id !== seat_id
        );
      } else {
        this.selected_normal_seat.push(seat_id);
      }
      this.calculatePrice();
    },
    onChangeSelectedPremiumSeat(seat_id) {
      if (this.isSelectedSeat(seat_id, "premium")) {
        this.selected_premium_seat = this.selected_premium_seat.filter(
          (selected_seat_id) => selected_seat_id !== seat_id
        );
      } else {
        this.selected_premium_seat.push(seat_id);
      }
      this.calculatePrice();
    },
    submitSelectedSeat() {
      this.$emit(
        "submitSelectedSeat",
        this.selected_normal_seat.concat(this.selected_premium_seat)
      );
    },
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
      for (let i = 65; i <= 75; i++) {
        this.premium_seats.push({
          id: i,
          status: Math.floor(Math.random() * 11) > 6 ? "AVAILABLE" : "BOOKED",
        });
      }
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
