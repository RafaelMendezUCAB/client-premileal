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
                        <h1 class="mainTittle">PAYMENT HISTORY</h1>
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
                                    <v-avatar color="blue" size="100" v-if="userData !== null">                                                                   
                                      <img 
                                        :src="userData.image" 
                                        alt="Avatar" 
                                        v-if="userData.image !== undefined && userData.image !== ''"                                                         
                                      >
                                      <img 
                                        src="@/assets/icons/profile/no-image.png" 
                                        alt="Avatar"   
                                        v-else                          
                                      >
                                    </v-avatar>


                                  <v-card-text v-if="userData !== null">                                    
                                    <p>Name: <b>{{userData.name}}  {{userData.lastName}}</b></p>  
                                    <p>E-mail address: <b>{{userData.email}}</b></p>
                                    <p>Membership Level: <b style="color: amber;">{{userData.levelName}}</b></p>                                      
                                  </v-card-text>                                
                                </v-card>

                                <v-btn dark
                                      color="blue"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin mr-1"
                                      @click="gotoProfile"
                                    >
                                      See Profile
                                </v-btn>
                                <!--<v-btn
                                      color="primary"                                      
                                      style="margin-bottom:10%"
                                      class="topMargin"
                                      @click="gotoWithdrawalHistory"
                                    >
                                      Withdrawal History
                                </v-btn>        -->                        

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
                                <h1 style="margin-bottom: 4%" class="subtittle topMargin">YOUR PAYMENT HISTORY</h1>

                                <v-card>
                                  <v-card-title>
                                    Payments
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

import paymentService from '@/services/payment/paymentService';

@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class BankAccountStatus extends Vue{

    transactionDescription = '';
    userData: any = null;   

    serverResponse: any = null;

    rules = {
        required: (value: any) => !!value || 'Required.',
    }

    search = '';

    headers = [                                       
        {
            text: 'Bank',
            value: 'bankname'
        },         
        {
            text: 'Amount',
            value: 'amount'
        },  
        {
            text: 'Description',
            value: 'description'
        },                                                                      
        {
            text: 'Details',
            value: 'details'
        }
    ];

    movements: any = [];

    mounted(){
        this.userData = this.getUserData;
        this.getPaymentHistory();
    }

    get getUserData() {
      return this.$store.getters["user/getUserData"];
    }

    async getPaymentHistory(){
        try {
            this.serverResponse = await paymentService.getUserPayments(this.userData.userID);
            this.movements = this.serverResponse.data;
            this.movements.forEach((movement: any) => {
                movement.details = 'details';
            });
            console.log("movements: ", this.movements);
        } catch (error) {
            console.log(error);
        }
    }

    seeDetails(){
        console.log("see details");
    }
    
    gotoProfile(){
      this.$router.push({name: 'userProfile'}).catch(error => {
        console.log(error);
      });
    }

    gotoWithdrawalHistory(){
      this.$router.push({name: 'userWithdrawalHistory'}).catch(error => {
        console.log(error);
      });
    }
    
}
</script>

<style src="./Payment.css" scoped></style>