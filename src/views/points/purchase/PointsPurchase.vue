<template>
    <v-app>
        <div>
            <Navbar :userData="userData"></Navbar>
        </div>
        <v-content>            
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">{{texts.pointsAcquisitionLabel}}</h1>                                                                      
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
                                <h1 class="subtittle">{{texts.addPointsLabel}}</h1> 
                                <v-form v-model="valid">
                                    <v-row
                                        align="center"
                                        justify="center"
                                    >
                                        <v-col cols="9" sm="6" md="6" lg="6">
                                            <v-text-field
                                                v-model.number="transactionInformation.points"
                                                :label="texts.pointsLabel"
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
                                            <v-select return-object
                                                v-model="transactionInformation.bankAccount"
                                                outlined
                                                :items="userRegisteredBanks"                                            
                                                item-text="bank"
                                                item-value="item"
                                                :label="texts.bankAccountLabel"
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
                                            <span style="color:white">{{texts.cancelLabel}}</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="4" sm="2" md="4" lg="2">
                                        <v-btn
                                          color="blue"
                                          @click="buyPoints"
                                          style="margin-bottom:10%,"
                                        >
                                            <span style="color:white">{{texts.payLabel}}</span>
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
                                <h1 class="text-center subtittle">{{texts.transactionInformationLabel}}</h1>  
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
                                      <p>{{texts.transactionTypeLabel}}: <b>{{texts.paymentLabel}}</b></p>
                                      <p>{{texts.descriptionLabel}}: <b>{{texts.acquisitionPoinsLabel}}</b></p>
                                      <p>{{texts.pointsToAcquireLabel}}: <b>{{transactionInformation.points}}</b></p>
                                      <p>{{texts.bankAccountInformation}}:</p>
                                      <ul style="margin-top: -4%; margin-bottom: 4%">
                                          <li>{{texts.bankLabel}}: <b>{{transactionInformation.bankAccount.bank}}</b></li>
                                          <li>{{texts.accountHolderName}}: <b>{{transactionInformation.bankAccount.holderName}}</b></li>
                                          <li>{{texts.accountNumberLabel}}: <b>{{transactionInformation.bankAccount.accountNumber}}</b></li>
                                      </ul>
                                      <p>{{texts.amountLabel}}: <b>${{transactionInformation.amount}}</b></p>
                                      <p>{{texts.serviceCommissionLabel}}: <b>${{transactionInformation.totalCommision}}</b></p>                                      
                                      <h2>{{texts.totalCostLabel}}: <b style="color: green">${{transactionInformation.total}}</b></h2>
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
                                <h1 class="text-center subtittle" style="margin-bottom: 5%">{{texts.howItWorksLabel}}</h1>
                                <p>{{texts.whatAppliesWhenBuyingPointsLabel}}: </p>
                                <ul>
                                    <li>{{texts.serviceCommissionAggLabel}}.</li>
                                    <li>{{texts.pointsWontAppearInstantlyLabel}}.</li>
                                    <li>{{texts.pointsPurchaseDelayLabel}}.</li>
                                    <li>{{texts.purchaseEmailLabel}}.</li>
                                    <li>{{texts.proccessedPurchaseEmailLabel}}.</li>
                                </ul>  
                                <br/>
                                <h3>{{texts.contactUsForIssuesLabel}}: <span style="color: blue">premileal@gmail.com</span></h3>                              

                            </v-col>
                        </v-row>
                    </div>                                        
                </v-col>

                <v-row
                    align = "center"
                    justify="center"
                >
                    <v-col
                        align = "center"
                        justify="center"
                        cols="12"
                    >
                        <v-overlay                                  
                          :value="sendingPayment"
                        >
                            <v-card
                              max-width="344"
                              class="mx-auto"
                            >
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title class="headline">{{texts.proccessingPaymentLabel}}.</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>  
                              <v-progress-circular
                                :size="70"
                                :width="7"
                                color="primary"
                                indeterminate
                              ></v-progress-circular>                                                                        
                              <v-card-text>
                                {{texts.bePatientLabel}}.
                              </v-card-text>                                                                                                                
                            </v-card>                                  
                        </v-overlay>

                        <v-overlay                                  
                          :value="transactionFinished"
                        >
                            <v-card
                              max-width="500"
                              class="mx-auto"
                            >
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title class="headline">{{transactionTitle}}</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>                                                                                                               
                              <v-card-text>
                                <span>{{transactionDescription}}</span>
                              </v-card-text>                                                                          
                              <v-btn
                                  color="danger"
                                  @click="transactionFinished = false"
                                  style="margin-bottom: 2%"
                                >
                                  Ok
                              </v-btn> 
                              <v-btn
                                  color="success"
                                  @click="getInvoice"
                                  style="margin-bottom: 2%"
                                  v-if="paymentApproved"
                                >
                                  {{texts.downloadInvoiceLabel}}
                              </v-btn>                                  
                            </v-card>                              
                        </v-overlay>
                    </v-col>
                </v-row>

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
import internationalizationService from '@/services/internationalization/internationalizationService';

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';


