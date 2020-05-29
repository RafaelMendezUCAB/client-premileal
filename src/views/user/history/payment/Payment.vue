<template>
    <v-app light>
        <div>
          <Navbar :userData="userData"></Navbar>
        </div>
        <v-content>
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">{{texts.paymentHistoryTitleLabel}}</h1>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" lg="4" class="rowSeparation">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                            class="rowBottomMargin"
                        >
                            <v-col cols="11" lg="12">
                                <h1 class="subtittle marginBottom">{{texts.userInformationLabel}}</h1>

                                <v-card                                
                                  class="mx-auto my-12"
                                  max-width="374"
                                >
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


                                  <v-card-text v-if="userData !== null">                                    
                                    <p>{{texts.signUpNameLabel}}: <b>{{userData.name}}  {{userData.lastName}}</b></p>  
                                    <p>{{texts.loginEmailLabel}}: <b>{{userData.email}}</b></p>
                                    <p>{{texts.membershipLevelLabel}}: <b style="color: amber;">{{userData.levelName}}</b></p>                                      
                                  </v-card-text>                                
                                </v-card>

                                <v-btn dark
                                      color="blue"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin mr-1"
                                      @click="gotoProfile"
                                    >
                                      {{texts.seeProfileLabel}}
                                </v-btn>
                                <!--<v-btn
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="gotoWithdrawalHistory"
                                    >
                                      Withdrawal History
                                </v-btn>        -->                        

                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="12" lg="7">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"                            
                        >
                            <v-col cols="11" lg="12">
                                <h1 style="margin-bottom: 4%" class="subtittle topMargin">{{texts.yourPaymentHistoryLabel}}</h1>

                                <v-card>
                                  <v-card-title>
                                    {{texts.paymentsLabel}}
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                      v-model="search"
                                      append-icon="mdi-magnify"
                                      :label="texts.searchLabel"
                                      single-line
                                      hide-details
                                    ></v-text-field>
                                  </v-card-title>
                                  <v-data-table
                                    :headers="headers"
                                    :items="movements"
                                    :search="search"                                    
                                  >
                                    <template v-slot:item.details="{ item }">
                                      <v-icon
                                        @click="seeDetails(item)"
                                        >
                                        mdi-feature-search
                                        </v-icon>
                                    </template>
                                  </v-data-table>
                                </v-card>

                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script lang='ts'>
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

import paymentService from '@/services/payment/paymentService';
import internationalizationService from '@/services/internationalization/internationalizationService';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class BankAccountStatus extends Vue{

    transactionDescription = '';
    userData: any = null;   

    serverResponse: any = null;

    rules = {
        required: (value: any) => !!value || 'Required.',
    }

    search = '';

    headers = [                                       
        {
            text: 'Bank',
            value: 'bankname'
        },         
        {
            text: 'Amount',
            value: 'amount'
        },  
        {
            text: 'Description',
            value: 'description'
        },                                                                      
        {
            text: 'Details',
            value: 'details'
        }
    ];

    textsTranslated: any = null;
    texts: any = {
      paymentHistoryTitleLabel: "PAYMENT HISTORY",
      userInformationLabel: "User Information",
      signUpNameLabel: "Name",
      loginEmailLabel: "E-mail address",
      membershipLevelLabel: "Membership Level",
      seeProfileLabel: "See Profile",
      yourPaymentHistoryLabel: "YOUR PAYMENT HISTORY",
      paymentsLabel: "Payments",
      searchLabel: "Search"
    }

    movements: any = [];

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
        this.getPaymentHistory();        
        this.obtainTerms();
      }
      this.checkLanguage();        
    }

    get getUserData() {
      return this.$store.getters["user/getUserData"];
    }

    async getPaymentHistory(){
      try {
          this.serverResponse = await paymentService.getUserPayments(this.userData.userID);
          this.movements = this.serverResponse.data;
          this.movements.forEach((movement: any) => {
              movement.details = 'details';
          });
      } catch (error) {
          console.log("An error ocurred getting payment history: ", error);
      }
    }

    async getTranslations(language: string){        
      try {
        const translations = await internationalizationService.getTermsTranslations(language);        
        if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
            this.textsTranslated = translations.data;
            this.texts = internationalizationService.paymentHistory.translate(this.textsTranslated, this.texts);
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
            this.texts = internationalizationService.paymentHistory.translate(this.textsTranslated, this.texts);
        }
      }
      else {
        this.texts = internationalizationService.paymentHistory.assignDefaultLabels();
      }
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

    seeDetails(){
        console.log("see details");
    }
    
    gotoProfile(){
      this.$router.push({name: 'userProfile'}).catch(error => {
        console.log(error);
      });
    }

    gotoWithdrawalHistory(){
      this.$router.push({name: 'userWithdrawalHistory'}).catch(error => {
        console.log(error);
      });
    }
    
}
</script>

<style src="./Payment.css" scoped></style>