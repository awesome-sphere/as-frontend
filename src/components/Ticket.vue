<template>

 <!-- TODO: adding text and fixing layout for details in the ticket-->

  <v-card
    class="mx-auto pa-5"
    max-width="450"
    color="#0f3742"
    outlined
    elevation="0"
  >  

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
                    <v-row align="center" justify="center"><strong>
                        MOVIE
                    </strong></v-row>
                </div>
            </v-card-text>

            <v-sheet
                    class="mx-auto text--secondary pa-2"
                    height="40"
                    width="300"
                    color="grey lighten-3"
                    align="center" justify="center"
            >
                Thor: Love and Thunder
            </v-sheet>
        </v-row>
    </v-col>

    <v-divider class="mt-1 mb-3"></v-divider>

    <v-list-item three-line>
        <v-row no-gutters>

            <v-col cols="12" sm="4" align="center" justify="center">
                <v-card-text >
                <div class="text--primary">
                    <v-row align="center" justify="center"><strong>
                        DATE
                    </strong></v-row>
                </div>
                </v-card-text>

                <v-sheet
                    class="mx-auto text--secondary pa-2"
                    height="40"
                    width="100"
                    color="grey lighten-3"
                    elevation="0"
                >
                    19/07/22
                </v-sheet>
                <v-divider class="mt-1 mb-3"></v-divider>
                <v-card-text >
                    <div class="text--primary">
                        <v-row align="center" justify="center"><strong>
                            SHOWTIME
                        </strong></v-row>
                    </div>
                </v-card-text>
                <v-sheet
                    class="mx-auto text--secondary pa-2"
                    height="40"
                    width="100"
                    color="grey lighten-3"
                    elevation="0"
                >
                    13:00
                </v-sheet>

            </v-col>

            <v-divider no-gutters vertical /><v-divider vertical />

            <v-col cols="12" sm="4" align="center" justify="center">
                <v-card-text >
                    <div class="text--primary">
                        <v-row align="center" justify="center"><strong>
                            SEAT
                        </strong></v-row>
                    </div>
                </v-card-text>
                <v-sheet
                    class="mx-auto text--secondary pa-2"
                    height="90"
                    width="100"
                    color="grey lighten-3"
                    elevation="0"
                    
                >
                    A16
                </v-sheet>

            </v-col>
            
            <v-divider no-gutters vertical /><v-divider vertical />

            <v-col cols="12" sm="4" align="center" justify="center">
                <v-card-text >
                    <div class="text--primary">
                        <v-row align="center" justify="center"><strong>
                            THEATER
                        </strong></v-row>
                    </div>
                </v-card-text>
                <v-sheet
                    class="mx-auto text--secondary pa-2"
                    height="90"
                    width="100"
                    color="grey lighten-3"
                    elevation="0"
                >
                    3
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
}
</script>

<style scoped></style>