@Component({
    components:{
        Footer,
        Navbar,
    }
})
export default class PointsPurchase extends Vue{
    
    valid = false;

    sendingPayment = false;
    transactionFinished = false;
    transactionTitle = '';
    transactionDescription = '';

    paymentApproved = false;
    
    items: any = [];    

    userData: any = null;
    
    settings: any = {
        serviceCommision: 0,
        gatewayCommision: 0,
        dolarValue: 0
    };

    transactionInformation = {
        userID: 0,
        userName: '',
        userEmail: '',
        customer: 0,
        points: 0,
        bankAccount: {
            bankAccountID: 0,
            bank: '',
            holderName: '',
            accountNumber: '',
            accountType: '',
            routingNumber: '',
            isPrimary: false,
            stripeID: '',
            stripeConnectID: ''
        },
        amount: 0.00,
        totalCommision: 0.00,
        serviceCommision: 0,
        stripeCommision: 0,
        total: 0.00,
        preferredLanguage: ''
    }

    userRegisteredBanks: any = [];

    serverResponse: any = null;

    textsTranslated: any = null;
    texts = {
        pointsAcquisitionLabel: "Points Acquisition",
        addPointsLabel: "Add points",
        pointsLabel: "Points",
        bankAccountLabel: "Bank Account",
        cancelLabel: "Cancel",
        payLabel: "Pay",
        transactionInformationLabel: "Transaction information",
        transactionTypeLabel: "Transaction type",
        paymentLabel: "Payment",
        descriptionLabel: "Description",
        acquisitionPoinsLabel: "Points acquisition",
        pointsToAcquireLabel: "Points to acquire",
        bankAccountInformation: "Bank account information",
        bankLabel: "Bank",
        accountHolderName: "Holder name",
        accountNumberLabel: "Account number",
        amountLabel: "Amount",
        serviceCommissionLabel: "Service commission",
        totalCostLabel: "Total",
        howItWorksLabel: "How it works?",
        whatAppliesWhenBuyingPointsLabel: "The following applies when buying points",
        serviceCommissionAggLabel: "When buying points, a service commission is aggregated to the total amount",
        pointsWontAppearInstantlyLabel: "Points won't appear instantly in your account",
        pointsPurchaseDelayLabel: "Points take from 1 to 2 days to appear in your account",
        purchaseEmailLabel: "You'll receive an email with the payments specifications",
        proccessedPurchaseEmailLabel: "You'll receive an email when the transaction has been successfully processed",
        contactUsForIssuesLabel: "For any issues, please contact us by sending an email to",
        proccessingPaymentLabel: "Processing payment",
        bePatientLabel: "This could take some time. Please, be patient",        
        paymentSuccessfullyProcessed: "Payment successfully processed!",
        paymentNotifiedLabel: "You'll be notified when payment has been approved",
        paymentRejectedLabel: "Error! Payment rejected.",
        usingBankAccountNotVerifiedLabel: "You are trying to use a bank account that has not been verified.",
        paymentRejectedDescriptionLabel: "An error ocurred. Your payment has been rejected.",
        downloadInvoiceLabel: "Download Invoice"
    }

