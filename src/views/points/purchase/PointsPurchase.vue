<template>
    <v-app>
        <v-content>
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

                                <v-row
                                    align="center"
                                    justify="center"
                                >
                                    <v-col cols="4" sm="2" md="2" lg="2">
                                        <v-btn
                                          color="red"
                                          @click="overlay = !overlay"
                                          style="margin-bottom:10%,"
                                        >                                            
                                            <span style="color:white">Cancel</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="4" sm="2" md="4" lg="2">
                                        <v-btn
                                          color="blue"
                                          @click="overlay = !overlay"
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
                                    <li>When buying products, a service commission is aggregated to the total amount.</li>
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

import Footer from '@/components/footer/Footer.vue';

@Component({
    components:{
        Footer
    }
})
export default class PointsPurchase extends Vue{
    
    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];

    icons = [
        'facebook',
        'twitter',        
        'instagram',
        'youtube',
    ];

    transactionInformation = {
        points: 0,
        bankAccount: {
            bank: '',
            holderName: 'Rafael Méndez',
            AccountNumber: '****9884'
        },
        amount: 0.00,
        totalCommision: 0.00,
        serviceCommision: 1.5,
        stripeCommision: 0.75,
        total: 0.00
    }

    valid = false;

    rules = {
        required: (value: any) => !!value || 'Required.',
        minimumPoints: (value: number) => value > 4 || 'You can minimum adquire 5 points.'
    }

    computed(){
        //this.transactionInformation.totalCommision = this.calculateComision();
    }

    roundOff(value: any, decimals: any) {
      return Number(Math.round(Number(value+'e'+decimals))+'e-'+decimals);
    }

    @Watch('transactionInformation.points')
    onPropertyChanged(value: any, oldValue: any){
        console.log("pago seria: ", (this.transactionInformation.points / 500).toFixed(3));
        //console.log("roundoff is: ", this.roundOff(this.transactionInformation.points / 500, 2));

        //this.transactionInformation.amount = this.roundOff(this.transactionInformation.points / 500, 2);

        //this.transactionInformation.amount = parseFloat(Number((this.transactionInformation.points / 500)).toFixed(2));
        this.transactionInformation.amount = (Math.round((this.transactionInformation.points / 500) * 100.0 )/ 100.0);
        this.transactionInformation.totalCommision = Math.round(this.calculateComision() * 100.0) / 100.0;
        this.transactionInformation.total = Math.round(this.calculateAmount() * 100.0) / 100.0;        
    }

    calculateAmount(){
        if(this.transactionInformation.amount !== 0){
            return this.transactionInformation.amount + this.transactionInformation.totalCommision;
        }
        return 0.00
    }

    calculateComision(){
        if(this.transactionInformation.points !== 0){
            return (this.transactionInformation.amount * this.transactionInformation.serviceCommision / 100) + this.transactionInformation.stripeCommision;
        }
        return 0.00;
    }

    restrictChars(event: any){
        if(event.charCode < 48 || event.charCode > 57 || this.transactionInformation.points > 100000){
            event.preventDefault();
        }        
    }

}
</script>

<style src="./PointsPurchase.css" scoped></style>