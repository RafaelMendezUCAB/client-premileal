<template>
    <v-app light>
        <v-content>  
           
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
                              <v-select
                                  v-model="bankAccountData.bank"
                                  :items="items"
                                  label="Bank*"
                                  outlined
                                  :disabled="loading"
                                  :rules="[rules.required]"                                
                                ></v-select>
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
                      @click="saveBankAccount"
                    >
                      Save Bank Account
                    </v-btn>

                    <v-btn text>Cancel</v-btn>
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
                      @click="loader = 'loading'"
                      :disabled="loading"
                      :loading="loading"
                    >
                      Confirm
                    </v-btn>

                    <v-btn 
                      text
                      @click="step = 1"
                    >Cancel</v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="3">                                    
                  <div class="text-center">
                    <v-icon color="#119FF5" class="bankIcon">mdi-thought-bubble</v-icon>
                    <h1 class="bottomSeparation subtittle">How can I verify my Bank Account?</h1>
                  
                    <p>Your bank account has been successfully registered, but it currently has a status of "Unverided", which means, you can't use it for any transaction inside our platform.</p>
                    <p>In order to change the bank account status to "Verified", we've made 2 charges to that bank account so you can procced the account validation. In order to validate the account, you must fill the
                        corresponding <a @click="gotoValidationForm">form</a> with the exact amount of both charges. If the information provided corresponds with the ones we have, then the Bank Account will
                        now have a status of "Verified" which means, now is able for being use for any transaction inside our platform.
                    </p>
                    <p>Thanks for trusting us!</p>
                    <v-btn
                      color="primary"
                      @click="step = 1"
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

@Component({
    components: {
        Footer
    }
})
export default class BankAccountRegistration extends Vue{

    loader = '';
    loading = false; 
    step="1";
    valid = false;
    
    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];

    bankAccountData = {
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
        minRoutingNumberLength: (value: string) => value.length > 11 || 'Routing number must be at minimum 12 char length.',
        maxRoutingNumberLength: (value: string) => value.length < 16 || 'Routing number must be at maximum 15 char length.',
        minCheckNumberLength: (value: string) => value.length > 2 || 'Check number must be at minimum 3 char length.',
        maxCheckNumberLength: (value: string) => value.length < 5 || 'Check number must be at maximum 4 char length.'
    }

    @Watch('loader')
    onPropertyChanged(value: any, oldValue: any){        
        switch(this.loader){
            case 'loading': 
                this.loading = true;

                setTimeout(() => {
                  this.loading = false;
                  this.loader = '';
                  this.step = "3";
                }, 3000);
                
                break;            
            default: break;
        }        
    }

    saveBankAccount(){
        if(this.valid){
        console.log("holder name is: ", this.bankAccountData.holderName.toUpperCase());
        this.step = "2";
      }
    } 

    restrictChars(event: any){
        if(event.charCode < 48 || event.charCode > 57){
            event.preventDefault();
        }        
    }

    restrictNumbersAndSpecialCharacters(event: any){
      if((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 122) && event.charCode !== 32){
        event.preventDefault();
      }      
    }

    gotoValidationForm(){
      this.$router.push({name: 'verificarCuentaBancaria'});
    }
    
}
</script>

<style src="./BankAccountRegistration.css" scoped></style>