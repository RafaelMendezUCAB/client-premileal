<template>
    <v-app>
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
                        <h1 class="mainTittle">Points Adquisition</h1>                                                                      
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
                        >
                            <v-col>
                                <h1 class="subtittle">Add points</h1> 
                                <v-form v-model="valid">
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col cols="9" sm="6" md="6" lg="6">
                                            <v-text-field
                                                    v-model.number="transactionInformation.points"
                                                    label="Points"
                                                    outlined
                                                    style="margin-top:10%"
                                                    class="formBottomMargin"
                                                    :rules="[rules.required, rules.minimumPoints]"
                                                    v-on:keypress="restrictChars($event)"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>     
    
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col cols="9" sm="6" md="6" lg="6">
                                            <v-select
                                                v-model="transactionInformation.bankAccount.bank"
                                                outlined
                                                :items="items"                                            
                                                label="Bank Account"
                                                class="formBottomMargin"
                                                :rules="[rules.required]"
                                            ></v-select>
                                        </v-col>
                                    </v-row>  
                                </v-form>
                                <v-row
                                    align="center"
                                    justify="center"
                                >
                                    <v-col cols="4" sm="2" md="2" lg="2">
                                        <v-btn
                                          color="red"
                                          @click="gotoBackHome"
                                          style="margin-bottom:10%,"
                                        >                                            
                                            <span style="color:white">Cancel</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="4" sm="2" md="4" lg="2">
                                        <v-btn
                                          color="blue"
                                          @click="buyPoints"
                                          style="margin-bottom:10%,"
                                        >
                                            <span style="color:white">Pay</span>
                                        </v-btn>
                                    </v-col>
                                </v-row>                                                                                                                                                                                                              
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <div>
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col cols="11" lg="12" class="rightSeparationForTransactionInformation">
                                <h1 class="text-center subtittle">Transaction information</h1>  
                                <v-card
                                  class="mx-auto"
                                  max-width="344"
                                  style="margin-top: 5%"
                                >
                                  <v-card-text>
                                    <h2 class="text-center">Premileal C.A.</h2>
                                    <v-divider></v-divider>
                                    <br/>
                                    <div class="text--primary">
                                      <p>Transaction type: <b>Payment</b></p>
                                      <p>Description: <b>Points adquisition</b></p>
                                      <p>Points to acquire: <b>{{transactionInformation.points}}</b></p>
                                      <p>Bank account information:</p>
                                      <ul style="margin-top: -4%; margin-bottom: 4%">
                                          <li>Bank: <b>{{transactionInformation.bankAccount.bank}}</b></li>
                                          <li>Holder name: <b>{{transactionInformation.bankAccount.holderName}}</b></li>
                                          <li>Account number: <b>{{transactionInformation.bankAccount.AccountNumber}}</b></li>
                                      </ul>
                                      <p>Amount: <b>${{transactionInformation.amount}}</b></p>
                                      <p>Service commission: <b>${{transactionInformation.totalCommision}}</b></p>                                      
                                      <h2>Total: <b style="color: green">${{transactionInformation.total}}</b></h2>
                                    </div>
                                  </v-card-text>
                                  
                                </v-card>  
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col md="12" cols="12" lg="4">
                    <div>
                        <v-row
                            align="center"
                            justify="center"
                        >
                            
                            <v-col cols="10" lg="12" class="bordered rightSeparationForGuide">
                                <h1 class="text-center subtittle" style="margin-bottom: 5%">How it works?</h1>
                                <p>The following applies when buying products: </p>
                                <ul>
                                    <li>When buying points, a service commission is aggregated to the total amount.</li>
                                    <li>Points won't appear instantly in your account.</li>
                                    <li>Points take from 1 to 2 days to appear in your account.</li>
                                    <li>You'll receive an email with the payments especifications.</li>
                                    <li>You'll receive an email when the transaction has been successfully proccessed.</li>
                                </ul>  
                                <br/>
                                <h3>For any issues, please contact us by sending an email to: <span style="color: blue">support@premileal.com</span></h3>                              

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
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

import bankAccountService from "@/services/bankAccount/bankAccountService";
import settingsService from "@/services/settings/settingsService";
import paymentService from "@/services/payment/paymentService";
import keyInputService from "@/services/keyInput/keyInputService";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class PointsPurchase extends Vue{
    
    valid = false;
    
    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];    

    userData: any = null;
    settings: any = {
        serviceCommision: 0,
        gatewayCommision: 0,
        dolarValue: 0
    };

    transactionInformation = {
        points: 0,
        bankAccount: {
            bank: '',
            holderName: '',
            AccountNumber: ''
        },
        amount: 0.00,
        totalCommision: 0.00,
        serviceCommision: this.settings.serviceCommision,
        stripeCommision: this.settings.gatewayCommision,
        total: 0.00
    }

    userRegisteredBanks: any = [];

    rules = {
        required: (value: any) => !!value || 'Required.',
        minimumPoints: (value: number) => value > 4 || 'You can minimum adquire 5 points.'
    }

    mounted(){
        //this.userData = this.getUserData;
        //this.getUserbankAccounts();
        this.getSettings();
    }

    get getUserData() {
        return this.$store.getters["user/getUserData"];
    }
    
    async getSettings(){
        this.settings = await settingsService.getSettings();
    }

    async getUserbankAccounts(){
        this.userRegisteredBanks = await bankAccountService.getUserBankAccounts(this.userData.userID);
    }    

    @Watch('transactionInformation.points')
    onPropertyChanged(value: any, oldValue: any){
        this.transactionInformation.amount = paymentService.calculateAmout(this.transactionInformation.points, this.settings.dolarValue);
        this.transactionInformation.totalCommision = paymentService.calculateComision(this.transactionInformation.points, this.transactionInformation.amount, this.settings.serviceCommision, this.settings.gatewayCommision);
        this.transactionInformation.total = paymentService.calculateTotalAmount(this.transactionInformation.amount, this.transactionInformation.totalCommision);          
    } 

    restrictChars(event: any){
        keyInputService.restrictChars(event, this.transactionInformation.points);        
    }

    gotoBackHome(){
        this.$router.push({ name: 'home' });
    }

    buyPoints(){
        if(this.valid){
            console.log("buying points.");
        }
        else {
            console.log("fill everything");
        }    
    }

}
</script>

<style src="./PointsPurchase.css" scoped></style>