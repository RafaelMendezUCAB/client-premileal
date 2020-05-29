<template>
  <v-app light>
      <v-content>
        <div>
        <Navbar :userData="userData"></Navbar>
        <!--<Navbar v-if="userData !== null" :userData="userData" :userName="userData.name"></Navbar>-->
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
                      {{texts.joinPremilealLabel}}
                    </h1>
                  </div>
                  <div class="subheading text-xs-center">
                    <h2 class="WelcomeSubtittle"> 
                      {{texts.startEarningPointsLabel}}
                    </h2>
                  </div>
                  <v-btn class="button white--text" color="blue" rounded dark x-large href="/signup" v-if="!userLoggedIn">
                    {{texts.becomeMemberLabel}}
                  </v-btn> 
                  <v-btn class="button white--text"  color="blue" rounded dark x-large @click="gotoBuyPoints" v-if="userLoggedIn">
                    {{texts.AcquirePointsLabel}}!
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
                          {{texts.premilealDescriptionLabel}}
                        </p>                      
                      </v-card-text>
                    </v-card>
              </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card  flat outlined dark color="blue darken-1" class="pt-4 mr-1" height="100%">
                      <v-card-text>
                        <h1 class=" miniCard2">{{texts.joinLoyaltyProgramLabel}}</h1>                  
                      </v-card-text>
                    </v-card>
                  </v-flex>
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1" height="100%">
                      <v-card-text>
                        <h1 class="miniCard2 thin white--text">{{texts.getExclusiveRewardsLabel}}</h1>                     
                      </v-card-text>
                    </v-card>
                  </v-flex>                  
              <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined class=" mr-1" height="100%">
                      <v-card-text>
                        <h3 class="miniCard1  pt-3" style="font-weight: 450;">
                          {{texts.premilealObjectiveLabel}}
                        </h3>                      
                      </v-card-text>
                    </v-card>
              </v-flex>      
            </v-layout>      
          </div>
        </v-container>
        <v-container fluid>
          <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text" style="text-align:center">
            <h3 class="Title">{{texts.aboutMembershipPlansLabel}}</h3>
          </div>
          <div style="max-width: 80%; margin: auto;">
            <v-flex xs-center>
              <v-card flat class="mt-1 mb-2">
                <v-simple-table class=""  >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="  titleTable wrap blue--text" width= "30%" >{{texts.levelPlanLabel}}</th>
                        <th class=" titleTable wrap black--text" width=""  >{{texts.descriptionLabel}}</th>
                      </tr>            
                    </thead>
                    <tbody>
                      <tr>
                        <td class="subtitleTable" style="color: rgb(205, 127, 50);">
                          <v-icon left class=" iconTable font-weight-bold py-3 pt-1" style="color: rgb(205, 127, 50);">mdi-triangle</v-icon>
                          {{texts.basicPlanLabel}}
                        </td>
                        <td class="sizeDescriptionTable">
                          {{texts.onceMemberLabel}}
                        </td>
                      </tr>
                      <tr>
                        <td class="subtitleTable grey--text text--darken-1">
                          <v-icon left class=" iconTable font-weight-bold grey--text text--darken-1 py-3">mdi-rhombus</v-icon>
                          Premium
                        </td>
                        <td class="sizeDescriptionTable">
                          {{texts.oncePremiumLabel}}
                        </td>
                      </tr>               
                      <tr>
                        <td class="subtitleTable amber--text text--darken-2">
                          <v-icon left class=" iconTable font-weight-bold amber--text text--darken-2 py-4">mdi-octagram</v-icon>
                          Gold
                        </td>
                        <td class="sizeDescriptionTable">
                          {{texts.onceGoldLabel}}
                        </td>   
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>        
              </v-card>
                <div style="text-align:center">
                  <v-btn class="mt-5 white--text" column align-center color="blue" rounded  dark x-large @click="gotoSuscriptions">
                    {{texts.learnMoreLabel}}
                  </v-btn>    
                </div>
            </v-flex>
          </div>
          <div>
            <center>
              <div class="flex display-2 font-weight-medium pb-6 pt-12 blue--text"><h3 class="Title">{{texts.waitingForLabel}}</h3></div>
              <div class="text-wrap">
                <v-layout row pb-8>
                  <v-flex xs6 order-md2 order-xs1>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1" height="100%">
                      <div class="mx-2"> <v-icon large left> mdi-cart </v-icon></div>
                      <v-card-text>
                        <h1 class="white--text ml-n2">{{texts.purchaseLabel}}</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          {{texts.buyToBecomePremiumLabel}}
                        </p>                      
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mr-1">
                      <div class="mx-2"> <v-icon large left> mdi-barcode-scan </v-icon></div>          
                      <v-card-text>
                        <h1 class="white--text ml-n2" >{{texts.redeemLabel}}</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          {{texts.useCouponsLabel}}
                        </p>            
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mx-1 mt-1">
                      <div class="mx-2"> <v-icon large left> mdi-chevron-triple-up </v-icon></div>          
                      <v-card-text>
                        <h1 class="white--text">{{texts.updateLabel}}</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          {{texts.becomePremiumLabel}}
                        </p>          
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 order-md2 order-xs2>
                    <v-card tile flat outlined dark color="blue darken-1" class="pt-4 mr-1 mt-1">
                      <div class="mx-2"> <v-icon large left> mdi-wifi </v-icon></div>                    
                      <v-card-text>
                        <h1 class="white--text">{{texts.stayLabel}}</h1>
                        <p class="body-1 white--text pt-3" style="font-weight: 450;">
                          {{texts.keepAnEyeLabel}}
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
import internationalizationService from '@/services/internationalization/internationalizationService';

