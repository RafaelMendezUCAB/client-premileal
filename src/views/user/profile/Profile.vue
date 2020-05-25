<template>
  <v-app>
    <Navbar></Navbar>
      <v-content>
        <v-row >
          <v-col cols="4">
            <div class="text-center">
              <v-row class="rowSeparation" align="center" justify="center">
                <v-col cols="11" lg="12">
                  <div class="pt-8">
                    <v-icon size="60" color="blue">mdi-account-circle</v-icon>
                    <h1 class="mainTittle">User Profile</h1>
                  </div>
                  <v-card class="formMarginXY"
                          max-width="374"
                          color="grey lighten-5">
                    <v-card-text>
                     <div class="mx-10 py-2">
                      <div class="pb-8"> 
                        <v-avatar color="blue" size="100">
                      <!-- AQUI IRIA DONDE SE ALMACENA LA IMAGEN DEL USUARIO EN CASO DE TENERLA -->
                          <img src="" 
                               alt="Avatar">
                        </v-avatar>
                      </div>
                      <v-text-field class="fontSize"
                                  label="Name"
                                  prepend-icon= "mdi-account"
                                  readonly
                      >                                            
                      </v-text-field>
                      <v-text-field class="fontSize"
                                  label="Last Name"
                                  prepend-icon= "mdi-ab-testing"
                                  readonly
                      >
                      </v-text-field>
                      <v-text-field class="fontSize"
                                  label="Password"
                                  :type= "showPassword1 ? 'text' : 'password'" 
                                  :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                  prepend-icon= "mdi-lock"
                                  @click:append="showPassword1 = !showPassword1"                                        
                                  readonly 
                      >
                      </v-text-field>                             
                      <v-text-field class="fontSize"
                                  label="E-Mail"
                                  prepend-icon= "mdi-at"
                                  readonly
                      >
                      </v-text-field> 
                      <v-text-field class="fontSize"
                                  label="Birth Date"
                                  prepend-icon= "mdi-calendar-blank-outline"
                                  readonly
                                  type="date"
                      >
                      </v-text-field> 
                      <v-text-field class="fontSize"
                                   label="Country"
                                   prepend-icon= "mdi-map-marker"
                                   readonly                                                    
                      >
                      </v-text-field>                            
                      <p>Membership Level: <b>BASIC</b> </p>
                     </div>
                    </v-card-text>
                  </v-card>
                    
                  <v-btn class="black my-4" dark color="blue" @click="gotoProfileSettings">
                      Edit Information
                  </v-btn>
                </v-col>                        
              </v-row>
            </div>
          </v-col>
          <v-col widthBankAccountInformation>
            <div class="text-center mr-2">
              <v-row align="center" justify="center">
                <v-col>
                  <div class="pt-8">
                    <v-icon size="60" color="blue">mdi-bank</v-icon>
                      <h1 class="mainTittle">Bank Account Information</h1>
                  </div> 
                  <v-card>
                    <v-card-title class="subtittle">
                      Registered Banks
                    </v-card-title>
                    <v-data-table class="fontSize"
                                  :headers="headers"
                                  :items="movements"
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

<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';

/* --- Services --- */


/* --- Types --- */


@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class UserProfile extends Vue{


  headers = [
    {
        text: 'Bank',
        align: 'start',
        sortable: false,
        value: 'bankName'
    },
    {
        text:'Number',
        value:'accountNumber',
    },
    {
        text:'Routing N°',
        value:'accountRoutingNumber',
    },
    {
        text:'Checking N°',
        value: 'accountCheckingNumber',
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
      accountRoutingNumber:'41555801',
      accountCheckingNumber:'0301',
      accountStatus:'Verified',
      details:'details'
    },
    {
      bankName:'CityBank',
      accountNumber:'5899',
      accountRoutingNumber:'41553370',
      accountCheckingNumber:'0384',
      accountStatus:'Denied',
      details:'details'
    },
    {
      bankName:'U.S. Bank',
      accountNumber:'5803',
      accountRoutingNumber:'41557823',
      accountCheckingNumber:'0302',
      accountStatus:'Waiting',
      details:'details'
    },
    {
      bankName:'Wells Fargo',
      accountNumber:'5806',
      accountRoutingNumber:'41598546',
      accountCheckingNumber:'0305',
      accountStatus:'Verified',
      details:'details'
    },
    {
      bankName:'BNY Mellon',
      accountNumber:'5804',
      accountRoutingNumber:'41556879',
      accountCheckingNumber:'0309',
      accountStatus:'Denied',
      details:'details'
    },  
    {
      bankName:'JP Morgan',
      accountNumber:'5810',
      accountRoutingNumber:'41545795',
      accountCheckingNumber:'0311',
      accountStatus:'Waiting',
      details:'details'
    },           
  ]

  data() {
    return {
      showPassword1: false,
    }
  }
  gotoProfileSettings(){
    this.$router.push({ name: 'userProfileSettings'});
  }
  seeDetails(){
     console.log("see details");
  }

}

</script>

<style src="./Profile.css" scoped></style>