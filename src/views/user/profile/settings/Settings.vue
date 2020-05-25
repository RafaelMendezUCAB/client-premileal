<template>
  <v-app>
  <Navbar></Navbar>
    <v-content>
      <v-row row class="rowSeparation" align="center"
             justify="center">
                <v-col cols="5"
                       sm="8"
                       md="4"
                       align = "center"
                       justify="center">
                  <div class="pt-8">
                      <v-icon size="60" color="blue">mdi-account-circle</v-icon>
                      <h1 class="mainTittle">User Profile Settings</h1>
                  </div>
                  
                    <v-card class="formMarginXY"
                            max-width="500"
                            color="grey lighten-5">
                      <v-card-text>
                        <v-form ref="form" v-model="valid">
                        <div class="">
                          <div class="pb-8"> 
                            <v-avatar class="avatarSize" color="blue" size="100">
    <!-- AQUI IRIA DONDE SE ALMACENA LA IMAGEN DEL USUARIO EN CASO DE TENERLA -->
                              <img class=""
                                   src="" 
                                   alt="Avatar">
                            </v-avatar>
                          </div>
                          <!-- ERROR AL USAR ESTA LINEA DE CODIGO EN FILE INPUT
                          v-model="userData.image" -->
                            <v-file-input
                                
                                class="fontSize"
                                label="Profile Pic"
                                placeholder="Upload Image"
                                outlined
                                prepend-icon="mdi-camera"
                                :rules="[rules.size]"
                                >
                          </v-file-input>
                          <v-text-field 
                                        v-model="userData.name"
                                        class="fontSize"
                                        label="Name"
                                        prepend-icon= "mdi-account"
                                        outlined
                                        :rules="[rules.required, rules.alphabet]"
                          >                                            
                          </v-text-field>
                          <v-text-field v-model="userData.lastName"
                                        class="fontSize"
                                        label="Last Name"
                                        prepend-icon= "mdi-ab-testing"
                                        outlined 
                                        :rules="[rules.required, rules.alphabet]"
                          >
                          </v-text-field>
                          <v-text-field class="fontSize"
                                        v-model="userData.password"
                                        label="Password"
                                        :type= "showPassword1 ? 'text' : 'password'" 
                                        :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        prepend-icon= "mdi-lock"
                                        @click:append="showPassword1 = !showPassword1"                                        
                                        outlined
                                        :rules="[rules.password]"
                                        hint="Password must contain at least eight characters."
                                        persistent-hint
                          >
                          </v-text-field>                             
                          <v-text-field class="fontSize"
                                        v-model="userData.email"
                                        label="E-mail"
                                        prepend-icon= "mdi-at"
                                        outlined
                                        :rules="[rules.required, rules.email]">
                          >
                          </v-text-field> 
                          <v-text-field class="fontSize"
                                        v-model="userData.birthdate"
                                        label="Birth Date"
                                        prepend-icon= "mdi-calendar-blank-outline"
                                        outlined
                                        type="date"
                                        :rules="[rules.required]"
                          >
                          </v-text-field> 
                          <v-autocomplete class="fontSize"
                                        v-model="userData.placeID"
                                        item-value="p_id"
                                        label="Country"
                                        :rules="[rules.required]"
                                        :items="places"
                                        item-text="p_name"
                                        prepend-icon= "mdi-map-marker"
                                        outlined                                        
                          >
                          </v-autocomplete>  
                                                         
                        </div>
                        
                        </v-form>  
                       

                            <v-overlay                                  
                              :value="loadingUserData"
                            >
                                <v-card
                                  max-width="344"
                                  class="mx-auto"
                                >
                                  <v-list-item>
                                    <v-list-item-content>
                                      <v-list-item-title class="headline">Saving data</v-list-item-title>
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
                       

                      </v-card-text>
                    </v-card>
                     <v-btn class="black buttonSize" dark color="blue" @click="SaveChanges()">
                          Save Changes
                        </v-btn>
                        <v-btn class="black ml-1 buttonSize" dark color="red" @click="Cancel()">
                          CANCEL
                        </v-btn>  
                </v-col>
      </v-row>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import placeService from '@/services/place/placeService';
import userService from '@/services/user/userService';
import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';


@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class UserSettings extends Vue{

    valid = false;
    loadingUserData = false;

    serverResponse: any = null;
    places: any = [];

    
    userData = 
    {
        name : '',
        lastName : '',
        password :'',
        image : '',
        email : '',
        birthdate : '',        
        // type: 'No Federado',
        placeID: ''        
    };

    showPassword1 = false;
    rules = {
        size: (value: File )=> !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        required: (value: string[]) => !!value || 'Required.',
        min: (v: string) => v.length >= 8 || 'Min 8 characters',
        alphabet: (value: string) => {
            const pattern = /^[A-z]*$|^$/;
            return(
                pattern.test(value) ||"Only alphabet characters allowed"
            )
        },
        password: (value: string) => {
            const pattern = /(?=.{8,})/;
            return (
                pattern.test(value) ||
                "Password must contain at least eight characters."
            );
        },
        email: (value: string) => {
            const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail.';
        }
      }
        
    mounted(){
       this.getAllPlaces();
    }
        
     

    async getAllPlaces(){
        this.serverResponse = await placeService.getAllPlaces();
        this.places = this.serverResponse.data;
    }  
  
}
</script>

<style src="./Settings.css" scoped></style>