/* --- Types --- */
import User from '../../types/user/User';

@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class Logout extends Vue{    
  
  userData: any = null;
  email = "";
  subscribed = false;
  
  allusers: any = null;
  user: User = this.$store.state.user.user;

  userLoggedIn = this.$store.state.user.loggedIn; 

  textsTranslated: any = null;

  texts = {
    joinPremilealLabel: "",
    startEarningPointsLabel: "",
    becomeMemberLabel: "",
    AcquirePointsLabel: "",
    premilealDescriptionLabel: "",
    joinLoyaltyProgramLabel: "",
    getExclusiveRewardsLabel: "",
    premilealObjectiveLabel: "",
    aboutMembershipPlansLabel: "",
    waitingForLabel: "",
    levelPlanLabel: "",
    descriptionLabel: "",
    basicPlanLabel: "",
    onceMemberLabel: "",
    oncePremiumLabel: "",
    onceGoldLabel: "",
    learnMoreLabel: "",
    purchaseLabel: "",
    buyToBecomePremiumLabel: "",
    redeemLabel: "",
    useCouponsLabel: "",
    updateLabel: "",
    becomePremiumLabel: "",
    stayLabel: "",
    keepAnEyeLabel: ""
  }

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
    this.userData = this.getUserData;
    console.log("en home es: ", this.userData);
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

  get getUserData() {
    return this.$store.getters["user/getUserData"];
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

  async getTranslations(language: string){        
    const translations = await internationalizationService.getTermsTranslations(language);        
    if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
        this.textsTranslated = translations.data;
        this.texts = internationalizationService.home.translate(this.textsTranslated, this.texts);
        const parsedTerms = JSON.stringify(this.textsTranslated);
        localStorage.setItem('termsTranslated', parsedTerms);
    }      
  }

  checkLanguage(){
    if(this.userData.preferredLanguage !== 'en-us'){
      this.getTranslations(this.userData.preferredLanguage);
      console.log("Antes de traducir ", this.textsTranslated);
      if(this.textsTranslated){
          this.texts = internationalizationService.home.translate(this.textsTranslated, this.texts);
      }
    }
    else {
      this.texts = internationalizationService.home.assignDefaultLabels();
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

  gotoSuscriptions(){
    this.$router.push({ name: 'suscriptions'}).catch(error => {
      console.log(error);
    });
  }

  gotoBuyPoints(){
    this.$router.push({ name: 'pointsPurchase' }).catch(error => {
      console.log(error);
    });
  }

}
</script>

<style src="./Home.css" scoped></style>