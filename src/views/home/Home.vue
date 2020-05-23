<template>
  <v-app light>
      <v-content>
        <div>
        <!-- <Navbar></Navbar> -->
        </div>
        <section>
          <div>
          <v-parallax :src="imageLink2.main" height="500"> 
            <v-row align="center">
              <v-col md-6
                cols="12">
                <v-layout mx-12 column align-center justify-center >
                  <div class="flex display-1 font-weight-medium pb-7 pt-8 grey--text text--lighten-3">
                    <h1>
                      Join Premileal Rewards
                    </h1>
                  </div>
                  <div class="subheading pr-12 pl-12 mx-12 text-xs-center grey--text text--lighten-3" style="font-weight: 450;">
                    <h2>
                      Start Earn Points
                    </h2>
                  </div>
                  <v-btn class="mt-5 white--text"  color="blue" rounded  dark x-large href="/signup">
                    Become a Member Now
                  </v-btn>                      
                </v-layout>
              </v-col>            
            </v-row>
          </v-parallax>  
          </div>
          <v-container fluid>
          <div class="py12" style="text-align:center">
            <v-card>
            <h1 class="font-weight-bold flex display-3 font-weight-medium pt-10 pb-4 blue--text">
              PREMILEAL
            </h1>
            </v-card>
            <v-layout row>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined class=" mx-1" height="100%">
                      <v-card-text>
                        <p class="body-1 black--text pt-3" style="font-weight: 450;">
                          Welcome to Premileal, an exclusive loyalty program. The journey of this rewarding program begins 
                          post purchase of Premileal points from the our webpage Premileal. It entitles you to a lifetime of premium 
                          privileges, benefits and services. Plus if you earn more points you can get better rewards!
                        </p>                      
                      </v-card-text>
                    </v-card>
              </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mr-1" height="100%">
                      <v-card-text>
                        <h1 class=" display-2 font-italicthin white--text pt-4">JOIN OUR LOYALTY PROGRAM</h1>                  
                      </v-card-text>
                    </v-card>
                  </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1" height="100%">
                      <v-card-text>
                        <h1 class="display-2 thin white--text pt-4">GET EXCLUSIVE REWARDS</h1>                     
                      </v-card-text>
                    </v-card>
                  </v-flex>                  
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined class=" mr-1" height="100%">
                      <v-card-text>
                        <p class="body-1 black--text pt-3" style="font-weight: 450;">
                          The objective of our platform is for you, our dear client, to be able to benefit from the purchase 
                          of points, special offers that you will receive only for being a member of our rewards program, and 
                          the possibility of exchanging the points that you have obtained for other products or money among other 
                          promotions that will arrive soon.
                        </p>                      
                      </v-card-text>
                    </v-card>
              </v-flex>      
            </v-layout>      
          </div>
        </v-container>
        <v-container fluid>
          <!-- <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text" style="text-align:center">
            <h3>About our Membership Plans</h3>
          </div> -->
          <div style="max-width: 60%; margin: auto;">
            <!-- <v-flex xs-center> -->
              <!-- <v-card flat class="mt-12 mb-2">
                <v-simple-table class=""  >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class=" display-2 text-center wrap font-weight-medium blue--text py-4" width= "30%" >Plan Level</th>
                        <th class="display-2 text-center wrap font-weight-medium black--text py-4"  >Description</th>
                      </tr>            
                    </thead>
                    <tbody>
                      <tr>
                        <td class="display-1 font-weight-bold text-start py-3" style="color: rgb(205, 127, 50);">
                          <v-icon left class="display-1 font-weight-bold py-3" style="color: rgb(205, 127, 50);">mdi-triangle</v-icon>
                          Basic
                        </td>
                        <td class="body-1 py-3 black--text">
                          Once your Premileal account is created, you become a Basic level user for free, at this level you can 
                          buy the number of points you want, after registering a bank account on our platform.
                        </td>
                      </tr>
                      <tr>
                        <td class="display-1 text-start font-weight-bold grey--text text--darken-1 py-3">
                          <v-icon left class="display-1 font-weight-bold grey--text text--darken-1 py-3">mdi-rhombus</v-icon>
                          Premium
                        </td>
                        <td class="body-1 py3 black--text">When you purchase a lifetime Premium subscription to your account 
                          for the price of $25.00, you will be able to get 20% more points every time you want to buy a new 
                          amount of it.
                        </td>
                      </tr>               
                      <tr>
                        <td class="display-1 text-start font-weight-bold amber--text text--darken-2 py-4">
                          <v-icon left class="display-1 font-weight-bold amber--text text--darken-2 py-4">mdi-octagram</v-icon>
                          Gold
                        </td>
                        <td class="body-1 py-3 black--text">The maximun membership level that an user can reach after the 
                          purchase of a lifetime Premiun account and being constantly participating on promotions and purchase 
                          of products.
                        </td>   
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>        
              </v-card>
                <div style="text-align:center">
                  <v-btn class="mt-5 white--text" column align-center color="blue" rounded  dark x-large href="/signup">
                    Learn More
                  </v-btn>    
                </div> -->
            <!-- </v-flex> -->
          </div>
          <div>
            <center>
              <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text"><h3>What are you waiting for?</h3></div>
              <div class="text-wrap">
                <v-layout row pb-8>
                  <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1" height="100%">
                      <div class="mx-2"> <v-icon large left> mdi-cart </v-icon></div>
                      <v-card-text>
                        <h1 class="white--text ml-n2">Purchase</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          Buy points and you will be closer to becoming a premium member!
                        </p>                      
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mr-1">
                      <div class="mx-2"> <v-icon large left> mdi-barcode-scan </v-icon></div>          
                      <v-card-text>
                        <h1 class="white--text ml-n2" >Redeem</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          Use coupons with your next purchases and get benefits in our products
                        </p>            
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1 mt-1">
                      <div class="mx-2"> <v-icon large left> mdi-chevron-triple-up </v-icon></div>          
                      <v-card-text>
                        <h1 class="white--text">Update</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          Become a Premiun Loyalty Member to get better prizes and earn more points
                        </p>          
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mr-1 mt-1">
                      <div class="mx-2"> <v-icon large left> mdi-wifi </v-icon></div>                    
                      <v-card-text>
                        <h1 class="white--text">Stay with us</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          Keep an eye on our website to discover new products, and promotions!
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>
            </center>
          </div>          
        </v-container>


        </section>
      </v-content>
    <Footer></Footer>
</v-app>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';
import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

/* --- Services --- */
import userService  from '../../services/user/userService';

/* --- Types --- */
import User from '../../types/user/User';

@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class Logout extends Vue{
  data() {
    return {
      imageLink2:{
          main:
          "https://source.unsplash.com/DuBNA1QMpPA",
      },
    };
  }
  
  email = "";
  subscribed = false;
  
  allusers: any = null;
  user: User = this.$store.state.user.user;

  userLoggedIn = this.$store.state.user.loggedIn; 

  logout(){

    this.$store.dispatch('user/setSessionStatus', false);
    this.userLoggedIn = false;

    fa.signOut().then(function() {
      console.log('Signout successful!')
    }).catch(function(error) {
      console.log('Signout failed')
    });
  }

  mounted(){
    //console.log("getter es: ", this.$store.state.user.sessionStatus);
  }
  profile(){
    this.$router.push({ name: 'profile'});
  }
  login(){
    this.$router.push({ name: 'login'});
  }

  /*async getAllUsers(){
    this.allusers = await userService.getAllUsers();
  }*/

}
</script>

<style src="./Home.css" scoped></style>