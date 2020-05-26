<template>
  <v-app>
      <Navbar></Navbar>
      <v-content>
          <v-row
              align="center"
              justify="center"
          >
              <v-col cols="12">
                  <div class="text-center">
                      <h1 class="pageTitle">PROFILE SETTINGS</h1>
                  </div>
              </v-col>
          </v-row>
          <v-divider style="margin-bottom: -2%"></v-divider>
          <div class="text-center">
            <v-row>
              <v-col cols=12 lg="4">
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="11" lg="11">

                    <div class="pt-8 " align="center" justify="center">
                      <v-icon class="iconSize" color="blue">mdi-account-circle</v-icon>
                      <h1 class="mr-2 mainTitle titleSize">User Profile</h1>
                    </div>
                    
                    <v-card                      
                      color="grey lighten-5"
                      class="mx-auto cardForm"
                      max-width="374"
                    >
                      <v-card-text>
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
                        

                        <span v-if="userData !== null">
                        <v-text-field 
                          v-model="userData.name"
                          class="fontSize"
                          label="Name"
                          prepend-icon= "mdi-account"                        
                        >                                            
                        </v-text-field>
                        <v-text-field 
                          v-model="userData.lastName"
                          class="fontSize"
                          label="Last Name"
                          prepend-icon= "mdi-ab-testing"                        
                        >
                        </v-text-field>
                        <v-text-field 
                          v-model="userData.password"
                          class="fontSize"
                          label="Password"
                          :type= "showPassword1 ? 'text' : 'password'" 
                          :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                          prepend-icon= "mdi-lock"
                          @click:append="showPassword1 = !showPassword1"  
                          :disabled="userData.password === ''"                                                               
                        >
                        </v-text-field>                             
                        <v-text-field 
                          v-model="userData.email"
                          class="fontSize"
                          label="E-Mail"
                          prepend-icon= "mdi-at"
                          :disabled="userData.type !== 'No Federado'"                        
                        >
                        </v-text-field> 
                        <v-text-field 
                          v-model="userData.birthdate"
                          class="fontSize"
                          label="Birth Date"
                          prepend-icon= "mdi-calendar-blank-outline"                        
                          type="date"
                        >
                        </v-text-field> 
                        <v-text-field 
                          v-model="userData.placeID"
                          class="fontSize"
                          label="Country"
                          prepend-icon= "mdi-map-marker"                                                                            
                        >
                        </v-text-field>                            
                        <p>Membership Level: <b>{{userData.levelName}}</b> </p>
                        <p>Points available: <b style="color: green; font-size:20px">{{userData.points}}</b> </p>

                        <v-btn
                          color="primary"
                          @click="updateUser"
                          style="margin-bottom: 2%"                                          
                        >
                          Update user
                        </v-btn>

                      </span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols=12 lg="7">
                <div class="text-center">
                  <v-row
                    align="center"
                    justify="center"                            
                  >
                    <v-col cols="11" lg="12">
                      <div class="pt-10">
                        <v-icon class="iconSize" color="blue">mdi-bank</v-icon>
                        <h1 class="mainTitle titleSize">Bank Accounts</h1>
                      </div> 
                      <v-card>
                        <v-card-title class="subtittle">
                          Registered Banks
                        </v-card-title>
                        <v-data-table 
                          class="fontSize"
                          :headers="headers"
                          :items="userBankAccounts"
                        >
                          <template v-slot:item.details="{ item }">
                            <v-icon
                                @click="seeDetails(item)"
                            >
                              mdi-feature-search
                            </v-icon>
                          </template>  
                          <template v-slot:item.accountStatus="{ item }">
                            <span v-if="item.accountStatus === 'verified'">
                              <span style="color: green">Verified</span>
                            </span>
                            <span v-if="item.accountStatus === 'unverified'">
                              <span style="color: red">Unverified</span> 
                            </span>
                          </template>                    
                        </v-data-table>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        
      </v-content>
      <Footer></Footer>
    </v-app>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

import userService from '../../../services/user/userService';
import bankAccountService from '@/services/bankAccount/bankAccountService';

/* --- Services --- */


/* --- Types --- */


@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class UserProfile extends Vue{

  userData: any = null;
  userBankAccounts: any = [];
  bankAccountsData: any = [];
  bankAccount: any = null;

  serverResponse: any = null;

  headers = [
    {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'bankAccountID'
    },
    {
        text: 'Bank',        
        value: 'bankName'
    },
    {
        text:'Account Number',
        value:'accountNumber',
    },        
    {
        text:'Status',
        value: 'accountStatus',
    },
    {
        text:'Details',
        value: 'details',
    }    
  ];

  movements = [
    {
      bankName:'Bank of America',
      accountNumber:'5801',            
      accountStatus:'Verified',
      details:'details'
    },
    {
      bankName:'CityBank',
      accountNumber:'5899',            
      accountStatus:'Unverified',
      details:'details'
    },
    {
      bankName:'U.S. Bank',
      accountNumber:'5803',            
      accountStatus:'Unverified',
      details:'details'
    },
    {
      bankName:'Wells Fargo',
      accountNumber:'5806',            
      accountStatus:'Verified',
      details:'details'
    },
    {
      bankName:'BNY Mellon',
      accountNumber:'5804',            
      accountStatus:'Unverified',
      details:'details'
    },  
    {
      bankName:'JP Morgan',
      accountNumber:'5810',            
      accountStatus:'Unverified',
      details:'details'
    },           
  ];

  showPassword1 = false;

  mounted(){
    this.userData = this.getUserData;
    console.log("user retrieved: ", this.userData);
    if(this.userData.birthdate !== null && this.userData.birthdate !== undefined){
    this.userData.birthdate = userService.getOnlyBirthDate(this.userData.birthdate);
    }
    if(this.userData.userID !== undefined){
      this.getUserBankAccounts();
    }
    
  }

  get getUserData() {
    return this.$store.getters["user/getUserData"];
  }

  fillBankAccountsArray(bankAccounts: any){
    bankAccounts.forEach((bankAccount: any) => {
      this.userBankAccounts.push({
        bankAccountID: bankAccount.bankAccountID,
        bankName: bankAccount.bank,
        accountNumber: bankAccount.accountNumber,
        accountStatus: bankAccount.status,
        details: 'details'
      });
    });
    console.log("bank acoounts are: ", this.userBankAccounts);
  }

  async getUserBankAccounts(){
    this.serverResponse = await bankAccountService.getUserBankAccounts(this.userData.userID);
    if(this.serverResponse !== []){
      this.bankAccountsData = this.serverResponse;
      this.fillBankAccountsArray(this.serverResponse);
      
    }
  }
  
  gotoProfileSettings(){
    this.$router.push({ name: 'userProfileSettings'});
  }
  seeDetails(bankAccount: any){
    for(let i = 0; i < this.bankAccountsData.length; i++){
      if(this.bankAccountsData[i].bankAccountID === bankAccount.bankAccountID){
        this.bankAccount = this.bankAccountsData[i];
        break;
      }
    }
    console.log("va a guardar banco: ", this.bankAccount);
    this.$store.dispatch('bankAccount/setBankAccount', this.bankAccount);
    //this.$router.push({ name: 'userBankAccountStatus', params: { bankAccount: this.bankAccount } });
    this.$router.push({ name: 'userBankAccountStatus', });
  }

  updateUser(){
    console.log("update user");
  }

}

</script>

<style src="./Profile.css" scoped></style>