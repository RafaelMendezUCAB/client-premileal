<template>
  <v-app>
      <Navbar :userData="userData"></Navbar>
      <v-content>

        <div class="text-center">
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="d-flex justify-center">
                <v-overlay                                  
                  :value="proccessingTransaction"                      
                >
                    <v-card
                      max-width="500"
                      class="mx-auto"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="headline d-flex justify-center">{{transactionTittle}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>   
                      <v-progress-circular
                        :size="70"
                        :width="7"
                        color="primary"
                        indeterminate
                      ></v-progress-circular>                                                                                                             
                      <v-card-text>
                        <span>{{transactionDescription}}.</span>
                      </v-card-text>                                                                              
                    </v-card>                              
                </v-overlay>  

                <v-overlay                                  
                  :value="error"
                >
                    <v-card
                      max-width="500"
                      class="mx-auto"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="headline">{{errorTittle}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>                                                                                                               
                      <v-card-text>
                        <span>{{errorDescription}}</span>
                      </v-card-text>                                                                          
                      <v-btn
                          color="success"
                          @click="error = false"
                          style="margin-bottom: 2%"
                        >
                          Ok
                      </v-btn>                                   
                    </v-card>                              
                </v-overlay>  

                <v-overlay                                  
                  :value="successfullTransaction"
                >
                    <v-card
                      max-width="500"
                      class="mx-auto"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="headline">{{successfullTransactionTitle}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>                                                                                                               
                      <v-card-text>
                        <span>{{successfullTransactionDescription}}</span>
                      </v-card-text>                                                                          
                      <v-btn
                          color="success"
                          @click="successfullTransaction = false"
                          style="margin-bottom: 2%"
                        >
                          Ok
                      </v-btn>                                   
                    </v-card>                              
                </v-overlay>                
            </v-col>
          </v-row>
        </div>

          <v-row
              align="center"
              justify="center"
          >
              <v-col cols="12">
                  <div class="text-center">
                      <h1 class="pageTitle">{{texts.profileSettingsLabel}}</h1>
                  </div>
              </v-col>
          </v-row>
          <v-divider style="margin-bottom: -2%"></v-divider>
          <div class="text-center">
            <v-row>
              <v-col cols=12 lg="4">
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="11" lg="11">

                    <div class="pt-8 " align="center" justify="center">
                      <v-icon class="iconSize" color="blue">mdi-account-circle</v-icon>
                      <h1 class="mr-2 mainTitle titleSize">{{texts.userProfileLabel}}</h1>
                    </div>
                    
                    <v-card                      
                      color="grey lighten-5"
                      class="mx-auto cardForm"
                      max-width="374"
                    >
                      <v-card-text>
                        <v-avatar color="blue" size="100" v-if="userData !== null">                                                                   
                          <img 
                            :src="userData.image" 
                            alt="Avatar" 
                            v-if="userData.image !== undefined && userData.image !== ''"                                                         
                          >
                          <img 
                            src="@/assets/icons/profile/no-image.png" 
                            alt="Avatar"   
                            v-else                          
                          >
                        </v-avatar>
                      
                        <v-file-input                            
                          prepend-icon="mdi-camera"
                          accept="image/*"
                          class="mx-5 uploadPhoto"
                          @change="uploadImage($event)"
                          :label="texts.clickHereToUploadPhotoLabel" 
                                                  
                        >
                          <v-btn>
                            {{texts.uploadImageLabel}}
                          </v-btn>
                        </v-file-input> 
                                                
                        <span v-if="userData !== null">
                          <v-form v-model="valid">
                            <v-text-field 
                              v-model="userDataAux.name"
                              class="fontSize"
                              :label="texts.signUpNameLabel"
                              prepend-icon= "mdi-account" 
                              :rules="[rules.required, rules.alphabet]"                       
                            >                                            
                            </v-text-field>
                            <v-text-field 
                              v-model="userDataAux.lastName"
                              class="fontSize"
                              :label="texts.signUpLastNameLabel"
                              prepend-icon= "mdi-ab-testing"   
                              :rules="[rules.required, rules.alphabet]"                     
                            >
                            </v-text-field>
                            <v-text-field 
                              v-model="userDataAux.password"
                              class="fontSize"
                              :label="texts.loginPasswordLabel"
                              :type= "showPassword1 ? 'text' : 'password'" 
                              :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                              prepend-icon= "mdi-lock"
                              @click:append="showPassword1 = !showPassword1"  
                              :disabled="userData.password === ''"
                              :rules="[rules.password]"                                                                                          
                            >
                            </v-text-field>                             
                            <v-text-field 
                              v-model="userDataAux.email"
                              class="fontSize"
                              :label="texts.loginEmailLabel"
                              prepend-icon= "mdi-at"
                              :disabled="userData.type !== 'No Federado'"  
                              :rules="[rules.required, rules.email]"                      
                            >
                            </v-text-field> 
                            <v-text-field 
                              v-model="userDataAux.birthdate"
                              class="fontSize"
                              :label="texts.signUpBirthDateLabel"
                              prepend-icon= "mdi-calendar-blank-outline"                        
                              type="date"
                            >
                            </v-text-field> 
                            <v-autocomplete
                                v-model="userDataAux.placeID"
                                item-value="p_id"
                                prepend-icon= "mdi-map-marker"
                                :label="texts.signUpCountryLabel"                              
                                :items="places"
                                item-text="p_name">
                            </v-autocomplete> 
                            <v-select
                                v-model="userData.preferredLanguage"
                                outlined
                                prepend-icon="mdi-translate"
                                :items="languages"                                            
                                item-text="name"
                                item-value="acronym"
                                :label="texts.selectPreferredLanguageLabel"
                                style="margin-top: 8%"
                                :rules="[rules.required]"                                    
                            >                                    
                            </v-select> 
                          </v-form>                           
                          <p>{{texts.membershipLevelLabel}}: <b>{{userData.levelName}}</b> </p>
                          <p>{{texts.pointsAvailableLabel}}: <b style="color: green; font-size:20px">{{userData.points}}</b> </p>

                          <v-btn
                            color="error"
                            @click="resetValues"
                            style="margin-bottom: 2%"                                          
                          >
                            {{texts.resetValuesLabel}}
                          </v-btn>

                          <v-btn
                            color="primary"
                            @click="updateUser"
                            style="margin-bottom: 2%"                                          
                          >
                            {{texts.updateUserLabel}}
                          </v-btn>

                        </span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols=12 lg="7">
                <div class="text-center">
                  <v-row
                    align="center"
                    justify="center"                            
                  >
                    <v-col cols="11" lg="12">
                      <div class="pt-10">
                        <v-icon class="iconSize" color="blue">mdi-bank</v-icon>
                        <h1 class="mainTitle titleSize">{{texts.bankAccountsLabel}}</h1>
                      </div> 
                      <v-card>
                        <v-card-title class="subtittle">
                          {{texts.registeredBanksLabel}}
                        </v-card-title>
                        <v-data-table 
                          class="fontSize"
                          :headers="headers"
                          :items="userBankAccounts"
                        >
                          <template v-slot:item.details="{ item }">
                            <v-icon
                                @click="seeDetails(item)"
                            >
                              mdi-feature-search
                            </v-icon>
                          </template>  
                          <template v-slot:item.accountStatus="{ item }">
                            <span v-if="item.accountStatus === 'verified'">
                              <span style="color: green">{{texts.verifiedLabel}}</span>
                            </span>
                            <span v-if="item.accountStatus === 'unverified'">
                              <span style="color: red">{{texts.unverifiedLabel}}</span> 
                            </span>
                          </template>                    
                        </v-data-table>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        
      </v-content>
      <Footer></Footer>
    </v-app>
</template>

<script lang="ts">
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

import userService from '../../../services/user/userService';
import bankAccountService from '@/services/bankAccount/bankAccountService';
import placeService from '@/services/place/placeService';
import internationalizationService from '@/services/internationalization/internationalizationService';

@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class UserProfile extends Vue{

  valid = false;
  
  userData: any = {
    type: ""  
  };

  userDataAux: any = {
    name: "",
    lastName: "",
    password: "",
    email: "",
    birthdate: "",
    placeID: ""
  };

  userBankAccounts: any = [];
  bankAccountsData: any = [];
  bankAccount: any = null;

  serverResponse: any = null;

  proccessingTransaction = false;
  transactionTittle = '';
  transactionDescription = ''

  error = false;
  errorTittle = '';
  errorDescription = '';

  successfullTransaction = false;
  successfullTransactionTitle = "";
  successfullTransactionDescription = "";

  places: any = []; 

  showPassword1 = false;

  textsTranslated: any = null;
  texts = {
    profileSettingsLabel: "PROFILE SETTINGS",
    userProfileLabel: "User Profile",
    clickHereToUploadPhotoLabel: "Click here to upload new photo",
    uploadImageLabel: "upload image",
    signUpNameLabel: "Name",
    signUpLastNameLabel: "Last Name",
    loginPasswordLabel: "Password",
    loginEmailLabel: "E-mail",
    signUpBirthDateLabel: "Birth Date",
    signUpCountryLabel: "Country",
    membershipLevelLabel: "Membership Level",
    pointsAvailableLabel: "Points available",
    updateUserLabel: "Update user",
    bankAccountsLabel: "Bank Accounts",
    registeredBanksLabel: "Registered Banks",
    verifiedLabel: "Verified",
    unverifiedLabel: "Unverified",
    bankLabel: "Bank",
    accountNumberLabel: "Account Number",
    statusLabel: "Status",
    detailsLabel: "Details",
    resetValuesLabel: "Reset values",
    englishLabel: "English",
    spanishLabel: "Spanish",
    selectPreferredLanguageLabel: "Select preferred language",
    userUpdatedLabel: "User data successfully updated!",
    dataUpdatedLabel: "Data has been updated.",
    anErrorOcurredLabel: "An error ocurred!",
    dataNotUpdatedLabel: "Data couldn't be updated. Please check you internet connection and try again.",
    uploadingImageLabel: "Uploading image.",
    bePatientLabel: "This could take some time. Please be patient.",
    imageNotUploadedLabel: "Image couldn't be uploaded. Please check you internet connection and try again.",
    imageUpdatedLabel: "User image successfully updated!",
    updatedImageLabel: "Image has been updated."
  };

  languages = [
      {
          acronym: 'en-us',
          name: this.texts.englishLabel
      },
      {
          acronym: 'es',
          name: this.texts.spanishLabel
      }
  ];

  headers = [
    {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'bankAccountID'
    },
    {
        text: this.texts.bankLabel,        
        value: 'bankName'
    },
    {
        text: this.texts.accountNumberLabel,
        value:'accountNumber',
    },        
    {
        text: this.texts.statusLabel,
        value: 'accountStatus',
    },
    {
        text: this.texts.detailsLabel,
        value: 'details',
    }    
  ]; 

  rules = {
    required: (value: string[]) => !!value || 'Required.',
    min: (v: string) => v.length >= 8 || 'Min 8 characters',
    alphabet: (value: string) => {
        const pattern = /^[A-z]*$|^$/;
        return(
            pattern.test(value) || "Only alphabet characters allowed"
        )
    },
    password: (value: string) => {
        const pattern = /(?=.{8,})/;
        return (
            pattern.test(value) || this.userData.type !== 'No Federado' ||
            "Password must contain at least eight characters."
        );
    },
    email: (value: string) => {
        const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
    }
  }
  
  mounted(){
    this.userData = this.getUserData;  
    if(this.userData.userID === undefined){
      const user = localStorage.getItem('userData');
      if(user){
        this.userData = JSON.parse(user);
        this.obtainTerms();
      }
      else {
        this.$router.push({ name: 'home' }).catch(error => {
          console.log(error);
        });      
      }      
    }
    else {
      if(this.userData.birthdate !== null){
      this.userData.birthdate = userService.getOnlyBirthDate(this.userData.birthdate);
      }
      this.getUserBankAccounts();
      this.getAllPlaces();
      this.obtainTerms();
    }
    this.checkLanguage();    
    this.resetValues();        

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
    try {
      const translations = await internationalizationService.getTermsTranslations(language);        
      if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
          this.textsTranslated = translations.data;
          this.texts = internationalizationService.userProfile.translate(this.textsTranslated, this.texts);
          const parsedTerms = JSON.stringify(this.textsTranslated);
          localStorage.setItem('termsTranslated', parsedTerms);
      } 
    } catch (error) {
      console.log(error);
    }         
  }
  
  checkLanguage(){
    if(this.userData.preferredLanguage !== 'en-us'){
      this.getTranslations(this.userData.preferredLanguage);
      if(this.textsTranslated){
          this.texts = internationalizationService.userProfile.translate(this.textsTranslated, this.texts);
      }
    }
    else {
      this.texts = internationalizationService.userProfile.assignDefaultLabels();
    }
    this.assignLanguage();
  }

  @Watch('userData.preferredLanguage')
  async preferredLanguageChange(){
    this.checkLanguage();   
    try {
      this.serverResponse = await userService.updatePreferredLanguage(this.userData.userID, {preferredLanguage: this.userData.preferredLanguage});
    } catch (error) {
      console.log("An error ocurred. Language couldn't be set as default. ", error);
    }   
  } 

  assignLanguage(){
    this.languages = [
      {
          acronym: 'en-us',
          name: this.texts.englishLabel
      },
      {
          acronym: 'es',
          name: this.texts.spanishLabel
      }
    ];
  }

  get getUserData() {
    return this.$store.getters["user/getUserData"];
  }

  fillBankAccountsArray(bankAccounts: any){
    bankAccounts.forEach((bankAccount: any) => {
      this.userBankAccounts.push({
        bankAccountID: bankAccount.bankAccountID,
        bankName: bankAccount.bank,
        accountNumber: bankAccount.accountNumber,
        accountStatus: bankAccount.status,
        details: 'details'
      });
    });
  }

  async getUserBankAccounts(){
    try {
      this.serverResponse = await bankAccountService.getUserBankAccounts(this.userData.userID);
      if(this.serverResponse !== []){
        this.bankAccountsData = this.serverResponse;
        this.fillBankAccountsArray(this.serverResponse);
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  
  gotoProfileSettings(){
    this.$router.push({ name: 'userProfileSettings'}).catch(error => {
      console.log(error);
    });
  }

  seeDetails(bankAccount: any){
    for(let i = 0; i < this.bankAccountsData.length; i++){
      if(this.bankAccountsData[i].bankAccountID === bankAccount.bankAccountID){
        this.bankAccount = this.bankAccountsData[i];
        break;
      }
    }
    this.$store.dispatch('bankAccount/setBankAccount', this.bankAccount);
    this.$router.push({ name: 'userBankAccountStatus', }).catch(error => {
      console.log(error);
    });
  }

  async updateUser(){    
    if(this.valid){      
      if(this.valuesChanged()){
        this.transactionTittle = "Updating user information.";
        this.transactionDescription = "This could take some time. Please be patient."
        this.proccessingTransaction = true;

        try {
          this.serverResponse = await userService.updateUserData(this.userData.userID, {
          userID: this.userData.userID,
          stripeID: this.userData.stripe_id,
          stripeConnectID: this.userData.stripe_connect_id,
          name: this.userDataAux.name,
          lastName: this.userDataAux.lastName,
          email: this.userDataAux.email,
          password: this.userDataAux.password,
          birthdate: this.userDataAux.birthdate,
          image: this.userData.image,
          levelID: this.userData.levelID,
          placeID: this.userData.placeID,
          place: this.getPlaceName(),
          points: this.userData.points,
          roleID: this.userData.roleID,
          type: this.userData.type, 
          blocked: this.userData.blocked
          });
          this.proccessingTransaction = false;
          if(this.serverResponse.data === "User successfully updated."){
            this.successfullTransactionTitle = this.texts.userUpdatedLabel;
            this.successfullTransactionDescription = this.texts.dataUpdatedLabel;
            this.successfullTransaction = true;
            this.assignNewValuesToUserData();
            this.resetValues();
          }
          else {
            this.error = true;
            this.errorTittle = this.texts.anErrorOcurredLabel;
            this.errorDescription = this.texts.dataNotUpdatedLabel;
          }
        } catch (error) {
          console.log("An error ocurred: ", error);
        }
      }
    }    
  }

  getPlaceName(){
    this.places.forEach((place: any) => {
      if(place.p_id === this.userDataAux.placeID){
        return place.p_name
      }
    });
  }

  assignNewValuesToUserData(){
    this.userData.name = this.userDataAux.name;
    this.userData.lastName = this.userDataAux.lastName;
    this.userData.password = this.userDataAux.password;
    this.userData.email = this.userDataAux.email;
    this.userData.birthdate = this.userDataAux.birthdate;
    this.userData.placeID = this.userDataAux.placeID;
    this.userData.place = this.getPlaceName();
    this.$store.dispatch('user/setUserData', this.userData);
  }

  async uploadImage(event: any){
    if(event){
      this.proccessingTransaction = true;
      this.transactionTittle = this.texts.uploadingImageLabel;
      this.transactionDescription = this.texts.bePatientLabel;
      const newUserProfilePhoto = event || event.dataTransfer.files;

      try {
        const imageURL = await userService.uploadProfileImage(this.userData.userID, newUserProfilePhoto);      
        const serverResponse = await userService.updateUserProfileImage(this.userData.userID, imageURL);
        if(serverResponse.data === 'An error ocurred.'){
          this.proccessingTransaction = false;
          this.error = true;
          this.errorTittle = this.texts.anErrorOcurredLabel;
          this.errorDescription = this.texts.imageNotUploadedLabel;
        }
        else {
          this.successfullTransactionTitle = this.texts.imageUpdatedLabel;
          this.successfullTransactionDescription = this.texts.updatedImageLabel;
          this.successfullTransaction = true;
          this.userData.image = imageURL;
          this.proccessingTransaction = false;
        } 
      } catch (error) {
        console.log("An error ocurred uploading image: ", error);
      }     
    }
  }

  async getAllPlaces(){
    try {
      this.serverResponse = await placeService.getAllPlaces();
      this.places = this.serverResponse.data;
    } catch (error) {
      console.log("An error ocurred getting all places:", error);
    }
  } 

  resetValues(){
    this.userDataAux = this.userData;
    this.userDataAux = {
      name: this.userData.name,
      lastName: this.userData.lastName,
      password: this.userData.password,
      email: this.userData.email,
      birthdate: this.userData.birthdate,
      placeID: this.userData.placeID,
    }
  }

  valuesChanged(){
    if(this.userDataAux.name !== this.userData.name || this.userDataAux.lastName !== this.userData.lastName || this.userDataAux.password !== this.userData.password || this.userDataAux.email !== this.userData.email || this.userDataAux.birthdate !== this.userData.birthdate || this.userDataAux.placeID !== this.userData.placeID ){
      return true;
    }
    return false;
  }

}

</script>

<style src="./Profile.css" scoped></style>