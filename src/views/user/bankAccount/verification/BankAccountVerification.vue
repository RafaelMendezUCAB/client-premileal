<template>
    <v-app light>
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
                        <h1 class="mainTittle">{{texts.bankAccountVerificationLabel}}</h1>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row v-if="bankAccount !== null">                              
                <v-col cols="12" md="6" lg="4" class="rightBorder">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                            class="rowBottomMargin"
                        >
                            <v-col>
                                <h1 class="subtittle bottomMargin">{{texts.bankAccountInformation}}</h1>

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
                                            :src='require("@/assets/banks/"+bankAccount.bank+".png")'
                                          ></v-img>                                  

                                          <v-card-text>                                    
                                            <p>{{texts.bankLabel}}: <b>{{bankAccount.bank}}</b></p>  
                                            <p>{{texts.accountHolderName}}: <b>{{bankAccount.holderName}}</b></p>
                                            <p>{{texts.bankAccountNumberLabel}}: <b>{{bankAccount.accountNumber}}</b></p>  
                                            <p>{{texts.bankAccountRoutingNumberLabel}}: <b>{{bankAccount.routingNumber}}</b></p>  
                                            <p>{{texts.bankAccountCheckingNumberLabel}}: <b>{{bankAccount.checkNumber}}</b></p>  
                                            <p v-if="bankAccount.status === 'unverified'">{{texts.bankAccountStatus}}: <b style="color: red;">Unverified</b></p>  
                                            <p v-if="bankAccount.status === 'verified'">{{texts.bankAccountStatus}}: <b style="color: green;">Verified</b></p>                             
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
                                <h1 class="subtittle bottomMargin">{{texts.insertAmountHere}}</h1>
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
                                                    :label="texts.firstDepositLabel"
                                                    outlined
                                                    type="number"
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
                                                    :label="texts.secondDepositLabel"
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
                                                <v-checkbox class="text-center"  style="margin-top: -6%;" :label="texts.didntReceiveMoney"  v-model="notCharged"></v-checkbox>                                                
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                  
                                    <v-btn
                                      color="primary"
                                      @click="verifyBankAccount"
                                      style="margin-bottom:10%"
                                    >
                                      {{texts.verifyBankAccountLabel}}
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
                                        {{texts.bePatientLabel}}
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
                                          <v-list-item-title class="headline">{{texts.whatNowLabel}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               

                                      <v-card-text>
                                        {{texts.youHaveTwoOptionsLabel}}:
                                        <ol>
                                            <br/><li>{{texts.notifyUsOptionLabel}}.</li><br/>
                                            <li>{{texts.waitMoreTimeLabel}}.</li>
                                        </ol>
                                      </v-card-text>   

                                      <v-btn
                                          color="danger"
                                          @click="userWasntCharged = false"
                                          style="margin-bottom: 2%; margin-right: 1%"
                                        >
                                          {{texts.cancelLabel}}
                                      </v-btn> 

                                      <v-btn
                                          color="success"
                                          @click="notifyPremileal"
                                          style="margin-bottom: 2%"
                                        >
                                          {{texts.notifyUsLabel}}
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
                                          <v-list-item-title class="headline">{{texts.bankAccountAlreadyVerified}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               
                                      <v-card-text>
                                        <span>{{texts.noNeedToVerifyLabel}}.</span>
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

                                <v-overlay                                  
                                  :value="successfullValidation"
                                >
                                    <v-card
                                      max-width="500"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{texts.bankAccountSuccessfullyVerifiedLabel}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               
                                      <v-card-text>
                                        <span>{{texts.bankAccountVerifiedBenefits}}.</span>
                                      </v-card-text>                                                                          
                                      <v-btn
                                          color="success"
                                          @click="successfullValidation = false"
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
                                <h3>{{texts.step1Label}}</h3><p>{{texts.step1DescriptionLabel}}.</p>
                                <h3>{{texts.step2Label}}</h3><p>{{texts.step2DescriptionLabel}}.</p>
                                <h3>{{texts.step3Label}}</h3><p>{{texts.step3DescriptionLabelPar1}} <span style="color:green">"{{texts.verifiedLabel}}"</span> {{texts.step3DescriptionLabelPar2}}.</p>
                                <h3 style="margin-top: 8%; margin-bottom: 2%;">{{texts.importantLabel}}</h3>                                
                                <p>{{texts.exactAmountLabel}}</p>
                                <p>{{texts.depositsDelayLabel}}.</p>
                                <p>{{texts.makeSureNoDepositsLabel}}.</p>
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
import { Prop, Vue } from 'vue-property-decorator'
import Component from "vue-class-component";

import bankAccountService from '@/services/bankAccount/bankAccountService';
    import internationalizationService from '@/services/internationalization/internationalizationService';

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
    successfullValidation = false;

    proccessingRequest = false;
    eventTitle = '';
    eventDescription = '';

    errorTittle = '';
    errorDescription = '';
    error = false;

    userData: any = null;    

    serverResponse: any = null;

    bankAccount: any = null;

    textsTranslated: any = null;
    texts = {
      bankAccountVerificationLabel: "BANK ACCOUNT VERIFICATION",
      bankAccountInformation: "Bank Account Information",
      bankLabel: "Bank",
      accountHolderName: "Holder Name",
      bankAccountNumberLabel: "Bank Account Number",
      bankAccountRoutingNumberLabel: "Bank Account Routing Number",
      bankAccountCheckingNumberLabel: "Bank Account Checking Number",
      bankAccountStatus: "Bank Account Status",
      insertAmountHere: "Insert Amounts Here",
      firstDepositLabel: "First Deposit",
      secondDepositLabel: "Second Deposit",
      didntReceiveMoney: "I didn't received any money",
      verifyBankAccountLabel: "Verify Bank Account",
      bePatientLabel: "This could take some time. Please, be patient.",
      whatNowLabel: "What now?",
      youHaveTwoOptionsLabel: "As you didn't received money, you have 2 options",
      notifyUsOptionLabel: "You can notify us about the issue, so we get it touch with you ass soon as we can",
      waitMoreTimeLabel: "Wait more time just to make sure money will never get to you bank account",
      cancelLabel: "Cancel",
      notifyUsLabel: "Notify us",
      bankAccountAlreadyVerified: "Bank Account already verified!",
      noNeedToVerifyLabel: "There's no need to verify the bank account if it's already verified",
      bankAccountSuccessfullyVerifiedLabel: "Bank Account successfully verified!",
      bankAccountVerifiedBenefits: "Now you can use you bank account to buy points and retire money",
      step1Label: "Step 1",
      step1DescriptionLabel: "You must go to you bank account and see your balance. Two deposits made from Premileal must appear, you must take note of both amounts",
      step2Label: "Step 2",
      step2DescriptionLabel: "Insert each deposit on each input and then click on verify. If amounts appear not to be correct, switch both and try again. You will only have 3 tries",
      step3Label: "Step 3",
      step3DescriptionLabelPar1: "If both amounts are correct, then, the bank account status will change to",
      verifiedLabel: "Verified",
      step3DescriptionLabelPar2: "and you'll also be able to see it change on the left card shown",
      importantLabel: "Important!",
      exactAmountLabel: "Insert the exact amount including decimals. Ex: 0.75",
      depositsDelayLabel: "Remember deposits could take days to appear in your bank account balance. Be patient",
      makeSureNoDepositsLabel: "If you mark that you didn't received money, then you could notify us and we will get it touch with you as soon as we can. Make sure the transaction didn't take place"
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
            this.bankAccount = this.getBankAccountData;
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
            this.texts = internationalizationService.bankAccountVerification.translate(this.textsTranslated, this.texts);
        }
      }
      else {
        this.texts = internationalizationService.bankAccountVerification.assignDefaultLabels();
      }      
    }

    async getTranslations(language: string){        
      try {
        const translations = await internationalizationService.getTermsTranslations(language);        
        if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
            this.textsTranslated = translations.data;
            this.texts = internationalizationService.bankAccountVerification.translate(this.textsTranslated, this.texts);
            const parsedTerms = JSON.stringify(this.textsTranslated);
            localStorage.setItem('termsTranslated', parsedTerms);
        } 
      } catch (error) {
        console.log(error);
      }         
    }

    get getBankAccountData() {
        return this.$store.getters["bankAccount/getBankAccountData"];
    }

    get getUserData() {
      return this.$store.getters["user/getUserData"];
    }

    rules = {
        required: (value: any) => !!value || 'Required.',    
        validNumber: (value: string) => !!value && this.numberIsValid(value) || 'Invalid amount.'
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
        if(this.bankAccount.status === 'unverified'){
            if(this.notCharged){            
            this.userWasntCharged = true;
            }
            else if(this.valid){
                this.eventDescription = 'Validating bank account.';
                this.proccessingRequest = true;
                this.serverResponse = await bankAccountService.verifyBankAccount(this.bankAccount.bankAccountID, {
                    bankAccount: this.bankAccount,
                    user: this.userData,
                    firstCharge: this.firstCharge,
                    secondCharge: this.secondCharge
                });
                this.proccessingRequest = false;
                if(this.serverResponse.data === 'Invalid amounts.'){
                    this.errorTittle = 'Error. Invalid amounts!';
                    this.errorDescription = "The amounts you have entered didn't match with the ones we have. Please, try again.";
                    this.error = true;
                }
                else if(this.serverResponse.data === 'An error has ocurred.'){
                    this.errorTittle = 'Network Error!';
                    this.errorDescription = 'There was a network error. Check your network connection and try again.';
                    this.error = true; 
                }
                else {
                    console.log("Validating");
                    this.bankAccount.status = 'verified';
                    this.successfullValidation = true;   
                    this.$store.dispatch('bankAccount/setBankAccount', this.bankAccount);      
                }
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

    
}
</script>

<style src="./BankAccountVerification.css" scoped></style>