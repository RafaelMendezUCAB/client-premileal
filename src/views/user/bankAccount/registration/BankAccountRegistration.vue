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
                <v-col class="d-flex justify-center">
                    <v-overlay                                  
                      :value="error"                      
                    >
                        <v-card
                          max-width="500"
                          class="mx-auto"
                        >
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title class="headline d-flex justify-center">{{errorTittle}}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>                                                                                                               
                          <v-card-text>
                            <span>{{errorDescription}}.</span>
                          </v-card-text>                                                                          
                          <div class="text-center">
                              <v-btn
                                color="success"
                                @click="backToForm"
                                style="margin-bottom: 2%;"
                              >
                                Ok
                            </v-btn>  
                          </div>                                                           
                        </v-card>                              
                    </v-overlay>                    

                </v-col>
            </v-row>
           
            <v-stepper v-model="step" class="noBoxShadow">
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col cols="10" lg="8">
                        <v-stepper-header>
                        <v-stepper-step :complete="step > 1" step="1">{{texts.enterInformationLabel}}</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="step > 2" step="2">{{texts.confirmDataLabel}}</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">{{texts.verifyBankAccountLabel}}</v-stepper-step>
                    </v-stepper-header>
                    </v-col>
                    
                </v-row>
              

              <v-stepper-items>
                <v-stepper-content step="1">
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-bank</v-icon>
                    <h1 class="bottomSeparation subtittle">{{texts.bankAccountRegistrationLabel}}</h1>
                    
                    <v-form v-model="valid">
                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-autocomplete
                                  v-model="bankAccountData.bank"
                                  :items="banks"
                                  :label="texts.bankLabel"
                                  item-text="bank"                                  
                                  outlined
                                  :disabled="loading"
                                  :rules="[rules.required]"                                
                                ></v-autocomplete>
                          </v-col>
                      </v-row>

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field   
                                  v-model="bankAccountData.holderName"                      
                                  :label="texts.accountHolderName"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required]"
                                  v-on:keypress="restrictNumbersAndSpecialCharacters($event)"
                              ></v-text-field>

                          </v-col>
                      </v-row>
                      
                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field   
                                  v-model="bankAccountData.accountNumber"                      
                                  :label="texts.accountNumberLabel"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required, rules.minAccountNumberLength, rules.maxAccountNumberLength]"
                                  v-on:keypress="restrictChars($event)"
                              ></v-text-field>

                          </v-col>
                      </v-row>

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field  
                                  v-model="bankAccountData.routingNumber"                      
                                  :label="texts.accountRoutingNumberLabel"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required, rules.minRoutingNumberLength, rules.maxRoutingNumberLength]"
                                  v-on:keypress="restrictChars($event)"
                              ></v-text-field>
                          </v-col>
                      </v-row>

                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-text-field       
                                  v-model="bankAccountData.checkNumber"                 
                                  :label="texts.accountCheckNumberLabel"
                                  outlined                        
                                  :disabled="loading"
                                  :rules="[rules.required, rules.minCheckNumberLength, rules.maxCheckNumberLength]"
                                  v-on:keypress="restrictChars($event)"
                              ></v-text-field>
                          </v-col>
                      </v-row>
                    </v-form>

                    <v-row
                        align="center"
                        justify="center">
                        <v-checkbox v-model="bankAccountData.isPrimary" class="mx-2 noMarginTop" :label="texts.setAccountPrimayLabel"></v-checkbox>
                    </v-row>
                    <v-btn
                      color="primary"
                      @click="checkData"
                    >
                      {{texts.saveBankAccountLabel}}
                    </v-btn>

                    <v-btn 
                        text
                        @click="gotoHome"
                    >
                        {{texts.cancelLabel}}
                    </v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-shield-check-outline</v-icon>
                    <h1 class="bottomSeparation subtittle">{{texts.youEnteredLabel}}</h1>
                    <v-card
                      class="mx-auto bottomSeparation"
                      max-width="500"
                    >
                      <v-list>
                        <v-list-item-group>
                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>{{texts.bankLabel}}: <b>{{bankAccountData.bank}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>{{texts.accountNumberLabel}}: <b>{{bankAccountData.accountNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>{{texts.routingNumberLabel}}: <b>{{bankAccountData.routingNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>{{texts.checkNumberLabel}}: <b>{{bankAccountData.checkNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>{{texts.setAsPrimaryLabel}}: <b>{{bankAccountData.isPrimary}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>                  
                        </v-list-item-group>
                      </v-list>
                    </v-card>                    

                    <v-btn
                      color="primary"
                      @click="saveBankAccount"
                      :disabled="loading"
                      :loading="loading"
                    >
                      {{texts.confirmLabel}}
                    </v-btn>

                    <v-btn 
                      text
                      @click="step = 1"
                      :disabled="loading"
                    >{{texts.backLabel}}</v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="3">                                    
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-thought-bubble</v-icon>
                    <h1 class="bottomSeparation subtittle">{{texts.howIVerifyBankAccountLabel}}</h1>
                  
                    <p>{{texts.createdMessagePart1}} "<span style="color: red">{{texts.unverifiedLabel}}</span>", {{texts.createdMessagePart2}}.</p>
                    <p>{{texts.createdMessagePart3}}<a @click="gotoValidationForm">{{texts.formLabel}}</a> {{texts.createdMessagePart4}}.
                    </p>
                    <p>{{texts.thanksLabel}}</p>
                    <v-btn
                      color="primary"
                      @click="gotoHome"
                    >
                      Got it!
                    </v-btn>
                    
                  </div>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>

            

        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script lang='ts'>
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

// Services
import bankService from '@/services/bank/bankService';
import bankAccountService from '@/services/bankAccount/bankAccountService';
import internationalizationService from '@/services/internationalization/internationalizationService';

@Component({
    components: {
        Footer,
        Navbar
    }
})
export default class BankAccountRegistration extends Vue{

    loading = false; 
    step="1";
    valid = false;

    serverResponse: any = null;

    error = false;
    errorTittle = '';
    errorDescription = '';        

    banks = [];
    availableRoutingNumbers: any = [];

    userData: any = null;

    bankAccountData = {
        userID: 0,
        customer: '',
        customerConnectAccount: '',
        bank: '',
        holderName: '',
        accountNumber: '',
        routingNumber: '',
        checkNumber: '',
        isPrimary: false
    }     
    
    textsTranslated: any = null;
    texts = {
        enterInformationLabel: "Enter information",
        confirmDataLabel: "Confirm data",
        verifyBankAccountLabel: "Verify Bank Account",
        bankAccountRegistrationLabel: "Bank Account Registration",
        bankLabel: "Bank",
        accountHolderName: "Account holder name",
        accountNumberLabel: "Account Number",
        accountRoutingNumberLabel: "Account Routing Number",
        accountCheckNumberLabel: "Account checking number",
        setAccountPrimayLabel: "Set account as primary",
        saveBankAccountLabel: "Save Bank Account",
        cancelLabel: "Cancel",
        youEnteredLabel: "You've entered",
        routingNumberLabel: "Routing Number",
        checkNumberLabel: "Check Number",
        setAsPrimaryLabel: "Set as primary",
        confirmLabel: "Confirm",
        backLabel: "Back",
        howIVerifyBankAccountLabel: "How can I verify my Bank Account?",
        createdMessagePart1: "Your bank account has been successfully registered, but it currently has a status of",
        unverifiedLabel: "Unverified",
        createdMessagePart2: "which means, you can't use it for any transaction inside our platform",
        createdMessagePart3: "In order to change the bank account status to \"Verified\", we've made 2 small deposits to that bank account so you can do the account validation. To validate the account, you must fill the corresponding ",
        formLabel: "form",
        createdMessagePart4: "with the exact amount of both deposits. If the information provided corresponds with the ones we have, then the Bank Account will now have a status of \"Verified\" which means, now is able for being use for any transaction inside our platform",
        thanksLabel: "Thanks for trusting us!",
        gotItLabel: "Got it!"
    }

    rules = {
        required: (value: any) => !!value || 'Required.',
        minAccountNumberLength: (value: string) => value.length > 8 || 'Account number must be at minimum 9 char length.',
        maxAccountNumberLength: (value: string) => value.length < 12 || 'Account number must be at maximum 12 char length.',
        minRoutingNumberLength: (value: string) => value.length > 8 || 'Routing number must be at minimum 9 char length.',
        maxRoutingNumberLength: (value: string) => value.length < 12 || 'Routing number must be at maximum 11 char length.',
        minCheckNumberLength: (value: string) => value.length > 2 || 'Check number must be at minimum 3 char length.',
        maxCheckNumberLength: (value: string) => value.length < 5 || 'Check number must be at maximum 4 char length.'
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
            this.$router.push({ name: 'home' }).catch((error) => {
                console.log(error);
            });      
          }      
        }
        else {
            this.bankAccountData.userID = this.userData.userID;
            this.bankAccountData.customer = this.userData.stripe_id;
            this.bankAccountData.customerConnectAccount = this.userData.stripe_connect_id;
            this.getAllBanks();
            this.obtainTerms();
        }
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
            this.texts = internationalizationService.bankAccountRegistration.translate(this.textsTranslated, this.texts);
        }
      }
      else {
        this.texts = internationalizationService.bankAccountRegistration.assignDefaultLabels();
      }      
    }

    async getTranslations(language: string){        
      try {
        const translations = await internationalizationService.getTermsTranslations(language);        
        if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
            this.textsTranslated = translations.data;
            this.texts = internationalizationService.bankAccountRegistration.translate(this.textsTranslated, this.texts);
            const parsedTerms = JSON.stringify(this.textsTranslated);
            localStorage.setItem('termsTranslated', parsedTerms);
        } 
      } catch (error) {
        console.log(error);
      }         
    }

    get getUserData() {
        return this.$store.getters["user/getUserData"];
    }

    async getAllBanks(){
        this.serverResponse = await bankService.getAllBanks();
        if(this.serverResponse.data !== 'No banks registered.'){
            this.banks = this.serverResponse.data;
        }
    }

    async getAvailableBankRoutingNumbers(){
        this.serverResponse = await bankService.getBankRoutingNumbers(this.bankAccountData.bank);
        if(this.serverResponse.data !== 'No routing numbers registered for bank.'){
            this.availableRoutingNumbers = this.serverResponse.data;
        }
    }

    @Watch('bankAccountData.bank')
    bankchanged(){
        this.getAvailableBankRoutingNumbers();
    }    

    checkData(){
        if(this.valid){
            this.bankAccountData.holderName = this.bankAccountData.holderName.toUpperCase();
            this.step = "2";
        } 
    }

    routingNumberIsValid(){
        for(let i = 0; i < this.availableRoutingNumbers.length; i++){
            if(this.availableRoutingNumbers[i].routingnumber === this.bankAccountData.routingNumber){
                return true;
            }
        }
        return false;
    }
    
    async saveBankAccount(){
        this.loading = true;
        if(!this.routingNumberIsValid()){
            this.loading = false;
            this.errorTittle = 'Error. Routing number is invalid.';
            this.errorDescription = "You've entered a routing number that doesn't belong to the bank selected. Please, change bank or routing number.";
            this.error = true;
        }
        else {
            this.serverResponse = await bankAccountService.saveBankAccount(this.bankAccountData);
            this.loading = false;
            if(this.serverResponse.data === 'Bank account already exists.'){               
                this.errorTittle = 'Error. Bank account already exists.';
                this.errorDescription = "You've entered a bank account that has already been registered before. If the problem persists, please contact us at: premileal@gmail.com";
                this.error = true; 
            }
            else if(this.serverResponse.data === 'Bank account created.'){
                this.step = "3";
            }
            else {
                this.errorTittle = 'Network Error!';
                this.errorDescription = 'There was a network error. Check your network connection and try again.';
                this.error = true;
            }
        }        
    } 

    restrictChars(event: any){
        if((event.charCode < 48 || event.charCode > 57) && event.charCode !== 45){
            event.preventDefault();
        }        
    }

    restrictNumbersAndSpecialCharacters(event: any){
      if((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 122) && event.charCode !== 32){
        event.preventDefault();
      }      
    }

    gotoValidationForm(){
      this.$router.push({name: 'userBankAccountVerification'});
    }

    backToForm(){
        this.error = false;
        this.step = "1";
    }

    gotoHome(){
        this.$router.push({ name: 'home' });
    }
    
}
</script>

<style src="./BankAccountRegistration.css" scoped></style>