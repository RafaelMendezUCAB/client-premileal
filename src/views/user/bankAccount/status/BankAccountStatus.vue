<template>
    <v-app light>
        <v-content>
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 style="color:#119FF5">BANK ACCOUNT DETAILS</h1>
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
                                    <p>Bank Account Status: <b style="color: green;">Verified</b></p>                                      
                                  </v-card-text>                                
                                </v-card>

                                <v-btn
                                      color="primary"
                                      @click="step = 2"
                                      style="margin-bottom:10%"
                                    >
                                      Edit Bank Account
                                    </v-btn>

                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col cols="7">
                    <div class="text-center">
                        <v-row
                            align="center"
                            justify="center"
                        >
                            <v-col>
                                <h1 style="margin-bottom: 4%">Bank Account Movements</h1>

                                <v-card>
                                  <v-card-title>
                                    Nutrition
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
                                    loading loading-text="Loading... Please wait"
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

    loading = '';

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
    
}
</script>

<style src="./BankAccountStatus.css" scoped></style>