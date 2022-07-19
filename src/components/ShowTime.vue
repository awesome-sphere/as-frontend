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
      <!-- TODO: styling and set up language -->
      <v-chip-group active-class="yellow lighten-2 black--text" column>
        <v-container v-for="(th, i) in theaters" :key="th.theater_id">
          <v-list-item six-line>
            <v-col cols="3">
              <v-card-title class="mx-n2">
                Theatre {{ th.theater_id }}
              </v-card-title>
              <v-card-text class="mx-n2">
                <v-icon default color="blue-grey darken-4">
                  mdi-volume-high
                </v-icon>
                Language
              </v-card-text>
            </v-col>

            <v-divider vertical />

            <v-row no-gutters>
              <v-col
                cols="2"
                class="pa-2 justify-center text-center"
                outlined
                tile
                v-for="t in th.time"
                :key="t"
              >
                <v-chip @click="selectTimeSlot(th.theater_id, t)">
                  {{ t }}
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
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ShowTime",
  data() {
    return {
      theaters: [],
    };
  },

  created() {
    this.getTimeSlot();
  },

  methods: {
    async getTimeSlot() {
      const slots = [
        ["10.00", "12.00", "14.00", "16.00", "18.00", "20.00"],
        ["09.00", "11.00", "13.00", "15.00"],
        ["10.30", "12.30", "14.30", "16.30", "18.30"],
        [
          "09.30",
          "11.30",
          "13.30",
          "15.30",
          "17.30",
          "19.30",
          "21.30",
          "23.30",
          "01.30",
        ],
        ["08.00", "10.00", "12.00", "14.00"],
      ];

      for (let i = 1; i <= 5; i++) {
        this.theaters.push({
          theater_id: i,
          time: slots[i - 1],
        });
      }
    },
    selectTimeSlot(id, time) {
      const timeSlot = { theater_id: id, time: time };
      this.$emit("selectTimeSlot", timeSlot);
    },
  },
};
</script>

<style scoped></style>
