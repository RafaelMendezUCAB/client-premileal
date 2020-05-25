<template>
  <v-app light>
      <v-content>
        <div>
        <Navbar></Navbar>
        </div>
        <section>
          <div>
          <v-parallax src="@/assets/backgrounds/home_background.jpg"  class="parallaxHeight"> 
            <v-row align="center">
              <v-col md-6
                cols="12">
                <v-layout mx-8 column align-center justify-center >
                  <div class="  ">
                    <h1 class="welcomeTittle">
                      Join Premileal Rewards
                    </h1>
                  </div>
                  <div class="subheading text-xs-center">
                    <h2 class="WelcomeSubtittle"> 
                      Start Earn Points
                    </h2>
                  </div>
                  <v-btn class="button white--text" color="blue" rounded dark x-large href="/signup" v-if="!userLoggedIn">
                    Become a Member Now
                  </v-btn> 
                  <v-btn class="button white--text"  color="blue" rounded dark x-large @click="gotoBuyPoints" v-if="userLoggedIn">
                    Acquire points now!
                  </v-btn>                   
                </v-layout>
              </v-col>            
            </v-row>
          </v-parallax>  
          </div>
          <v-container fluid>
          <div class="py12" style="text-align:center">
            <v-card>
            <h1 class="premilealTitle">
              PREMILEAL
            </h1>
            </v-card>
            <v-layout row>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined class=" mx-1" height="100%">
                      <v-card-text>
                        <p class="miniCard1" >
                          Welcome to Premileal, an exclusive loyalty program. The journey of this rewarding program begins 
                          post purchase of Premileal points from the our webpage Premileal. It entitles you to a lifetime of premium 
                          privileges, benefits and services. Plus if you earn more points you can get better rewards!
                        </p>                      
                      </v-card-text>
                    </v-card>
              </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card  flat outlined dark color="blue darken-1" class="pt-4 mr-1" height="100%">
                      <v-card-text>
                        <h1 class=" miniCard2  ">JOIN OUR LOYALTY PROGRAM</h1>                  
                      </v-card-text>
                    </v-card>
                  </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1" height="100%">
                      <v-card-text>
                        <h1 class="miniCard2 thin white--text">GET EXCLUSIVE REWARDS</h1>                     
                      </v-card-text>
                    </v-card>
                  </v-flex>                  
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined class=" mr-1" height="100%">
                      <v-card-text>
                        <h3 class="miniCard1  pt-3" style="font-weight: 450;">
                          The objective of our platform is for you, our dear client, to be able to benefit from the purchase 
                          of points, special offers that you will receive only for being a member of our rewards program, and 
                          the possibility of exchanging the points that you have obtained for other products or money among other 
                          promotions that will arrive soon.
                        </h3>                      
                      </v-card-text>
                    </v-card>
              </v-flex>      
            </v-layout>      
          </div>
        </v-container>
        <v-container fluid>
          <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text" style="text-align:center">
            <h3 class="Title">About our Membership Plans</h3>
          </div>
          <div style="max-width: 80%; margin: auto;">
            <v-flex xs-center>
              <v-card flat class="mt-1 mb-2">
                <v-simple-table class=""  >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="  titleTable wrap blue--text" width= "30%" >Plan Level</th>
                        <th class=" titleTable wrap black--text" width=""  >Description</th>
                      </tr>            
                    </thead>
                    <tbody>
                      <tr>
                        <td class="subtitleTable" style="color: rgb(205, 127, 50);">
                          <v-icon left class=" iconTable font-weight-bold py-3 pt-1" style="color: rgb(205, 127, 50);">mdi-triangle</v-icon>
                          Basic
                        </td>
                        <td class="sizeDescriptionTable">
                          Once your Premileal account is created, you become a Basic level user for free, at this level you can 
                          buy the number of points you want, after registering a bank account on our platform.
                        </td>
                      </tr>
                      <tr>
                        <td class="subtitleTable grey--text text--darken-1">
                          <v-icon left class=" iconTable font-weight-bold grey--text text--darken-1 py-3">mdi-rhombus</v-icon>
                          Premium
                        </td>
                        <td class="sizeDescriptionTable">
                          When you purchase a lifetime Premium subscription to your account 
                          for the price of $25.00, you will be able to get 20% more points every time you want to buy a new 
                          amount of it.
                        </td>
                      </tr>               
                      <tr>
                        <td class="subtitleTable amber--text text--darken-2">
                          <v-icon left class=" iconTable font-weight-bold amber--text text--darken-2 py-4">mdi-octagram</v-icon>
                          Gold
                        </td>
                        <td class="sizeDescriptionTable">
                          The maximun membership level that an user can reach after the purchase of a lifetime Premiun 
                          account and being constantly participating on promotions and purchase of products. In addition, 
                          users who reach this level will receive 2500 points as a thank you gift.
                        </td>   
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>        
              </v-card>
                <div style="text-align:center">
                  <v-btn class="mt-5 white--text" column align-center color="blue" rounded  dark x-large @click="gotoSuscriptions">
                    Learn More
                  </v-btn>    
                </div>
            </v-flex>
          </div>
          <div>
            <center>
              <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text"><h3 class="Title">What are you waiting for?</h3></div>
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
  
  email = "";
  subscribed = false;
  
  allusers: any = null;
  user: User = this.$store.state.user.user;

  userLoggedIn = this.$store.state.user.loggedIn; 

  logout(){

    this.$store.dispatch('user/setSessionStatus', false);
    this.userLoggedIn = false;

    fa.signOut().then(function() {
      console.log('Signout successful!');
    }).catch(function(error) {
      console.log('Signout failed');
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

  gotoSuscriptions(){
    this.$router.push({ name: 'suscriptions'});
  }

  gotoBuyPoints(){
    this.$router.push({ name: 'pointsPurchase' });
  }

}
</script>

<style src="./Home.css" scoped></style>