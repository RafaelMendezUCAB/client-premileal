<template>
    <v-app light>
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
                        <h1 class="mainTittle">WITHDRAWAL HISTORY</h1>
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
                                <h1 class="subtittle marginBottom">User Information</h1>

                                <v-card                                
                                  class="mx-auto my-12"
                                  max-width="374"
                                >
                                  <v-avatar color="transparent" size="100" tile>
                                    <!-- AQUI IRIA DONDE SE ALMACENA LA IMAGEN DEL USUARIO EN CASO DE TENERLA --> 
                                      <img src="@/assets/icons/profile/no-image.png" 
                                           alt="Avatar">
                                  </v-avatar>


                                  <v-card-text>                                    
                                    <p>Name: <b>GABRIEL TOVAR</b></p>  
                                    <p>E-mail: <b>GATOVAR.14@UCAB.EDU.VE</b></p>
                                    <p>Plan Membership Level: <b style="color: amber;">Gold</b></p>                                      
                                  </v-card-text>                                
                                </v-card>

                                <v-btn
                                      color="blue" dark                                   
                                      style="margin-bottom:10%"
                                      class="topMargin mr-1"
                                      @click="gotoProfile"
                                    >
                                      See Profile
                                </v-btn>
                                
                                <v-btn
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="gotoPaymentHistory"
                                    >
                                      Payment History
                                </v-btn>   

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
                                <h1 style="margin-bottom: 4%" class="subtittle topMargin">YOUR WITHDRAWAL HISTORY</h1>

                                <v-card>
                                  <v-card-title>
                                    Withdraws
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
import Navbar from '@/components/navbar/Navbar.vue';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class WithdrawalHistory extends Vue{

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
            text: 'ID',
            value: 'id'
        },                      
        {
            text: 'Plan Level',
            value: 'planLevel'
        },               
        {
            text: 'Points',
            value: 'amountPoints'
        },
        {
            text: 'Money',
            value: 'amountMoney'
        },  
        {
            text: 'Bank',
            value: 'bank'
        },                  
        {
            text: 'Time',
            value: 'time'
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
            type: 'Withdraw',
            id:'0001',
            planLevel:'Basic',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0002',
            planLevel:'Basic',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'JP MORGAN',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0003',
            planLevel:'Basic',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'Bank Of America',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0004',
            planLevel:'Basic',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0005',
            planLevel:'Basic',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0006',
            planLevel:'Premium',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0007',
            planLevel:'Premium',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0008',
            planLevel:'Premium',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0009',
            planLevel:'Premium',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'Wells Fargo',            
            time:'13:50',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0010',
            planLevel:'Gold',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'USBank',            
            time:'11:43',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0011',
            planLevel:'Gold',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'Goldman Sachs',            
            time:'16:00',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0012',
            planLevel:'Gold',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'18:30',
            date: '05/14/2020',
            details: 'details'
        },
        {
            type: 'Withdraw',
            id:'0013',
            planLevel:'Gold',
            amountPoints: '75',
            amountMoney: '$74.25',
            bank:'CitiBank',            
            time:'15:00',
            date: '05/14/2020',
            details: 'details'
        },
    ];

    seeDetails(){
        console.log("see details");
    }
    
    gotoProfile(){
      this.$router.push({name: 'userProfile'});
    }
    gotoPaymentHistory(){
      this.$router.push({name: 'userPaymentHistory'});
    }
    
}
</script>

<style src="./withdrawal.css" scoped></style>