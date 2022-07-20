<template>
  <v-container>
    <v-card
      flat
      tile
      width="80%"
      class="mx-auto justify-center text-center"
      color="#8a9a9f"
    >
      <v-card-title class="mx-auto text-h4 text--primary justify-center">
        <strong>AS Cinema</strong>
      </v-card-title>
    </v-card>
    <v-card
      border-variant="dark"
      class="mx-auto justify-center"
      width="80%"
      color="transparent"
    >
      <v-tabs
        v-model="selectedDate"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab v-for="(item, i) in dateSlots" :key="i">
          {{ formatDate(item) }}
        </v-tab>
        <v-tab-item v-for="(dateSlot, i) in dateSlots" :key="i">
          <!-- TODO: styling and set up language -->
          <v-chip-group active-class="yellow lighten-2 black--text" column>
            <v-container v-for="(th, i) in theaters" :key="i">
              <v-list-item six-line>
                <v-col cols="3">
                  <v-card-title class="mx-n2"> Theatre {{ th }} </v-card-title>
                  <v-card-text class="mx-n2">
                    <v-icon default color="blue-grey darken-4">
                      mdi-volume-high
                    </v-icon>
                    Eng
                  </v-card-text>
                </v-col>

                <v-divider vertical />

                <v-row no-gutters>
                  <v-col
                    cols="2"
                    class="pa-2 justify-center text-center"
                    outlined
                    tile
                    v-for="(t, i) in getTimeSlotByTheater(th, dateSlot)"
                    :key="i"
                  >
                    <v-chip @click="selectTimeSlot(th, t)">
                      {{ formatTime(t) }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-list-item>

              <v-divider
                v-if="i !== theaters.length - 1"
                class="mx-4 mt-2"
              ></v-divider>
            </v-container>
          </v-chip-group>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ShowTime",
  props: ["dateSlots", "timeSlots"],
  data() {
    return {
      selectedDate: null,
      theaters: new Set(),
    };
  },

  beforeUpdate() {
    for (let i = 0; i < this.timeSlots.length; i++) {
      this.theaters.add(this.timeSlots[i].theater_id);
    }
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
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
      let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
      let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
      return `${da} ${mo} ${ye}`;
    },
    checkDate(date1, date2) {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getYear() === date2.getYear()
      );
    },
    // TODO: Fix me
    getTimeSlotByTheater(theaterId, date) {
      let timeSlotForTheater = [];
      for (let i = 0; i < this.timeSlots.length; i++) {
        let timeSlotDate = this.timeSlots[i].time;
        if (
          this.timeSlots[i].theater_id === theaterId &&
          this.checkDate(timeSlotDate, date)
        ) {
          timeSlotForTheater.push(timeSlotDate);
        }
      }
      return timeSlotForTheater;
    },
    selectTimeSlot(id, time) {
      const timeSlot = { theaterID: id, time: time };
      this.$emit("selectTimeSlot", timeSlot);
    },
  },
};
</script>

<style scoped></style>
