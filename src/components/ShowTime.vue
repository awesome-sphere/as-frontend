<template>
    <div class="div-content">
        <v-card
        flat
        tile
        width="100%"
        class="mx-auto justify-center text-center"
        color="#8a9a9f"
        >
            <v-card-text class="black--text">
                <strong>AS Cinema</strong>
            </v-card-text>
        </v-card>
        <v-card border-variant="dark" class="mx-auto justify-center" width="100%" color="transparent">
        <v-chip-group
            v-model="selection"
            active-class="yellow lighten-2 black--text"
            column
        >
        <v-list-item six-line>
            <v-col
            md="4">
                <v-card-title>
                Theatre 1   
                </v-card-title>
                <v-card-text>
                    <v-icon
                    default
                    color="blue-grey darken-4"
                    >
                        mdi-volume-high
                    </v-icon>
                    Language
                </v-card-text>
            </v-col>

            <v-divider vertical/><v-divider vertical/>
          
            
            <v-col 
            >
                <v-row class="mx-auto"
                >
                    <v-chip class="mx-5">10:30 AM</v-chip>

                    <v-chip class="mx-3">1:00 PM</v-chip>

                    <v-chip class="mx-3">3:30 PM</v-chip>

                    <v-chip class="mx-3">6:00 PM</v-chip>

                    <v-chip class="mx-3">8:30 PM</v-chip>
                </v-row>
            </v-col>
        </v-list-item>
   
        <v-divider class="mx-4"></v-divider>

        

        <v-list-item three-line>
            <v-col
            md="4">
                <v-card-title>
                Theatre 2   
                </v-card-title>
                <v-card-text>
                    <v-icon
                    default
                    color="blue-grey darken-4"
                    >
                        mdi-volume-high
                    </v-icon>
                    Language
                </v-card-text>
            </v-col>
        <v-divider no-gutters vertical/><v-divider vertical/>

        <v-col 
        >
            <v-row class="mx-auto"
                >
                    <v-chip class="mx-5">10:30 AM</v-chip>

                    <v-chip class="mx-3">1:00 PM</v-chip>

                    <v-chip class="mx-3">3:30 PM</v-chip>

                    <v-chip class="mx-3">6:00 PM</v-chip>

                    <v-chip class="mx-3">8:30 PM</v-chip>
            </v-row>
        </v-col>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>

        <v-list-item three-line>
            <v-col
            md="4">
                <v-card-title>
                Theatre 3   
                </v-card-title>
                <v-card-text>
                    <v-icon
                    default
                    color="blue-grey darken-4"
                    >
                        mdi-volume-high
                    </v-icon>
                    Language
                </v-card-text>
            </v-col>
        <v-divider no-gutters vertical/><v-divider vertical/>

        <v-col 
        >
            <v-row class="mx-auto"
                >
                    <v-chip class="mx-5">10:30 AM</v-chip>

                    <v-chip class="mx-3">1:00 PM</v-chip>

                    <v-chip class="mx-3">3:30 PM</v-chip>

                    <v-chip class="mx-3">6:00 PM</v-chip>

                    <v-chip class="mx-3">8:30 PM</v-chip>
            </v-row>
        </v-col>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>

       <v-list-item three-line>
            <v-col
            md="4">
                <v-card-title>
                Theatre 4   
                </v-card-title>
                <v-card-text>
                    <v-icon
                    default
                    color="blue-grey darken-4"
                    >
                        mdi-volume-high
                    </v-icon>
                    Language
                </v-card-text>
            </v-col>
        <v-divider no-gutters vertical/><v-divider vertical/>

        <v-col 
        >
            <v-row class="mx-auto"
                >
                    <v-chip class="mx-5">10:30 AM</v-chip>

                    <v-chip class="mx-3">1:00 PM</v-chip>

                    <v-chip class="mx-3">3:30 PM</v-chip>

                    <v-chip class="mx-3">6:00 PM</v-chip>

                    <v-chip class="mx-3">8:30 PM</v-chip>
            </v-row>
        </v-col>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>
   

        <v-list-item three-line>
            <v-col
            md="4">
                <v-card-title>
                Theatre 5   
                </v-card-title>
                <v-card-text>
                    <v-icon
                    default
                    color="blue-grey darken-4"
                    >
                        mdi-volume-high
                    </v-icon>
                    Language
                </v-card-text>
            </v-col>
        <v-divider no-gutters vertical/><v-divider vertical/>

        <v-col 
        >
            <v-row class="mx-auto"
                >
                    <v-chip class="mx-5">10:30 AM</v-chip>

                    <v-chip class="mx-3">1:00 PM</v-chip>

                    <v-chip class="mx-3">3:30 PM</v-chip>

                    <v-chip class="mx-3">6:00 PM</v-chip>

                    <v-chip class="mx-3">8:30 PM</v-chip>
            </v-row>
        </v-col>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>
        </v-chip-group>

    </v-card>
    </div>
</template>

<script>
export default {
  name: "ShowTime",
};
</script>

<style scoped></style>
