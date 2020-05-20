<template>
    <v-app light>
        <v-content>
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 style="color:#119FF5">BANK ACCOUNT VERIFICATION</h1>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>                              
                <v-col cols="4">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col>
                                <h1>Bank Account Information</h1>

                                <v-card                                
                                  :loading="loading"
                                  class="mx-auto my-12"
                                  max-width="374"
                                >
                                  <v-img
                                    height="250"
                                    src="https://www.citibank.com.hk/views/images/citi-hk-logo.png"
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
                    </div>
                </v-col>
                <v-col cols="4">
                    <div class="text-center elevated">
                        <v-row
                            align="center"
                            justify="center"                            
                        >
                            
                            <v-col>
                                <h1>Insert Amounts Here</h1>
                                <v-card                                
                                  :loading="loading"
                                  class="mx-auto my-12"
                                  max-width="374"
                                >                                                                    

                                    <v-row
                                    align="center"
                                    justify="center"
                                    >
                                        <v-col cols="10">
                                            <v-text-field
                                                label="First Charge"
                                                outlined
                                                style="margin-top:10%"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                                                                                                                                                               
                                    <v-row
                                    align="center"
                                    justify="center"
                                    >
                                        <v-col cols="10">
                                            <v-text-field
                                                label="Second Charge"
                                                outlined
                                            ></v-text-field>
                                        </v-col>
                                        <v-checkbox class="mx-2 " style="margin-top: -2%" label="I wasn't charged"></v-checkbox>
                                    </v-row>
                                  
                                    <v-btn
                                      color="primary"
                                      @click="step = 2"
                                      style="margin-bottom:10%"
                                    >
                                      Verify Bank Account
                                    </v-btn>
                                  
                                </v-card>   
                            </v-col>
                            
                        </v-row> 
                    </div>                   
                </v-col>
                <v-col cols="4">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col>
                                <h1 style="margin-bottom:5%">Instructions</h1>
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

@Component({
    components:{
        Footer
    }
})
export default class BankAccountVerification extends Vue{
    
}
</script>

<style src="./BankAccountVerification.css" scoped></style>