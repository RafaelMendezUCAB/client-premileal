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
                                            <p>Bank Account Status: <b style="color: red;">Unverified</b></p>                                      
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
                                <p>If you mark that you weren't charged, then we will try making again 2 charges to you bank account. Be sure the transaction didn't take place.</p>
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

    verifyBankAccount(){
        if(this.notCharged){
            console.log("show alert, then make the client pay again");
        }
        else if(this.valid){
            console.log("procced to validate bank account");
        }
        else{
            console.log("won't validate a shit");
        }
    }
}
</script>

<style src="./BankAccountVerification.css" scoped></style>