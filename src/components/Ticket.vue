<template>

 <!-- TODO: adding text and fixing layout for details in the ticket-->
  <!-- <v-col align-self="center"> -->
        <!-- <p class="title-page">Something went wrong here...</p> -->
        <!-- <p class="sub-title-page"> -->
          <!-- Your payment has been successfully processed! The following is your ticket! -->
        <!-- </p> -->
  <!-- </v-col> -->

  <v-card
    class="mx-auto pa-5"
    max-width="450"
    color="#0f3742"
    outlined
    elevation="0"
  >  
    <!-- <v-card-title class="white--text mx-auto text-h4 justify-center"><strong>AS CINEMA</strong></v-card-title> -->
    <v-img
        width="30%"
        src="@/assets/logo.png"
        class="mx-auto pa-5"
        outlined
        elevation="0"
    ></v-img>

    <v-card
        class="mx-auto pa-5"
        max-width="420"
        outlined
        width="100%"
        elevation="0"
    >

    <v-col>
        <v-row
            align="center"
            justify="space-around"
        >
            <v-card-text >
                <div class="text--primary">
                    <v-row align="center" justify="center">
                        MOVIE
                    </v-row>
                </div>
            </v-card-text>
            
            <v-btn disabled class="mx-auto pa-5" elevation="0">
                <v-row align="center" justify="center">
                    *MOVIE NAME*
                </v-row>
            </v-btn>
        </v-row>
    </v-col>

    <v-divider class="mt-1 mb-3"></v-divider>

    <v-list-item three-line>
        <v-row no-gutters>
            <v-col cols="12" sm="4">
                <v-card-text class="mx-n2" align="center" justify="center">
                    SEAT
                </v-card-text>
            </v-col>
            
            <v-divider no-gutters vertical /><v-divider vertical />

            <v-col cols="12" sm="4">
                <v-card-text class="mx-n2" align="center" justify="center">
                    THEATER
                </v-card-text>
            </v-col>
            <v-divider no-gutters vertical /><v-divider vertical />

            <v-col cols="12" sm="4">
                <v-card-text class="mx-n2" align="center" justify="center">
                    SHOWTIME
                </v-card-text>
                <v-divider class="mt-1 mb-3"></v-divider>
                <v-card-text class="mx-n2" align="center" justify="center">
                    DATE
                </v-card-text>
            </v-col>

        </v-row>

          <!-- <v-row no-gutters>
            <v-col
              cols="2"
              class="pa-2 justify-center text-center"
              outlined
              tile
            >
              <v-card-text class="mx-n2">
                CINEMA/โรง
              </v-card-text>
            </v-col>
          </v-row> -->
    </v-list-item>
    
  </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Ticket",
}
</script>

<style scoped></style>