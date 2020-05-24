<template>
    <v-app light>
        <div>
          <Navbar></Navbar>
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
                        <v-stepper-step :complete="step > 1" step="1">Enter information</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="step > 2" step="2">Confirm data</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">Verify Bank Account</v-stepper-step>
                    </v-stepper-header>
                    </v-col>
                    
                </v-row>
              

              <v-stepper-items>
                <v-stepper-content step="1">
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-bank</v-icon>
                    <h1 class="bottomSeparation subtittle">Bank Account Registration</h1>
                    
                    <v-form v-model="valid">
                      <v-row
                          align="center"
                          justify="center"
                      >
                          <v-col cols="10" sm="8" lg="4">
                              <v-autocomplete
                                  v-model="bankAccountData.bank"
                                  :items="banks"
                                  label="Bank*"
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
                                  label="Account holder name*"
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
                                  label="Account number*"
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
                                  label="Account Routing Number*"
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
                                  label="Account checking number*"
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
                        <v-checkbox v-model="bankAccountData.isPrimary" class="mx-2 noMarginTop" label="Set account as primary"></v-checkbox>
                    </v-row>
                    <v-btn
                      color="primary"
                      @click="checkData"
                    >
                      Save Bank Account
                    </v-btn>

                    <v-btn 
                        text
                        @click="gotoHome"
                    >
                        Cancel
                    </v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-shield-check-outline</v-icon>
                    <h1 class="bottomSeparation subtittle">You've entered</h1>
                    <v-card
                      class="mx-auto bottomSeparation"
                      max-width="500"
                    >
                      <v-list>
                        <v-list-item-group>
                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Bank: <b>{{bankAccountData.bank}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Account Number: <b>{{bankAccountData.accountNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Routing Number: <b>{{bankAccountData.routingNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Check Number: <b>{{bankAccountData.checkNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Set as primary: <b>{{bankAccountData.isPrimary}}</b></v-list-item-title>
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
                      Confirm
                    </v-btn>

                    <v-btn 
                      text
                      @click="step = 1"
                      :disabled="loading"
                    >Back</v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="3">                                    
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-thought-bubble</v-icon>
                    <h1 class="bottomSeparation subtittle">How can I verify my Bank Account?</h1>
                  
                    <p>Your bank account has been successfully registered, but it currently has a status of "<span style="color: red">Unverified</span>", which means, you can't use it for any transaction inside our platform.</p>
                    <p>In order to change the bank account status to "Verified", we've made 2 charges to that bank account so you can procced the account validation. In order to validate the account, you must fill the
                        corresponding <a @click="gotoValidationForm">form</a> with the exact amount of both charges. If the information provided corresponds with the ones we have, then the Bank Account will
                        now have a status of "Verified" which means, now is able for being use for any transaction inside our platform.
                    </p>
                    <p>Thanks for trusting us!</p>
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
        this.bankAccountData.userID = this.userData.userID;
        this.bankAccountData.customer = this.userData.stripe_id;
        this.bankAccountData.customerConnectAccount = this.userData.stripe_connect_id;
        this.getAllBanks();
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
            this.errorTittle = 'Error. Routing number is invalid';
            this.errorDescription = 'You\'ve entered a routing number that doesn\'t belong to the bank selected. Please, change bank or routing number.';
            this.error = true;
        }
        else {
            this.serverResponse = await bankAccountService.saveBankAccount(this.bankAccountData);
            this.loading = false;
            if(this.serverResponse.data === 'Bank account already exists.'){               
                this.errorTittle = 'Error. Bank account already exists.';
                this.errorDescription = 'You\'ve entered a bank account that has already been registered before. If the problem persists, please contact us at: premileal@gmail.com';
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