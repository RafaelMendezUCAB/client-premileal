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
          <v-card color="transparent" v-if="userLoggedIn">
            <v-btn class="black--text mr-2 font-weight-black buyPoints" color="amber" @click="gotoBuyPoints">{{texts.buyPointsLabel}}</v-btn>
          </v-card>
          <v-card v-if="!userLoggedIn">
            <v-btn class="blue--text" color="white" @click="login" >{{texts.navBarLoginLabel}}</v-btn>
          </v-card>
        </v-toolbar>
        
        <v-navigation-drawer  v-model="drawer" temporary absolute>
          <v-list nav dense rounded class="py-0">

            <v-list-item two-line>
                
              <v-list-item-avatar color="blue" size="60">
                <img v-if="userData === null || userData.image === ''" src="@/assets/icons/profile/no-image.png" alt="AVATAR">
                <img v-if="userData !== null && userData.image !== ''" :src="userData.image">
              </v-list-item-avatar>

              <v-list-item-content v-if="userData !== null">
                <v-list-item-title>{{userData.name}} {{userData.lastName}}</v-list-item-title>
                <v-list-item-subtitle>{{userData.levelName}}</v-list-item-subtitle>
                <v-list-item-subtitle>Points: {{userData.points}}</v-list-item-subtitle>
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
                  <label 
                       class="blue--text handMouse" 
                       style="text-decoration:none;">
                      <v-list-item-title class="blue--text">{{texts.menuHomeLabel}}</v-list-item-title>
                  </label>
              </v-list-item>

              <v-list-item @click="gotoProfile">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-account</v-icon>
                  </v-list-item-icon>
                  <label  
                    class="blue--text handMouse"  
                    style="text-decoration:none;">
                      <v-list-item-title class="blue--text">
                          {{texts.profileLabel}}
                      </v-list-item-title>
                  </label>
              </v-list-item>

              <v-list-item @click="gotoAddBankAccounts">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-bank</v-icon>
                  </v-list-item-icon>
                      <label                         
                        class="blue--text handMouse" 
                        style="text-decoration:none;"
                      >
                      <v-list-item-title class="blue--text">{{texts.menuAddBankAccountLabel}}</v-list-item-title>
                      </label>
              </v-list-item>

              <v-list-item class="align-center" @click="gotoPaymentHistory">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-credit-card</v-icon>
                  </v-list-item-icon>            
                  <label  
                       class="blue--text handMouse" 
                       style="text-decoration:none;">
                      <v-list-item-title class="blue--text">{{texts.paymentHistoryLabel}}</v-list-item-title>
                  </label>
              </v-list-item>
              
              <v-list-item @click="gotoWithdrawalHistory">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-account-cash</v-icon>
                  </v-list-item-icon>
                      <label                         
                        class="blue--text handMouse" 
                        style="text-decoration:none;"
                      >
                      <v-list-item-title class="blue--text">{{texts.withdrawalHistoryLabel}}</v-list-item-title>
                      </label>
              </v-list-item>              

              <v-list-item @click="gotoBuyPoints">
                  <v-list-item-icon>
                      <v-icon class="orange--text darken-4">mdi-currency-usd-circle-outline</v-icon>
                  </v-list-item-icon>
                  <label                     
                    class="orange--text darken-4 handMouse" 
                    style="text-decoration:none;"
                  >
                  <v-list-item-title class="orange--text darken-4 body-1">{{texts.buyPointsLabel}}</v-list-item-title>
                  </label>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item class="align-center" @click="logout">
                  <v-list-item-icon>
                      <v-icon class="blue--text">mdi-logout-variant</v-icon>
                  </v-list-item-icon>            
                  <label
                       class="blue--text handMouse" 
                       style="text-decoration:none;">
                      <v-list-item-title class="blue--text">{{texts.menuLogOutLabel}}</v-list-item-title>
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
import {Vue, Watch, Prop} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';
/* --- Services --- */
import userService  from '../../services/user/userService';
import internationalizationService from '@/services/internationalization/internationalizationService';

