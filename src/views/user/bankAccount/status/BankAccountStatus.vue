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
                        <h1 class="mainTittle">{{texts.bankAccountDetailsLabel}}</h1>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12" lg="4" class="rowSeparation">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                            class="rowBottomMargin"
                        >
                            <v-col cols="11" lg="12" v-if="bankAccount !== null">
                                <h1 class="subtittle marginBottom">{{texts.bankAccountInformation}}</h1>

                                <v-card                                
                                  class="mx-auto my-12"
                                  max-width="374"
                                >
                                  <v-img
                                    height="250"
                                    :src='require("@/assets/banks/"+bankAccount.bank+".png")'                                  
                                    v-if="bankAccount !== null"
                                  ></v-img>                                  

                                  <v-card-text>                                    
                                    <p>{{texts.bankLabel}}: <b>{{bankAccount.bank}}</b></p>  
                                    <p>{{texts.accountHolderName}}: <b>{{bankAccount.holderName}}</b></p>
                                    <p>{{texts.accountNumberLabel}}: <b>{{bankAccount.accountNumber}}</b></p>  
                                    <p>{{texts.accountRoutingNumberLabel}}: <b>{{bankAccount.routingNumber}}</b></p>  
                                    <p>{{texts.accountCheckNumberLabel}}: <b>{{bankAccount.checkNumber}}</b></p>  
                                    <p v-if="bankAccount.status === 'verified'">{{texts.bankAccountStatus}}: <b style="color: green;">{{bankAccount.status}}</b></p>                                      
                                    <p v-if="bankAccount.status === 'unverified'">{{texts.bankAccountStatus}}: <b style="color: red;">{{bankAccount.status}}</b></p> 
                                    <p>Is primary: <b v-if="bankAccount.isPrimary">{{texts.yesLabel}}</b><b v-if="!bankAccount.isPrimary">No</b></p>
                                    <v-btn           
                                      v-if="!bankAccount.isPrimary"                           
                                      color="primary"                                      
                                      style="margin-bottom:10%"                                      
                                      @click="assignAsPrimary"
                                    >
                                      {{texts.assignAsPrimaryLabel}}
                                    </v-btn>                           
                                  </v-card-text>                                
                                </v-card>

                                <v-btn
                                      v-if="bankAccount.status === 'verified'"
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="editBankAccount"
                                    >
                                      {{texts.editBankAccontLabel}}
                                </v-btn>

                                <v-btn
                                      v-if="bankAccount.status === 'unverified'"
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="verifyBankAccount"
                                    >
                                      {{texts.verifyBankAccountLabel}}
                                </v-btn>

                                <v-btn
                                      color="red"
                                      @click="overlay = !overlay"
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                    >
                                      <v-icon style="color: white">mdi-trash-can-outline</v-icon>
                                </v-btn>

                                <v-overlay                                  
                                  :value="editingBankAccount"
                                >
                                    <v-card
                                      max-width="600"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{texts.bankAccountUpdateLabel}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>

                                      <v-card-text>
                                        {{texts.newBankAccountHolderNameLabel}}.
                                      </v-card-text>

                                      <v-text-field   
                                        v-model="newHolderName"                                                 
                                        :label="texts.accountHolderName"
                                        outlined
                                        style="padding-left: 2%; padding-right: 2%"   
                                        :rules="[rules.required]"
                                        v-on:keypress="restrictNumbersAndSpecialCharacters($event)"                                         
                                      ></v-text-field>                                                                                                                                                                                                                               

                                      <v-btn
                                          color="danger"
                                          @click="editingBankAccount = false"
                                          style="margin-bottom: 2%"                                          
                                        >
                                          {{texts.cancelLabel}}
                                      </v-btn>
                                      
                                      <v-btn
                                          color="success"
                                          @click="updateBankAccountHolderName"
                                          style="margin-bottom: 2%"
                                        >
                                          {{texts.updateLabel}}
                                      </v-btn>                                      
                                       
                                    </v-card>
                                  
                                </v-overlay>

                                <v-overlay
                                  
                                  :value="overlay"
                                >
                                    <v-card
                                      max-width="344"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{texts.areYouSureLabel}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                          

                                      <v-card-text>
                                        {{texts.deletingBankAccountDescriptionLabel}}.
                                      </v-card-text>

                                      
                                      <v-btn
                                          color="danger"
                                          @click="overlay = false"
                                          style="padding: 5px; margin-bottom: 2%"
                                        >
                                          No
                                       </v-btn>

                                       <v-btn
                                          color="success"
                                          @click="eliminateBankAccount"
                                          style="margin-bottom: 2%"
                                        >
                                          {{texts.yesLabel}}
                                       </v-btn>
                                    </v-card>
                                  
                                </v-overlay>

                                <v-overlay
                                  
                                  :value="processingTransaction"
                                >
                                    <v-card
                                      max-width="344"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{transactionDescription}}</v-list-item-title>
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
                                  
                                  :value="successfullTransaction"
                                >
                                    <v-card
                                      max-width="500"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline" v-if="transactionDescription === texts.deletingBankAccountLabel">{{texts.bankAccountSuccessfullyDelete}}</v-list-item-title>
                                          <v-list-item-title class="headline" v-if="transactionDescription === texts.updatingBankAccountLabel">{{texts.bankAccountSuccessfullyUpdated}}</v-list-item-title>
                                          <v-list-item-title class="headline" v-if="transactionDescription === texts.settingPrimaryBankAccountLabel">{{texts.bankAccountSuccessfullyUpdated}}</v-list-item-title>
                                          <v-list-item-title class="headline" v-if="transactionDescription === texts.errorUpdatingBankAccount">{{texts.errorUpdatingBankAccount}}</v-list-item-title>
                                          <v-list-item-title class="headline" v-if="transactionDescription === texts.bankAccountNotDeletedLabel">{{texts.bankAccountNotDeletedLabel}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               

                                      <v-card-text>
                                        <span v-if="transactionDescription == texts.deletingBankAccountLabel">{{texts.bankAccountDeletedLabel}}.</span>
                                        <span v-if="transactionDescription == texts.updatingBankAccountLabel || transactionDescription == texts.settingPrimaryBankAccountLabel">{{texts.bankAccountUpdatedLabel}}.</span>
                                        <!--<span v-if="transactionDescription == texts.settingPrimaryBankAccountLabel">{{texts.bankAccountUpdatedLabel}}.</span>-->                                        
                                      </v-card-text>                                                                          

                                      <v-btn
                                          color="success"
                                          @click="successfullTransaction = false"
                                          style="margin-bottom: 2%"
                                        >
                                          Ok
                                      </v-btn>
                                       
                                    </v-card>
                                  
                                </v-overlay>

                                <v-overlay
                                  
                                  :value="bankAccountDeleted"
                                >
                                    <v-card
                                      max-width="500"
                                      class="mx-auto"
                                    >
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title class="headline">{{texts.bankAccountSuccessfullyDelete}}</v-list-item-title>                                          
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               

                                      <v-card-text>
                                        <span>{{texts.bankAccountDeletedLabel}}.</span>                                      
                                      </v-card-text>                                                                          

                                      <v-btn
                                          color="success"
                                          @click="gotoProfile"
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
                <v-col cols="12" lg="7">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"                            
                        >
                            <v-col cols="11" lg="12">
                                <h1 style="margin-bottom: 4%" class="subtittle topMargin">{{texts.bankAccountMovements}}</h1>

                                <v-card>
                                  <v-card-title>
                                    {{texts.movementsLabel}}
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                      v-model="search"
                                      append-icon="mdi-magnify"
                                      :label="texts.searchLabel"
                                      single-line
                                      hide-details
                                    ></v-text-field>
                                  </v-card-title>
                                  <v-data-table
                                    :headers="headers"
                                    :items="movements"
                                    :search="search"                                    
                                  >
                                    <template v-slot:item.details="{ item }">
                                      <v-icon
                                        @click="seeDetails(item)"
                                        >
                                        mdi-feature-search
                                        </v-icon>
                                    </template>
                                  </v-data-table>
                                </v-card>

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
import {Vue, Prop} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

import internationalizationService from '@/services/internationalization/internationalizationService';
import bankAccountService from '@/services/bankAccount/bankAccountService';
import bankService from '../../../../services/bank/bankService';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class BankAccountStatus extends Vue{

    overlay = false;
    processingTransaction = false;    
    successfullTransaction = false;
    editingBankAccount = false;
    bankAccountDeleted = false;

    transactionDescription = '';
    
    bankAccount: any = null;

    bankLogo = '';

    userData: any = null;
    serverResponse: any = null;
    newHolderName = '';

    rules = {
      required: (value: any) => !!value || 'Required.',
    }

    search = '';

    headers = [
        {
            text: 'Amount',
            align: 'start',
            sortable: false,
            value: 'pay_amount'
        },
        {
            text: 'Description',
            value: 'pay_description'
        },
        {
            text: 'Date',
            value: 'hs_date'
        },
        {
            text: 'Details',
            value: 'details'
        }
    ];

    movements: any = [];

    textsTranslated: any = null;
    texts = {
      bankAccountDetailsLabel: "BANK ACCOUNT DETAILS",
      bankAccountInformation: "Bank Account Information",
      bankLabel: "Bank",
      accountHolderName: "Bank Account Holder Name",
      accountNumberLabel: "Bank Account Number",
      accountRoutingNumberLabel: "Bank Account Routing Number",
      accountCheckNumberLabel: "Bank Account Checking Number",
      bankAccountStatus: "Bank Account Status",
      editBankAccontLabel: "Edit Bank Account",
      verifyBankAccountLabel: "Verify bank account",
      bankAccountUpdateLabel: "Bank account update",
      newBankAccountHolderNameLabel: "Enter new bank account holder name",
      cancelLabel: "Cancel",
      updateLabel: "Update",
      areYouSureLabel: "Are you sure?",
      deletingBankAccountDescriptionLabel: "By deleting a bank account, you won't be able to use it in our platform unless you register and validate it back again",
      yesLabel: "Yes",
      bePatientLabel: "This could take some time. Please, be patient.",
      bankAccountSuccessfullyDelete: "Bank account successfully deleted!",
      bankAccountSuccessfullyUpdated: "Bank account successfully updated!",
      bankAccountDeletedLabel: "your bank account has been deleted",
      bankAccountUpdatedLabel: "your bank account has been updated",
      bankAccountMovements: "Bank Account Movements",
      movementsLabel: "Movements",
      searchLabel: "Search",      
      deletingBankAccountLabel: "Deleting bank account.",
      settingPrimaryBankAccountLabel: "Setting bank account as primary.",
      updatingBankAccountLabel: "Updating Bank Account.",
      errorUpdatingBankAccount: "Error. bank account couldn't be updated!",
      assignAsPrimaryLabel: "Assign as primary account",
      bankAccountNotDeletedLabel: "Bank account couldn't be deleted."
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
        this.getBankAccountStatus();
        console.log(this.bankAccount);
        this.obtainTerms();
      }
      this.checkLanguage();                
    }

    async getBankAccountStatus(){
      try {
        this.serverResponse = await bankAccountService.getBankAccountStatus(this.bankAccount.bankAccountID);
        this.movements = this.serverResponse.data.movements;
        this.movements.forEach((movement: any) => {
          movement.details = 'details';
        });
      } catch (error) {
        console.log("An error ocurred getting bank account status: ", error);
      }
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
            this.texts = internationalizationService.bankAccountStatus.translate(this.textsTranslated, this.texts);
        }
      }
      else {
        this.texts = internationalizationService.bankAccountStatus.assignDefaultLabels();
      }      
    }

    async getTranslations(language: string){        
      try {
        const translations = await internationalizationService.getTermsTranslations(language);        
        if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
            this.textsTranslated = translations.data;
            this.texts = internationalizationService.bankAccountStatus.translate(this.textsTranslated, this.texts);
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

    seeDetails(){
        console.log("see details");
    }

    editBankAccount(){
      this.transactionDescription = this.texts.updatingBankAccountLabel;
      this.editingBankAccount = true;
    }

    async updateBankAccountHolderName(){
      this.editingBankAccount = false;
      this.processingTransaction = true;
      this.bankAccount.holderName = this.newHolderName;
      try {
        this.serverResponse = await bankAccountService.updateBankAccount(this.bankAccount.bankAccountID, {
          bankAccount: this.bankAccount,
          userData: this.userData
        });
        this.processingTransaction = false;
        if(this.serverResponse.data === 'Bank Account successfully updated.'){
          this.bankAccount.holderName = this.newHolderName;
        }
        else {
          this.transactionDescription = this.texts.errorUpdatingBankAccount;
        }
        this.successfullTransaction = true;
      } catch (error) {
        console.log("An error ocurred while updating bank account: ", error);
      }      
    }

    async eliminateBankAccount(){
        this.transactionDescription = this.texts.deletingBankAccountLabel;
        this.overlay = false;
        this.processingTransaction = true;
        try {
          this.serverResponse = await bankAccountService.deleteBankAccount(this.bankAccount.bankAccountID, this.bankAccount);
          this.processingTransaction = false;
          if(this.serverResponse.data === "Bank Account successfully deleted."){
            this.bankAccountDeleted = true;
          }
          else {
            this.transactionDescription = this.texts.bankAccountNotDeletedLabel;
            this.successfullTransaction = true;
          }          
        } catch (error) {
          console.log(error);
        }

        setTimeout(() => {
          this.processingTransaction = false;
          this.successfullTransaction = true;
        }, 5000);
    }

    closeWindow(){
      this.transactionDescription = '',
      this.successfullTransaction = false;
      this.$router.push({name: 'registroCuentaBancaria'}).catch(error => {
        console.log(error);
      });
    }

    restrictNumbersAndSpecialCharacters(event: any){
      if((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 122) && event.charCode !== 32){
        event.preventDefault();
      }      
    }

    verifyBankAccount(){
      this.$router.push({ name: 'userBankAccountVerification' }).catch(error => {
        console.log(error);
      });
    }   

    async assignAsPrimary(){
      try {
        this.transactionDescription = this.texts.settingPrimaryBankAccountLabel;
        this.processingTransaction= true;
        this.serverResponse = await bankAccountService.setBankAccountAsPrimary(this.bankAccount.bankAccountID, this.userData.userID);
        this.processingTransaction = false;
        if(this.serverResponse.data === "Bank Account now is primary."){
          this.bankAccount.isPrimary = true;                    
        }
        else {
          this.transactionDescription = this.texts.errorUpdatingBankAccount;
        }
        this.successfullTransaction = true;
      } catch (error) {
        console.log("An error ocurred assigning bank account as primary: ", error);
      }
    }

    gotoProfile(){
      this.bankAccountDeleted = false;
      this.$router.push({ name: "userProfile" }).catch((error) => {
        console.log(error);
      })
    }
    
}
</script>

<style src="./BankAccountStatus.css" scoped></style>