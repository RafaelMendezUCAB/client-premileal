<template>
  <v-card height="55">
    <v-app>
      <v-content>
        <v-toolbar dark color="blue">
          <v-card flat color="transparent" v-if="userLoggedIn">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-card>
          <router-link to="/home"> 
            <img class="mr-3" 
                 :src="require('@/assets/loyalty logo.png')" 
                 height="40"/>
          </router-link>
          <v-toolbar-title> 
            <router-link 
              to="/home" 
              class="white--text"  
              style="text-decoration: none;"
              align="center"
                justify="center"
            >
              PREMILEAL
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-card flat color="transparent" v-if="userLoggedIn">
                <!-- IF USER ARE ALREADY LOG IN -->            
            <v-btn class="black--text mr-2 font-weight-black buyPoints" flat color="amber" @click="gotoBuyPoints">Buy Points!</v-btn>
               <!-- IF USER ARE NOT ALREADY LOG IN -->
          </v-card>
          <v-card v-if="!userLoggedIn">
            <v-btn class="blue--text" color="white" @click="login" >Log In</v-btn>
          </v-card>
        </v-toolbar>
        
        <v-navigation-drawer  v-model="drawer" temporary absolute>
          <v-list nav dense rounded class="py-0">

            <v-list-item two-line>
                
              <v-list-item-avatar color="blue" size="60">
                  <!-- AQUI IRIA EL AVATAR DEL USUARIO -->
                <img src="@/assets/icons/profile/no-image.png" alt="AVATAR">
              </v-list-item-avatar>

              <v-list-item-content>
                  <!-- AQUI IRIA EL NOMBRE DEL USUARIO -->
                <v-list-item-title>Gabriel Tovar</v-list-item-title>
                <!-- AQUI IRIA EL NIVEL DE MEMBRESIA DEL USUARIO: BASIC, PREMIUM, GOLD -->
                <v-list-item-subtitle>PLAN LEVEL</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
            <v-divider></v-divider>
            
            <v-list-item-group
                    active-class="blue--text text--accent-4"
            >

              <v-list-item class="align-center" @click="gotoHome">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-home</v-icon>
                  </v-list-item-icon>            
                  <router-link to="/home" 
                       class="blue--text" 
                       style="text-decoration:none;">
                      <v-list-item-title class="blue--text">Home</v-list-item-title>
                  </router-link>
              </v-list-item>

              <v-list-item @click="gotoProfile">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-account</v-icon>
                  </v-list-item-icon>
                  <router-link to="/user/profile" 
                           class="blue--text" 
                          style="text-decoration:none;">
                      <v-list-item-title class="blue--text">
                          Profile
                      </v-list-item-title>
                  </router-link>
              </v-list-item>

              <v-list-item @click="gotoBankAccounts">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-bank</v-icon>
                  </v-list-item-icon>
                      <router-link 
                        to="/user/bankAccounts" 
                        class="blue--text" 
                        style="text-decoration:none;"
                      >
                      <v-list-item-title class="blue--text">Bank Accounts</v-list-item-title>
                      </router-link>
              </v-list-item>

              <v-list-item @click="gotoBuyPoints">
                  <v-list-item-icon>
                      <v-icon class="orange--text darken-4">mdi-currency-usd-circle-outline</v-icon>
                  </v-list-item-icon>
                  <router-link 
                    to="/points/purchase" 
                    class="orange--text darken-4" 
                    style="text-decoration:none;"
                  >
                  <v-list-item-title class="orange--text darken-4 body-1">Buy Points!</v-list-item-title>
                  </router-link>
              </v-list-item>

              <v-list-item class="align-center" @click="logout">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-logout-variant</v-icon>
                  </v-list-item-icon>            
                  <label
                       class="blue--text handMouse" 
                       style="text-decoration:none;">
                      <v-list-item-title class="blue--text">Log out</v-list-item-title>
                  </label>
              </v-list-item>

            </v-list-item-group>
         
          </v-list>
        </v-navigation-drawer>
      </v-content>
    </v-app>
  </v-card>
</template>

<script lang="ts">
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';
/* --- Services --- */
import userService  from '../../services/user/userService';

/* --- Types --- */
import User from '../../types/user/User';
@Component
export default class Navbar extends Vue {
  email = "";
  drawer = false;
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
    this.$router.push({ name: 'login'});
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

  home(){
    this.$router.push({ name: 'home'});
  }

  gotoHome(){
    this.$router.push({ name: 'home' });
  }

  gotoProfile(){
    this.$router.push({ name: 'userProfile' });
  }

  gotoBankAccounts(){
    this.$router.push({ name: 'userBankAccounts' });
  }

  gotoBuyPoints(){
    this.$router.push({ name: 'pointsPurchase' });
  }

}

</script>

<style src="./Navbar.css" scoped></style>