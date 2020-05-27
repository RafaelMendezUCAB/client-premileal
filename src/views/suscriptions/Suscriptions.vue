<template>
    <v-app>
        <div>
          <Navbar></Navbar>
        </div>
        <v-content>          
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">Be part of our family now!</h1>                                                                      
                    </div>
                </v-col>
            </v-row>      
            <v-divider></v-divider>

            <v-row
              align="center"
              justify="center"
            >
              <v-col cols="11" sm="10" lg="8">
                <v-simple-table
                align="center"
                justify="center">
                  <template v-slot:default>
                    <thead>
                      <tr >
                        <th class="text-center">Benefits</th>
                        <th class="text-center">Basic<br/><span>free!</span></th>
                        <th class="text-center">Premium<br/><span>$25</span></th>
                        <th class="text-center">Gold</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-center">
                        <td class="benefitDescription">Birthdate bonus</td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                      </tr>
                      <tr class="text-center">
                        <td class="benefitDescription">20% more points <br/>for each payment.</td>
                        <td></td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                      </tr>
                      <tr class="text-center">
                        <td class="benefitDescription">2.500 extra points <br/>for each payment.</td>
                        <td></td>
                        <td></td>
                        <td><v-icon style="color: green;">mdi-check-circle</v-icon></td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>                        

            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="11" sm="5" lg="4">
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="@/assets/suscriptions/premium.png"
                      >
                        
                      </v-img>

                      <v-card-subtitle class="pb-0">Premium</v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Cost: $25</div>
                        <p>When you become premium, we make sure you won't regret about it. That's why we give you 20% more point each time you buy points. Start gaining more! become PREMIUM now!</p>
                      </v-card-text>                      

                      <v-card-actions>                        
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-btn
                              color="orange"
                              @click="acquireSuscription"
                            >
                              Acquire now!
                            </v-btn>
                        </v-row>
                        
                      </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="11" sm="5" lg="4">
                    <v-card
                      class="mx-auto"
                      max-width="400"
                    >
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        src="@/assets/suscriptions/Gold.png"
                      >
                        
                      </v-img>
                    
                      <v-card-subtitle class="pb-0">Gold</v-card-subtitle>
                    
                      <v-card-text class="text--primary">
                        <div>Cost: No cost</div>
                    
                        <p>You don't pay to become GOLD, you earn it. How? Well, by being already Premium and making an income of a total of $2500.00 for us. Premium users get 20% points for each points acquisition + 2500 points bonus!</p>
                      </v-card-text>
                    
                      <v-card-actions>
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-btn
                              color="orange"

                            >
                              I want it!
                            </v-btn>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script lang='ts'>
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class Suscriptions extends Vue{

    userData: any = null;
    userLoggedIn: any = null;

    mounted(){
      this.userData = this.getUserData;
      this.userLoggedIn = this.sessionStatus;
    }

    get getUserData() {
      return this.$store.getters["user/getUserData"];
    }

    get sessionStatus(){
      return this.$store.getters["user/getSessionStatus"];
    }

    acquireSuscription(){
      if(this.userLoggedIn){
        this.$router.push({ name: 'premiumSuscriptionPurchase' });
      }
      else {
        this.$router.push({ name: 'login' });
      }
    }

}
</script>

<style src="./Suscriptions.css" scoped>

</style>