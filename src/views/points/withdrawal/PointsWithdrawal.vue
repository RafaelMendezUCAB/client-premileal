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
                        <h1 class="mainTittle">Money transfer</h1>                                                                      
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
                                <h1 style="margin-bottom: 4%" class="subtittle">Points to retire</h1> 

                                <h3>Points available to retire: <span style="color: green">{{this.transactionInformation.pointsAvailable}}</span></h3>
                                <h3>Points available after retire: <span style="color: red">{{this.transactionInformation.pointsAvailable - this.transactionInformation.points}}</span></h3>

                                <v-form v-model="valid">
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col cols="9" sm="6" md="6" lg="6">
                                            <v-text-field
                                                    v-model.number="transactionInformation.points"
                                                    label="Points to retire"
                                                    outlined
                                                    style="margin-top:10%"
                                                    type="number"
                                                    :rules="[rules.required, rules.points, rules.pointsMax]"
                                                    v-on:keypress="restrictChars($event)"                                                                                            
                                            ></v-text-field>
                                            <p style="margin-top: -3%">{{transactionInformation.points}} points are equivalent to ${{transactionInformation.amount}}</p>                                        
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
                                                class="formBottomMargin"
                                                :items="items"                                            
                                                label="Select Bank Account to transfer"
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
                                          
                                          style="margin-bottom:10%,"
                                        >                                            
                                            <span style="color:white">Cancel</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="4" sm="2" md="4" lg="2">
                                        <v-btn
                                          color="blue"
                                          @click="sendTransfer"
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
                                      <p>Transaction type: <b>Withdraw</b></p>
                                      <p>Description: <b>Points transfer in $</b></p>                                      
                                      <p>Bank account information:</p>
                                      <ul style="margin-top: -4%; margin-bottom: 4%">
                                          <li>Bank: <b>{{transactionInformation.bankAccount.bank}}</b></li>
                                          <li>Holder name: <b>{{transactionInformation.bankAccount.holderName}}</b></li>
                                          <li>Account number: <b>{{transactionInformation.bankAccount.AccountNumber}}</b></li>
                                      </ul>
                                      <p>Points to retire: <b>{{transactionInformation.points}}</b></p>
                                      <p>Points equivalent in dollars: <b>${{transactionInformation.amount}}</b></p>
                                      <p>Service commission: <b>${{transactionInformation.totalCommision}}</b></p>                                      
                                      <h2>Total cost: <b style="color: green">${{transactionInformation.total}}</b></h2>
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
                                <p>The following applies when transfering money: </p>
                                <ul>
                                    <li>You can only withdraw a maximun of <span style="color: green">1000000</span> points per transaction.</li>
                                    <li>When tranfering money, a service commission is aggregated to the total transfer.</li>
                                    <li>Transfers won't appear instantly in you bank account.</li>
                                    <li>Transactions may take from 2 to 5 days to appear in your bank account.</li>
                                    <li>You'll receive an email with the transaction specifications.</li>
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
import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class PointsWithdrawal extends Vue{

    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];

    transactionInformation = {
        points: 500,
        pointsAvailable: 2350,
        bankAccount: {
            bank: 'Citibank',
            holderName: 'Rafael Méndez',
            AccountNumber: '****9884'
        },
        amount: 1.00,
        totalCommision: 0.8,
        serviceCommision: 5,
        stripeCommision: 0.75,
        total: 0.2
    };

    valid = false;

    rules = {
        required: (value: any) => !!value || 'Required.',
        points: (points: number) => points > 499 || 'Minimum points to retire must be 500.',
        pointsMax: (points: number) => points <= this.transactionInformation.pointsAvailable || 'You don\'t have than many points available'        
    }    

    @Watch('transactionInformation.points')
    onPropertyChanged(value: any, oldValue: any){
        this.transactionInformation.amount = Math.round(this.calculatePointsEquivalentInDollars() * 100.0) / 100.0;
        this.transactionInformation.totalCommision = Math.round(this.calculateComision() * 100.0) / 100.0;
        this.transactionInformation.total = Math.round(this.calculateAmount() * 100.0) / 100.0;        
    }

    calculatePointsEquivalentInDollars(){
        return this.transactionInformation.points / 500;
    }

    calculateComision(){        
        if(this.transactionInformation.points !== 0){
            return (this.transactionInformation.amount * this.transactionInformation.serviceCommision / 100) + this.transactionInformation.stripeCommision;
        }
        return 0.00;
    }

    calculateAmount(){
        if(this.transactionInformation.amount !== 0){
            return this.transactionInformation.amount - this.transactionInformation.totalCommision;
        }
        return 0.00
    }
    
    restrictChars(event: any){
        if(event.charCode < 48 || event.charCode > 57 || this.transactionInformation.points > 100000){
            event.preventDefault();
        }        
    }

    sendTransfer(){
        console.log("valid is: ", this.valid);
        if(this.valid){
            console.log("sending transfer");
        }
        else {
            console.log("NOT sending transfer");
        }
    }
    
}
</script>

<style src="./PointsWithdrawal.css" scoped></style>