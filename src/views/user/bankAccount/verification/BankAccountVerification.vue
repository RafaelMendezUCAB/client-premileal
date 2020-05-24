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
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">BANK ACCOUNT VERIFICATION</h1>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>                              
                <v-col cols="12" md="6" lg="4" class="rightBorder">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                            class="rowBottomMargin"
                        >
                            <v-col>
                                <h1 class="subtittle bottomMargin">Bank Account Information</h1>

                                <v-row
                                    align="center"
                                    justify="center"
                                >
                                    <v-col cols="11" lg="12">
                                        <v-card                                                                  
                                          class="mx-auto my-12"
                                          max-width="374"
                                        >
                                          <v-img
                                            height="250"
                                            src="@/assets/banks/Citibank.png"
                                          ></v-img>                                  

                                          <v-card-text>                                    
                                            <p>Bank: <b>Citybank</b></p>  
                                            <p>Bank Account Number: <b>5899</b></p>  
                                            <p>Bank Account Routing Number: <b>41553370</b></p>  
                                            <p>Bank Account Checking Number: <b>0384</b></p>  
                                            <p v-if="bankAccount.status === 'Unverified'">Bank Account Status: <b style="color: red;">Unverified</b></p>  
                                            <p v-if="bankAccount.status === 'Verified'">Bank Account Status: <b style="color: green;">Verified</b></p>                             
                                          </v-card-text>                                
                                        </v-card>
                                    </v-col>
                                </v-row>                                

                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <div class="text-center elevated">
                        <v-row
                            align="center"
                            justify="center" 
                            class="rowBottomMargin"                           
                        >
                            
                            <v-col cols="11" lg="12" class="rightSeparationForTransactionInformation">
                                <h1 class="subtittle bottomMargin">Insert Amounts Here</h1>
                                <v-card                                                                  
                                  class="mx-auto my-12"
                                  max-width="374"
                                >    

                                    <v-form v-model="valid">
                                        <v-row
                                        align="center"
                                        justify="center"
                                        >
                                            <v-col cols="6" lg="8">
                                                <v-text-field
                                                    v-model="firstCharge"
                                                    label="First Charge"
                                                    outlined
                                                    
                                                    class="marginFirstChargeForm"
                                                    :rules="[rules.required, rules.validNumber]"
                                                    v-on:keypress="restrictChars($event, firstCharge)"
                                                    :disabled="notCharged"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>                                                                                                                                        

                                        <v-row
                                        align="center"
                                        justify="center"
                                        >
                                            <v-col cols="6" lg="8">
                                                <v-text-field
                                                    v-model="secondCharge"
                                                    label="Second Charge"
                                                    outlined
                                                    :rules="[rules.required, rules.validNumber]"
                                                    v-on:keypress="restrictChars($event, secondCharge)"
                                                    :disabled="notCharged"
                                                ></v-text-field>
                                            </v-col>                                                                                        
                                        </v-row>
                                        <v-row
                                            align="center"
                                            justify="center"
                                        >
                                            <v-col cols="12" lg="10" class="d-flex justify-center">
                                                <v-checkbox class="text-center"  style="margin-top: -6%;" label="I wasn't charged"  v-model="notCharged"></v-checkbox>                                                
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                  
                                    <v-btn
                                      color="primary"
                                      @click="verifyBankAccount"
                                      style="margin-bottom:10%"
                                    >
                                      Verify Bank Account
                                    </v-btn>
                                  
                                </v-card>  

                                <v-overlay
                                  
                                  :value="proccessingRequest"
                                >
                                    <v-card
                                      max-width="344"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{eventDescription}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>  

                                      <v-progress-circular
                                        :size="70"
                                        :width="7"
                                        color="primary"
                                        indeterminate
                                      ></v-progress-circular>                                                                        

                                      <v-card-text>
                                        This could take some time. Please, be patient.
                                      </v-card-text>                                       
                                    </v-card>
                                  
                                </v-overlay> 

                                <v-overlay                                  
                                  :value="userWasntCharged"
                                >
                                    <v-card
                                      max-width="400"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">What now?</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               

                                      <v-card-text>
                                        As you weren't charged, you have 2 options:
                                        <ol>
                                            <br/><li>You can notify us about the issue, so we get it touch with you ass soon as we can.</li><br/>
                                            <li>You can select to be charged again, making us charging again your bank account.</li>
                                        </ol>
                                      </v-card-text>   

                                      <v-btn
                                          color="success"
                                          @click="notifyPremileal"
                                          style="margin-bottom: 2%; margin-right: 1%"
                                        >
                                          Notify us
                                      </v-btn> 

                                      <v-btn
                                          color="danger"
                                          @click="chargeUserAgain"
                                          style="margin-bottom: 2%"
                                        >
                                          Charge me again
                                      </v-btn>                                                                                                                                                   
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
                                  :value="alreadyVerifiedMessage"
                                >
                                    <v-card
                                      max-width="500"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">Bank Account already verified!</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               
                                      <v-card-text>
                                        <span>There's no need to verify the bank account if it's already verified.</span>
                                      </v-card-text>                                                                          
                                      <v-btn
                                          color="success"
                                          @click="alreadyVerifiedMessage = false"
                                          style="margin-bottom: 2%"
                                        >
                                          Ok
                                      </v-btn>                                   
                                    </v-card>                              
                                </v-overlay>

                            </v-col>
                            
                        </v-row> 
                    </div>                   
                </v-col>
                <v-col md="12" cols="12" lg="4">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col cols="10" lg="12" class="bordered rightSeparationForGuide">
                                <h1 style="margin-bottom:5%" class="subtittle">Instructions</h1>
                                <h3>Step 1</h3><p>You must go to you bank account and see your balance. Two charges made from Premileal must appear, you must take note of both charges.</p>
                                <h3>Step 2</h3><p>insert each charge on each input and then click on verify. If amounts appear not to be correct, switch both and try again. You will only have 3 tries.</p>
                                <h3>Step 3</h3><p>If both amounts are correct, then, the bank account status will change to <span style="color:green">"Verified"</span> and you'll also be able to see it change on the left card shown.</p>
                                <h3 style="margin-top: 8%; margin-bottom: 2%;">Important!</h3>                                
                                <p>Insert the exact amount including decimals. Ex: 0.75</p>
                                <p>Remember charges could take days to appear in your bank account balance. Be patient.</p>
                                <p>If you mark that you weren't charged, then we will try making again 2 charges to you bank account. Make sure the transaction didn't take place.</p>
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

