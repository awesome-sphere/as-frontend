<template>
    <div class="div-content">
        <v-card
        flat
        tile
        width="100%"
        class="mx-auto justify-center text-center"
        color="#8a9a9f"
        >
            <v-card-title class="mx-auto text-h4 text--primary justify-center">
                <strong>AS Cinema</strong>
            </v-card-title>
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
                    <!-- <p class="font-weight-black" sizes="24">Theatre 1</p>  -->
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
          
            <v-col class="mx-auto" v-for="elt in theatre1" v-bind:key="elt.time"
            >

                <v-chip class="mx-3">{{elt.time}}</v-chip>

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

        <v-col class="mx-auto" v-for="elt in theatre2" v-bind:key="elt.time"
            >

                <v-chip class="mx-3">{{elt.time}}</v-chip>

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

        <v-col class="mx-auto" v-for="elt in theatre3" v-bind:key="elt.time"
            >

            <v-chip class="mx-3">{{elt.time}}</v-chip>

        </v-col>

        </v-list-item>

        <v-divider class="mx-4"></v-divider>

       <v-list-item>
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

        <v-col class="mx-auto" v-for="elt in theatre4" v-bind:key="elt.time"
            >

            <v-chip class="mx-3">{{elt.time}}</v-chip>

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

        <v-col class="mx-auto" v-for="elt in theatre5" v-bind:key="elt.time"
            >

            <v-chip class="mx-3">{{elt.time}}</v-chip>

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
  data() {
    return {
      theatre1: [],
      theatre2: [],
      theatre3: [],
      theatre4: [],
      theatre5: [],
    };
  },

  created() {
    this.getTimeSlot();
  },

  methods: {

    async getTimeSlot() {
      // mock data
      const theatre1_slot = ["10.00", "12.00", "14.00", "16.00", "18.00", "20.00"];
      const theatre2_slot = ["09.00", "11.00", "13.00", "15.00"];
      const theatre3_slot = ["10.30", "12.30", "14.30", "16.30", "18.30"];
      const theatre4_slot = ["09.30", "11.30", "13.30", "15.30", "17.30", "19.30", "21.30", "23.30", "01.30"];
      const theatre5_slot = ["08.00", "10.00", "12.00", "14.00"];

      for (const elt of theatre1_slot)  {
        this.theatre1.push({
            theatre_id: 1,
            time: elt 
        });
      }
      for (const elt of theatre2_slot)  {
        this.theatre2.push({
            theatre_id: 2,
            time: elt 
        });
      }
      for (const elt of theatre3_slot)  {
        this.theatre3.push({
            theatre_id: 3,
            time: elt 
        });
      }
      for (const elt of theatre4_slot)  {
        this.theatre4.push({
            theatre_id: 4,
            time: elt 
        });
      }
      for (const elt of theatre5_slot)  {
        this.theatre5.push({
            theatre_id: 5,
            time: elt 
        });
      }
      
    },

    async getRandomMov(theatre_id){
        let data_name = `theatre${theatre_id}`
        let random_data = data_name.at(0) 
        console.log(random_data)
        return (random_data.lang).then()
    }
  },
};
</script>

<style scoped></style>