    rules = {
        required: (value: any) => !!value || 'Required.',
        minimumPoints: (value: number) => value > 4 || 'You can minimum adquire 5 points.'
    }

    mounted(){
        this.userData = this.getUserData;

        if(this.userData.userID === undefined){
          const user = localStorage.getItem('userData');
          if(user){
            this.userData = JSON.parse(user);
            this.obtainTerms();
          }
          else {
            this.$router.push({ name: 'home' }).catch((error) => {
                console.log(error);
            });      
          }      
        }
        else {
            this.transactionInformation.userID = this.userData.userID;
            this.transactionInformation.userEmail = this.userData.email;
            this.transactionInformation.userName = this.userData.name;
            this.transactionInformation.customer = this.userData.stripe_id;
            this.transactionInformation.preferredLanguage = this.userData.preferredLanguage;
            this.getUserbankAccounts();
            this.getSettings();
            this.obtainTerms();
        }
        this.checkLanguage(); 
              
    }

    obtainTerms(){
      const terms = localStorage.getItem('termsTranslated');
      if(terms){
        try{
            this.textsTranslated = JSON.parse(terms);
        }catch(e){
            localStorage.removeItem('terms');
        }
      }
    }

    checkLanguage(){
      if(this.userData.preferredLanguage !== 'en-us'){
        this.getTranslations(this.userData.preferredLanguage);
        if(this.textsTranslated){
            this.texts = internationalizationService.pointsPurchase.translate(this.textsTranslated, this.texts);
        }
      }
      else {
        this.texts = internationalizationService.pointsPurchase.assignDefaultLabels();
      }      
    }

    async getTranslations(language: string){        
      try {
        const translations = await internationalizationService.getTermsTranslations(language);        
        if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
            this.textsTranslated = translations.data;
            this.texts = internationalizationService.pointsPurchase.translate(this.textsTranslated, this.texts);
            const parsedTerms = JSON.stringify(this.textsTranslated);
            localStorage.setItem('termsTranslated', parsedTerms);
        } 
      } catch (error) {
        console.log(error);
      }         
    }

    get getUserData() {
        return this.$store.getters["user/getUserData"];
    }
    
    async getSettings(){
        this.settings = await settingsService.getSettings();
        this.transactionInformation.serviceCommision =  this.settings.serviceCommision;
        this.transactionInformation.stripeCommision = this.settings.gatewayCommision;
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
        this.$router.push({ name: 'home' }).catch(error => {
          console.log(error);
        });
    }

    async buyPoints(){
        if(this.valid){            
            this.sendingPayment = true;
            try {
                this.serverResponse = await paymentService.buyPoints(this.transactionInformation);
                this.sendingPayment = false;
                if(this.serverResponse.data === "Points payment successfully proccessed."){                                        
                    /*this.userData.points = this.userData.points + this.transactionInformation.points;
                    this.$store.dispatch('user/addPoints', this.userData.points);  */
                    this.transactionTitle = this.texts.paymentSuccessfullyProcessed
                    this.transactionDescription = this.texts.paymentNotifiedLabel;   
                    this.paymentApproved = true;             
                }
                else if(this.serverResponse.data === "Bank account is not verified."){
                    this.transactionTitle = this.texts.paymentRejectedLabel;
                    this.transactionDescription = this.texts.usingBankAccountNotVerifiedLabel;
                }
                else {
                    this.transactionTitle = this.texts.paymentRejectedLabel;
                    this.transactionDescription = this.texts.paymentRejectedDescriptionLabel;
                }
                this.transactionFinished = true;
            } catch (error) {
                console.log("An error ocurred buying point: ", error);
            }            
        }
        else {
            console.log("Information is not complete.");
        }    
    }

    getInvoice(){
        const parsedPayment = JSON.stringify(this.transactionInformation);
        localStorage.setItem('paymentData', parsedPayment);
        const invoiceRoute = this.$router.resolve({ name: 'invoice' });                    
        this.paymentApproved = false;
        this.transactionFinished = false;
        window.open(invoiceRoute.href, '_blank');
    }

}
</script>

<style src="./PointsPurchase.css" scoped></style>