import bankAccountService from '@/services/bankAccount/bankAccountService';

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class BankAccountVerification extends Vue{
    
    valid = false;
    notCharged = false;
    errorAmount1 = '';
    errorAmount2 = '';

    firstCharge = '';
    secondCharge = '';

    userWasntCharged = false;
    alreadyVerifiedMessage = false;

    proccessingRequest = false;
    eventTitle = '';
    eventDescription = '';

    errorTittle = '';
    errorDescription = '';
    error = false;

    userData: any = null;
    bankAccount: any = {
        status: 'Verified'
    };

    serverResponse: any = null;

    mounted(){
        this.userData = this.getUserData;
    }

    get getUserData() {
        return this.$store.getters["user/getUserData"];
    }

    rules = {
        required: (value: any) => !!value || 'Required.',    
        validNumber: (value: string) => !!value && this.numberIsValid(value) || 'Invalid amount'
    }

    numberIsValid(value: string){
        const dotsCount = value.split(".");
        if(dotsCount.length === 2){
            if(dotsCount[1].length < 3 && dotsCount[1].length > 0){
                return true;
            }
        }
        else if(dotsCount.length === 1){
            return true;
        }
        return false;
    }

    restrictChars(event: any, value: string){
        if(((event.charCode < 48 || event.charCode > 57) && event.charCode !== 46) || value.length > 8){
            event.preventDefault();
        }        
    }

    async verifyBankAccount(){
        if(this.bankAccount.status === 'Unverified'){
            if(this.notCharged){            
            this.userWasntCharged = true;
            }
            else if(this.valid){
                this.eventDescription = 'Validating bank account.';
                this.proccessingRequest = true;
                this.serverResponse = await bankAccountService.verifyBankAccount(this.bankAccount.bankAccountID, {
                    bankAccount: this.bankAccount,
                    user: this.userData
                });
                this.proccessingRequest = false;
                if(this.serverResponse.data === 'Invalid amounts.'){
                    this.errorTittle = 'Error. Invalid amounts!';
                    this.errorDescription = 'The amounts you have entered didn\'t match with the ones we have. Please, try again.';
                    this.error = true;
                }
                else if(this.serverResponse.data === 'An error has ocurred.'){
                    this.errorTittle = 'Network Error!';
                    this.errorDescription = 'There was a network error. Check your network connection and try again.';
                    this.error = true; 
                }
                else {
                    console.log("Validating");
                    this.bankAccount.status = 'Verified';
                }
            }
            else{
                console.log("won't validate a shit");
            }
        }
        else {
            this.alreadyVerifiedMessage = true;
        }
    }

    notifyPremileal(){
        this.userWasntCharged = false;
        this.eventDescription = 'Sending notification.';
        this.proccessingRequest = true;
    }

    chargeUserAgain(){
        this.userWasntCharged = false;
        this.eventDescription = 'Charging Bank Account.';
        this.proccessingRequest = true;
    }
}
</script>

<style src="./BankAccountVerification.css" scoped></style>