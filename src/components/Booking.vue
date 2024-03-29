<template>
  <v-container>
    <v-row v-if="loadingSubmit" align="center" justify="center">
      <v-col align-self="center">
        <v-row v-if="loadingSubmit" align="center" justify="center">
          <v-progress-circular
            color="#8a9a9f"
            indeterminate
            class="my-16 mx-auto"
          ></v-progress-circular>
        </v-row>
        <p class="text-center font-weight-bold">
          We are submitting your order. Please stand by...
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center" v-if="!loadingSubmit">
      <v-col cols="7">
        <v-row class="justify-center mb-5">
          <v-col v-for="(seatType, i) in seatTypes" :key="i" cols="6">
            <v-row>
              <v-col align-self="center" cols="2">
                <v-icon :color="seatType.color">{{ seatType.icon }}</v-icon>
              </v-col>
              <v-col>
                <span class="ma-0">{{ seatType.name }}</span>
                <p class="ma-0 sub-title">{{ seatType.price }} Baht</p>
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
          <v-row v-if="loading" align="center" justify="center">
            <v-progress-circular
              color="#8a9a9f"
              indeterminate
              class="my-16"
            ></v-progress-circular>
          </v-row>
          <v-row
            v-if="
              !loading && normalSeats.length === 0 && premiumSeats.length === 0
            "
            align="center"
            justify="center"
          >
            <p class="mt-10 font-weight-bold">No seat for this time slot</p>
          </v-row>
          <v-row
            v-if="!loading && normalSeats.length !== 0"
            class="justify-center mt-1"
          >
            <v-col
              class="pa-0"
              v-for="seat in normalSeats"
              v-bind:key="seat.id"
              cols="1"
            >
              <v-btn
                class="justify-center"
                plain
                icon
                style="z-index: 4"
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
          <v-row
            v-if="!loading && premiumSeats.length !== 0"
            class="justify-center mt-8"
          >
            <v-col
              class="pa-0"
              v-for="seat in premiumSeats"
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
      <v-col cols="4">
        <v-card
          color="rgba(23, 87, 105,0.15)"
          elevation="0"
          max-width="325"
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
              {{ movieName || "N/A" }}
            </v-chip>
          </div>
          <div class="mb-3">
            <span style="font-weight: bold" class="mr-1"
              >Theater {{ theater || "N/A" }}:</span
            >
            <v-chip color="rgba(11, 181, 147,0.7)" class="ma-2">
              {{ formatDate(timeSlot) || "N/A" }}
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
              v-if="selectedNormalSeat.length !== 0"
            >
              <span v-for="(seat, i) in selectedNormalSeat" :key="i"
                >{{ seat
                }}<span v-if="i !== selectedNormalSeat.length - 1"
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
              v-if="selectedPremiumSeat.length !== 0"
            >
              <span v-for="(seat, i) in selectedPremiumSeat" :key="i"
                >{{ seat
                }}<span v-if="i !== selectedPremiumSeat.length - 1"
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
              style="z-index: 4"
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
import Vue from "vue";

export default {
  name: "Booking",
  props: ["timeSlot", "timeSlotId", "movieName", "theater"],

  data() {
    return {
      username: "",
      email: "",
      price: 0,
      oldTimeSlotId: 0,
      oldTheaterId: 0,
      loading: false,
      loadingSubmit: false,
      normalSeats: [],
      premiumSeats: [],
      selectedNormalSeat: [],
      selectedPremiumSeat: [],
      seatTypes: [
        {
          icon: "mdi-seat",
          name: "Executive",
          color: "blue",
          price: 200,
        },
        {
          icon: "mdi-sofa-single",
          name: "First class",
          color: "red",
          price: 450,
        },
      ],
    };
  },

  updated() {
    if (
      this.oldTheaterId !== this.theater &&
      this.oldTimeSlotId !== this.timeSlotId
    ) {
      this.getAllSeats();
    }
    this.oldTimeSlotId = this.theater;
    this.oldTimeSlotId = this.timeSlotId;
  },

  created() {
    this.username = store.state.username || "Guest";
    this.email = store.state.email || "Please login";
  },

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
      if (date === null) {
        return null;
      }
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
      return `${da} ${mo} ${ye}, ${this.formatTime(date)}`;
    },
    isSelectedSeat(seatID, seatListType) {
      let seatLists =
        seatListType === "normal"
          ? this.selectedNormalSeat
          : this.selectedPremiumSeat;
      return seatLists.includes(seatID);
    },
    calculatePrice() {
      let normalSeatPrice = this.seatTypes.find(
        (seatType) => seatType.name === "Executive"
      ).price;
      let premiumSeatPrice = this.seatTypes.find(
        (seatType) => seatType.name === "First class"
      ).price;
      this.price =
        this.selectedNormalSeat.length * normalSeatPrice +
        this.selectedPremiumSeat.length * premiumSeatPrice;
    },
    onChangeSelectedNormalSeat(seatID) {
      if (this.isSelectedSeat(seatID, "normal")) {
        this.selectedNormalSeat = this.selectedNormalSeat.filter(
          (selectedSeatID) => selectedSeatID !== seatID
        );
      } else {
        this.selectedNormalSeat.push(seatID);
      }
      this.calculatePrice();
    },
    onChangeSelectedPremiumSeat(seatID) {
      if (this.isSelectedSeat(seatID, "premium")) {
        this.selectedPremiumSeat = this.selectedPremiumSeat.filter(
          (selectedSeatID) => selectedSeatID !== seatID
        );
      } else {
        this.selectedPremiumSeat.push(seatID);
      }
      this.calculatePrice();
    },
    updateSeatOutput(seat, is_error, error_message) {
      this.$emit("submitSelectedSeat", {
        selected_seat: seat,
        is_error: is_error,
        error_message: error_message,
      });
    },
    async submitSelectedSeat() {
      if (store.state.webToken === "") {
        this.updateSeatOutput([], true, "Please login before making order");
      } else {
        this.loadingSubmit = true;
        let config = {
          headers: {
            Authorization: store.state.webToken,
          },
        };
        let result = await Vue.axios
          .post(
            "/booking/book-seat",
            {
              theater_id: this.theater,
              seat_id: this.selectedNormalSeat.concat(this.selectedPremiumSeat),
              time_slot_id: this.timeSlotId,
            },
            config
          )
          .catch((error) => {
            this.updateSeatOutput([], true, error.response);
            this.loadingSubmit = false;
          });
        let messageFromBackend = result.data.message || result.data.error;
        if (messageFromBackend !== undefined) {
          this.updateSeatOutput([], true, messageFromBackend);
        } else {
          this.updateSeatOutput(
            this.selectedNormalSeat.concat(this.selectedPremiumSeat),
            false,
            messageFromBackend
          );
        }
      }
    },
    async getAllSeats() {
      this.loading = true;
      let result = await Vue.axios.post("/seating/get-all-seats", {
        theater_id: this.theater,
        time_slot_id: this.timeSlotId,
      });
      this.normalSeats = [];
      this.premiumSeats = [];
      let rawSeats = result.data.seats_info;
      for (let i = 0; i < rawSeats.length; i++) {
        if (rawSeats[i].seat_id <= 40) {
          this.normalSeats.push({
            id: rawSeats[i].seat_id,
            status: rawSeats[i].status,
          });
        } else {
          this.premiumSeats.push({
            id: rawSeats[i].seat_id,
            status: rawSeats[i].status,
          });
        }
      }
      this.loading = false;
    },

    getSeatColor(status, seatType) {
      if (status === "AVAILABLE") {
        return seatType === 0 ? "blue" : "red";
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