/* --- Types --- */
import User from '../../types/user/User';
@Component
export default class Navbar extends Vue {
  email = "";
  drawer = false;
  allusers: any = null;
  user: User = this.$store.state.user.user;

  userLoggedIn = false; 

  @Prop({ default: null }) userData: any;  

  textsTranslated: any = null;
  texts = {
    buyPointsLabel: "Buy Points!",
    navBarLoginLabel: "Log In",
    menuHomeLabel: "Home",
    profileLabel: "Profile",
    menuAddBankAccountLabel: "Add Bank Account",
    paymentHistoryLabel: "Payment History",
    withdrawalHistoryLabel: "Withdrawal History",
    menuLogOutLabel: "Log out"
  }

  logout(){
    this.$store.dispatch('user/setSessionStatus', false);
    this.userLoggedIn = false;
    localStorage.clear();
    fa.signOut().then(function() {
      console.log('Signout successful!')
    }).catch(function(error) {
      console.log('Signout failed')
    });
    this.$router.push({ name: 'login'}).catch(error => {
      console.log(error);
    });
  }

  mounted(){
    this.userLoggedIn = this.getSessionStatus;
    

    this.texts = internationalizationService.navBar.assignDefaultLabels();
    //this.getTranslations(); 
    
  }

  get getSessionStatus(){
    return this.$store.getters["user/getSessionStatus"];
  }

  @Watch('userData')
  userDataChanged(){
    if(this.userData.userID === undefined){
      const user = localStorage.getItem('userData');
      if(user){
        this.userData = JSON.parse(user);
        this.obtainTerms();
      }
      else {
        this.userData.preferredLanguage = 'en-us';        
      }      
    }
    else {
      this.obtainTerms();
    }
    this.checkLanguage();
  }

  @Watch('userData.preferredLanguage')
  languageChanged(){
    this.checkLanguage();
  }

  obtainTerms(){
    const terms = localStorage.getItem('termsTranslated');
    if(terms){
      try{
          this.textsTranslated = JSON.parse(terms);
      }catch(e){
          localStorage.removeItem('terms');
      }
    }
  }

  checkLanguage(){
    if(this.userData.preferredLanguage !== 'en-us'){
      this.getTranslations(this.userData.preferredLanguage);
      if(this.textsTranslated){
          this.texts = internationalizationService.navBar.translate(this.textsTranslated, this.texts);
      }
    }
    else {
      this.texts = internationalizationService.navBar.assignDefaultLabels();
    }
  } 

  async getTranslations(language: string){ 
    try {
      const translations = await internationalizationService.getTermsTranslations(language);        
      if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
        this.textsTranslated = translations.data;
        this.texts = internationalizationService.navBar.translate(this.textsTranslated, this.texts);
        const parsedTerms = JSON.stringify(this.textsTranslated);
        localStorage.setItem('termsTranslated', parsedTerms);
    } 
    } catch (error) {
      console.log("error en navbar");
    }                
  }  

  profile(){
    this.$router.push({ name: 'profile'}).catch(error => {
      console.log(error);
    });
  }

  login(){
    this.$router.push({ name: 'login'}).catch(error => {
      console.log(error);
    });
  }

  home(){
    this.$router.push({ name: 'home'}).catch(error => {
      console.log(error);
    });
  }

  gotoHome(){
    this.$router.push({ name: 'home' }).catch(error => {
      console.log(error);
    });
  }

  gotoProfile(){  
    this.$router.push({ name: 'userProfile' }).catch(error => {
      console.log(error);
    });         
  }

  gotoAddBankAccounts(){
    this.$router.push({ name: 'userBankAccountRegistration' }).catch(error => {
      console.log(error);
    });
  }

  gotoBuyPoints(){
    this.$router.push({ name: 'pointsPurchase' }).catch(error => {
      console.log(error);
    });
  }
  
  gotoWithdrawalHistory(){
   this.$router.push({ name: 'userWithdrawalHistory' }).catch(error => {
      console.log(error);
    });
  }

  gotoPaymentHistory(){
    this.$router.push({ name: 'userPaymentHistory'}).catch(error => {
      console.log(error);
    });
  }

}

</script>

<style src="./Navbar.css" scoped></style>