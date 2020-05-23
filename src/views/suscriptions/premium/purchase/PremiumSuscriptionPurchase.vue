<template>
    <v-app>
        <v-content>
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">Suscription payment</h1>                                                                      
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
                                <h1 class="subtittle">Premium level</h1> 

                                <v-row
                                  align="center"
                                  justify="center"
                                >
                                  <v-col cols="11" lg="12">
                                    <v-card
                                      class="mx-auto"
                                      max-width="400"
                                    >
                                      <v-img
                                        class="white--text align-end"
                                        height="400px"
                                        src="@/assets/suscriptions/premium.png"
                                      >
                                        <v-card-title>Top 10 Australian beaches</v-card-title>
                                      </v-img>

                                      <v-card-subtitle class="pb-0">Premium</v-card-subtitle>

                                      <v-card-text class="text--primary">
                                        <div>Cost: $25</div>
                                        <p>When you become premium, we care you won't regret about it. That's why we give you 20% more point each time you buy points. Start gaining more! become PREMIUM now!</p>
                                      </v-card-text>

                                    </v-card>
                                  </v-col>
                                </v-row>                                  

                                <v-form v-model="valid">
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
                                              style="margin-top: 6%; margin-bottom: -8%"
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
                                          @click="cancelPayment"
                                          style="margin-bottom:10%,"
                                        >                                            
                                            <span style="color:white">Cancel</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="4" sm="2" md="4" lg="2">
                                        <v-btn
                                          color="blue"
                                          @click="paySuscription"
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
                                      <p>Description: <b>Level adquisition</b></p>
                                      <p>Level: <b>Premium</b></p>
                                      <p>Bank account information:</p>
                                      <ul style="margin-top: -4%; margin-bottom: 4%">
                                          <li>Bank: <b>{{transactionInformation.bankAccount.bank}}</b></li>
                                          <li>Holder name: <b>{{transactionInformation.bankAccount.holderName}}</b></li>
                                          <li>Account number: <b>{{transactionInformation.bankAccount.AccountNumber}}</b></li>
                                      </ul>
                                      <p>Cost: <b>${{transactionInformation.amount}}</b></p>
                                      <p>Service commission: <b>${{transactionInformation.totalCommision}}</b></p>                                      
                                      <h2>Total cost: <b style="color: green">${{transactionInformation.total}}</b></h2>
                                    </div>
                                  </v-card-text>
                                  
                                </v-card>  
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col offset="0" md="12" cols="12" lg="4">
                    <div>
                        <v-row
                            align="center"
                            justify="center"
                        >
                            
                            <v-col cols="10" lg="12" class="bordered rightSeparationForGuide">
                                <h1 class="text-center subtittle" style="margin-bottom: 5%">How it works?</h1>
                                <p>The following applies when buying products: </p>
                                <ul>
                                    <li>When acquiring a suscription, a service commission is aggregated to the cost.</li>
                                    <li>Suscripton won't be active instantly in your account.</li>
                                    <li>Suscriptions courld take from 1 to 2 days to be active in your account.</li>
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
export default class PremiumSuscriptionPurchase extends Vue{
    
    icons = [
        'facebook',
        'twitter',        
        'instagram',
        'youtube',
    ];

    items = [
        'Citibank',
        'Bank Of America',
        'CAF'
    ];

    transactionInformation = {
        points: 0,
        bankAccount: {
            bank: '',
            holderName: 'Rafael Méndez',
            AccountNumber: '****9884'
        },
        amount: 25.00,
        totalCommision: 0.00,
        serviceCommision: 1.5,
        stripeCommision: 0.75,
        total: 0.00
    };

    valid = false;

    rules = {
        required: (value: any) => !!value || 'Required.'        
    }

    mounted(){
        this.transactionInformation.totalCommision = Math.round(((this.transactionInformation.amount * this.transactionInformation.serviceCommision / 100) + this.transactionInformation.stripeCommision) * 100.0) / 100.0
        this.transactionInformation.total = Math.round((this.transactionInformation.amount + (this.transactionInformation.amount * this.transactionInformation.serviceCommision / 100) + this.transactionInformation.stripeCommision) * 100.0) /100.0;
    }

    @Watch('transactionInformation.points')
    onPropertyChanged(value: any, oldValue: any){
        this.transactionInformation.amount = this.transactionInformation.points;
        this.transactionInformation.totalCommision = this.calculateComision();
        this.transactionInformation.total = this.calculateAmount();        
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

    paySuscription(){
      if(this.valid){
        console.log("procced to pay suscription.");
      }
      else {
        console.log("Cannot procced with suscription payment.");
      }
    }

    cancelPayment(){
      console.log("payment being cancelled");
    }

}
</script>

<style src="./PremiumSuscriptionPurchase.css" scoped></style>