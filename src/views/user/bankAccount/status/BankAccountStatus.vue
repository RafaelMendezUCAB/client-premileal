<template>
    <v-app light>
        <v-content>
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">BANK ACCOUNT DETAILS</h1>
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
                            <v-col cols="11" lg="12">
                                <h1 class="subtittle marginBottom">Bank Account Information</h1>

                                <v-card                                
                                  class="mx-auto my-12"
                                  max-width="374"
                                >
                                  <v-img
                                    height="250"
                                    src="https://www.citibank.com.hk/views/images/citi-hk-logo.png"
                                  ></v-img>                                  

                                  <v-card-text>                                    
                                    <p>Bank: <b>Citybank</b></p>  
                                    <p>Bank Account Holder Name: <b>RAFAEL MENDEZ</b></p>
                                    <p>Bank Account Number: <b>5899</b></p>  
                                    <p>Bank Account Routing Number: <b>41553370</b></p>  
                                    <p>Bank Account Checking Number: <b>0384</b></p>  
                                    <p>Bank Account Status: <b style="color: green;">Verified</b></p>                                      
                                  </v-card-text>                                
                                </v-card>

                                <v-btn
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="editBankAccount"
                                    >
                                      Edit Bank Account
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
                                          <v-list-item-title class="headline">Bank account update</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>

                                      <v-card-text>
                                        Enter new bank account holder name.
                                      </v-card-text>

                                      <v-text-field                                                    
                                        label="Account Holder Name"
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
                                          Cancel
                                      </v-btn>
                                      
                                      <v-btn
                                          color="success"
                                          @click="updateBankAccountHolderName"
                                          style="margin-bottom: 2%"
                                        >
                                          Update
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
                                          <v-list-item-title class="headline">Are you sure?</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                          

                                      <v-card-text>
                                        By deleting a bank account, you won't be able to use it in our platform unless you register and validate it back again.
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
                                          Yes
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
                                        This could take some time. Please, be patient.
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
                                          <v-list-item-title class="headline" v-if="transactionDescription == 'Deleting bank account'">Bank account successfully deleted!</v-list-item-title>
                                          <v-list-item-title class="headline" v-if="transactionDescription == 'Updating Bank Account'">Bank account successfully updated!</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>                                                                                                               

                                      <v-card-text>
                                        <span v-if="transactionDescription == 'Deleting bank account'">your bank account has been deleted.</span>
                                        <span v-if="transactionDescription == 'Updating Bank Account'">your bank account has been updated.</span>
                                      </v-card-text>                                                                          

                                      <v-btn
                                          color="success"
                                          @click="closeWindow"
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
                                <h1 style="margin-bottom: 4%" class="subtittle topMargin">Bank Account Movements</h1>

                                <v-card>
                                  <v-card-title>
                                    Movements
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                      v-model="search"
                                      append-icon="mdi-magnify"
                                      label="Search"
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
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import Footer from '@/components/footer/Footer.vue';

@Component({
    components:{
        Footer
    }
})
export default class BankAccountStatus extends Vue{

    overlay = false;
    processingTransaction = false;    
    successfullTransaction = false;
    editingBankAccount = false;

    transactionDescription = '';
    
    icons = [
        'facebook',
        'twitter',        
        'instagram',
        'youtube',
    ];

    rules = {
        required: (value: any) => !!value || 'Required.',
    }

    search = '';

    headers = [
        {
            text: 'Type',
            align: 'start',
            sortable: false,
            value: 'type'
        },
        {
            text: 'Amount',
            value: 'amount'
        },
        {
            text: 'Date',
            value: 'date'
        },
        {
            text: 'Details',
            value: 'details'
        }
    ];

    movements = [
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$80.00',
            date: '05/04/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            amount: '$260.00',
            date: '04/28/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$25.50',
            date: '03/03/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            amount: '$175.50',
            date: '02/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Payment',
            amount: '$75.50',
            date: '05/14/2020',
            details: 'details'
        },
    ];

    seeDetails(){
        console.log("see details");
    }

    editBankAccount(){
      this.transactionDescription = 'Updating Bank Account';
      this.editingBankAccount = true;
    }

    updateBankAccountHolderName(){
      this.editingBankAccount = false;
      this.processingTransaction = true;
      setTimeout(() => {
          this.processingTransaction = false;
          this.successfullTransaction = true;
        }, 5000);
    }

    eliminateBankAccount(){
        console.log("users wants to delete bank account");
        this.transactionDescription = 'Deleting bank account';
        this.overlay = false;
        this.processingTransaction = true;
        setTimeout(() => {
          this.processingTransaction = false;
          this.successfullTransaction = true;
        }, 5000);
    }

    closeWindow(){
      this.transactionDescription = '',
      this.successfullTransaction = false;
      this.$router.push({name: 'registroCuentaBancaria'});
    }

    restrictNumbersAndSpecialCharacters(event: any){
      if((event.charCode < 65 || event.charCode > 90) && (event.charCode < 97 || event.charCode > 122) && event.charCode !== 32){
        event.preventDefault();
      }      
    }
    
}
</script>

<style src="./BankAccountStatus.css" scoped></style>