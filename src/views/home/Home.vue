<template>
  <v-app light>
    <v-toolbar class="blue darken-2">
      <v-toolbar-title class="mx-0 white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="blue -3 white--text"  @click="logoutFunction">Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax :src="imageLink.sub_main" height="400">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="blue--text mb-2 display-1 text-xs-center" style="font-weight: 900; : 3px 2px #101010">The Loyalty system for epic consumers</h1>
            <div class="blue--text subheading mb-3 text-xs-center" style="font-weight: 900; : 2px 2px #000000">Unlesh your wallet without limitations</div>
            <v-btn class="blue -2 mt-5 white--text" dark large href="/">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="600">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Premileal is a Loyalty costumers system that allows everyone to reach a huge amount of benefits</div>
            <em>With the power of Premileal you don't need to expense amount of cash in order to get free products and promotions!</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/">
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. Just imagine us like the guys from the Silicon Valley series. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are looking for you</div>
                </v-card-title>
                <v-card-text>
                  Are you a person? Do you like buy stuff? Come Sign up and start with Premileal!
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-xs-center">
            <div class="white--text ml-3">
              Join
              <v-icon class="green--text">Premileal</v-icon>
              and <a class="white--text" target="_blank"> begin the loyalty system</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>

    </v-content>
</v-app>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';

/* --- Services --- */
import userService  from '../../services/user/userService';

/* --- Types --- */
import User from '../../types/user/User';

@Component
export default class Logout extends Vue{

  allusers: any = null;
  user: User = this.$store.state.user.user;

  data(){
    return {
      title: "Premileal",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
      },
      email: "",
      subscribed: false
    };
  }

  logoutFunction(){
    fa.signOut().then(function() {
      console.log('Signout successful!')
      // Sign-out successful.
    }).catch(function(error) {
      console.log('Signout failed')
      // An error happened.
    });
  }

  mounted(){
    console.log("User Data in Home: ", this.user);  
  }

  /*async getAllUsers(){
    this.allusers = await userService.getAllUsers();
  }*/

}
</script>

<style src="./Home.css" scoped></style>