<template>
    <v-app light>
        <v-content>  
           
            <v-stepper v-model="step" class="noBoxShadow">
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col cols="8">
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
                    <v-icon size="60" color="#119FF5">mdi-bank</v-icon>
                    <h1 class="bottomSeparation">Bank Account Registration</h1>
                    
                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col cols="3">
                            <v-select
                                v-model="bankAccountData.bank"
                                :items="items"
                                label="Bank*"
                                outlined
                                :disabled="loading"
                              ></v-select>
                        </v-col>
                    </v-row>

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col cols="3">
                            <v-text-field   
                                v-model="bankAccountData.accountHolderName"                      
                                label="Account holder name*"
                                outlined                        
                                :disabled="loading"
                            ></v-text-field>
                            
                        </v-col>
                    </v-row>

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col cols="3">
                            <v-text-field   
                                v-model="bankAccountData.accountNumber"                      
                                label="Account number*"
                                outlined                        
                                :disabled="loading"
                            ></v-text-field>
                            
                        </v-col>
                    </v-row>

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col cols="3">
                            <v-text-field  
                                v-model="bankAccountData.routingNumber"                      
                                label="Account Routing Number*"
                                outlined                        
                                :disabled="loading"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row
                        align="center"
                        justify="center"
                    >
                        <v-col cols="3">
                            <v-text-field       
                                v-model="bankAccountData.checkNumber"                 
                                label="Account checking number*"
                                outlined                        
                                :disabled="loading"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row
                        align="center"
                        justify="center">
                        <v-checkbox v-model="bankAccountData.isPrimary" class="mx-2 noMarginTop" label="Set account as primary"></v-checkbox>
                    </v-row>
                    <v-btn
                      color="primary"
                      @click="step = 2"
                    >
                      Save Bank Account
                    </v-btn>

                    <v-btn text>Cancel</v-btn>
                  </div>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <div class="text-center">
                    <v-icon size="60" color="#119FF5">mdi-shield-check-outline</v-icon>
                    <h1 class="bottomSeparation">You've entered</h1>
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
                                    <v-list-item-title>Bank Account Holder Name: <b>{{bankAccountData.accountHolderName}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Bank Account Number: <b>{{bankAccountData.accountNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Bank Account Routing Number: <b>{{bankAccountData.routingNumber}}</b></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>                            
                                <v-list-item-content>
                                    <v-list-item-title>Bank Account Check Number: <b>{{bankAccountData.checkNumber}}</b></v-list-item-title>
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
                    <v-icon size="60" color="#119FF5">mdi-thought-bubble</v-icon>
                    <h1 class="bottomSeparation">How can I verify my Bank Account?</h1>
                  
                    <p>Your bank account has been successfully registered, but it currently has a status of "Unverided", which means, you can't use it for any transaction inside our platform.</p>
                    <p>In order to change the bank account status to "Verified", we've made 2 charges to that bank account so you can procced the account validation. In order to validate the account, you must fill the
                        corresponding <a href="www.google.com" _blank>form</a> with the exact amount of both charges. If the information provided corresponds with the ones we have, then the Bank Account will
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

    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];

    bankAccountData = {
        bank: '',
        accountHolderName: '',
        accountNumber: '',
        routingNumber: '',
        checkNumber: '',
        isPrimary: false
    }
    
    loader = '';
    loading = false; 
    step="1";

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
        this.loader = 'loading';
        console.log("data is: ", this.bankAccountData);
    } 
    
}
</script>

<style src="./BankAccountRegistration.css" scoped></style>