<template>
  <v-app id="inspire2"
           style="
            background: #EEEEEE;
           ">
    <v-content
        align = "center"
        justify="center"
    >
        <v-container
            align = "center"
            justify="center"
            class="fill-height"
            fluid
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                    align = "center"
                    justify="center"
                >
                    <v-card class="elevation-3 px-4 py-5" 
                        width="450px">
                    
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                            >                                
                                <v-text-field
                                    v-model="userData.name"
                                    prepend-icon= "mdi-account"
                                    label="Name"
                                    :rules="[rules.required, rules.alphabet]">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.lastName"
                                    prepend-icon= "mdi-ab-testing"
                                    label="Last Name"
                                    :rules="[rules.required, rules.alphabet]">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.password"
                                    class=""
                                    prepend-icon= "mdi-lock"
                                    label="Password"
                                    :type= "showPassword1 ? 'text' : 'password'" 
                                    hint="Password must contain at least eight characters."
                                    persistent-hint
                                    :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.password]"
                                    @click:append="showPassword1 = !showPassword1">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.email"
                                    prepend-icon= "mdi-at"
                                    label="E-mail"
                                    :rules="[rules.required, rules.email]">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.birthdate"
                                    prepend-icon= "mdi-calendar-blank-outline"
                                    label="Birth Date"
                                    type="date"
                                    :rules="[rules.required]">                                        
                                </v-text-field> 

                                <v-autocomplete
                                    v-model="userData.placeID"
                                    item-value="p_id"
                                    prepend-icon= "mdi-map-marker"
                                    label="Country"
                                    :rules="[rules.required]"
                                    :items="places"
                                    item-text="p_name">
                                </v-autocomplete> 

                                <v-card-actions>
                                <v-btn depressed 
                                    width=100% 
                                    color="#0095ff" 
                                    class="white--text py-3 pb-7"
                                    @click="signUp()"
                                >
                                    Sign Up
                                </v-btn>
                                </v-card-actions>
                            
                                <span></span>
                                <div div class="mx-auto text-center" >OR</div>
                                <v-divider></v-divider>
                            </v-form>

                            <v-card-actions>
                                <v-btn depressed @click="accessGoogle" width=100% color="#F4511E" class="white--text py-6 pb-10">
                                    <div class="pr-4 ml-n7 pl-4">
                                        <v-icon large left> mdi-google </v-icon>
                                    </div>
                                    <div class=""> Sign Up with GOOGLE</div>
                                </v-btn>
                            </v-card-actions>

                            <v-card-actions>                            
                                <v-btn depressed @click="accessFacebook" width=100% color="#3B5998" class="white--text py-6 pb-10">
                                    <div class="pr-4 ml-n3 pl-4"> 
                                        <v-icon large left> mdi-facebook </v-icon>
                                    </div>
                                    <div class="ml-n1"> Sign Up with FACEBOOK</div>  
                                </v-btn>
                            </v-card-actions>

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

                        </v-card-text>                    
                    </v-card>

                    <div class="text-center pt-4">
                        Already have an account?
                            <router-link style="text-decoration: none;" 
                                        to="/Login">
                                Log in
                            </router-link>
                    </div>
                </v-col>
            </v-row>
      </v-container>
  </v-content>
  <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
    
    import {Vue} from 'vue-property-decorator'
    import Component from "vue-class-component";
    // import { fb, db, fs } from '../firebase';
    // import { storage } from 'firebase';
    import { fa, providerGoogle, providerFacebook } from '../../firebase';
    import placeService from '../../services/place/placeService';
    import userService from '../../services/user/userService';
    import Footer from '@/components/footer/Footer.vue';

@Component({
    components:{
        Footer
    }
})
export default class Signup extends Vue{

    valid = false;
    loadingUserData = false;
    
    serverResponse: any = null;
    places: any = [];

    errorTittle = '';
    errorDescription = '';
    error = false;

    userData =
    {
        name : '',
        lastName : '',
        password :'',
        image : '',
        email : '',
        birthdate : '',        
        type: 'No Federado',
        placeID: ''
    };

    showPassword1 = false;
    password = '';
    rules = {
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

    async signUp(){
        if(this.valid || this.userData.type !== 'No Federado'){
            if(this.loadingUserData === false){
                this.loadingUserData = true;
            }
            this.serverResponse = await userService.signUp(this.userData);
            this.loadingUserData = false;
            if(this.serverResponse.data === 'User email already exists.'){
                this.errorTittle = 'Error!';
                this.errorDescription = 'The email address is already registered. Please, use another or login.';
                this.error = true;
            }
            else {
                this.$store.dispatch('user/setUserData', this.serverResponse.data[0]);
                this.$store.dispatch('user/setSessionStatus', true);
                this.$router.push({ name: 'home' });
            }
        }        
    }                

    assignGoogleCredentials(user: any){        
        this.userData.name = userService.getUserFirstName(user.displayName);
        this.userData.lastName = userService.getUserLastName(user.displayName);
        this.userData.email = user.email;
        this.userData.image = user.photoURL;
        this.userData.type = 'Google';
    }

    accessGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        this.loadingUserData = true;
        const token = result.credential;
        const user = result.user;        
        this.assignGoogleCredentials(user);
        this.signUp();        
      }).catch(error =>{
        console.log(error);
        if(error.code !== "auth/cancelled-popup-request" && error.code !== "auth/popup-closed-by-user"){
          this.errorTittle = 'Network Error!';
          this.errorDescription = 'There was a network error. Check your network connection and try again.';
          this.error = true;
        } 
      })
    }

    assignFacebookCredentials(user: any){
        this.userData.name = userService.getUserFirstName(user.displayName);
        this.userData.lastName = userService.getUserLastName(user.displayName);
        this.userData.email = user.email;
        this.userData.image = user.photoURL;
        this.userData.type = 'Facebook';
    }

    accessFacebook(){
      fa.signInWithPopup(providerFacebook).then(result => {
        this.loadingUserData = true;
        const token = result.credential;
        const user = result.user;
        this.assignFacebookCredentials(user);
        this.signUp();
      }).catch(error =>{
        console.log(error);
        if(error.code !== "auth/popup-closed-by-user" && error.code !== "auth/cancelled-popup-request"){
          this.errorTittle = 'Network Error!';
          this.errorDescription = 'There was a network error. Check your network connection and try again.';
          this.error = true;
        } 
      })
    }

    resetData(){
        this.userData = {
            name : '',
            lastName : '',
            password :'',
            image : '',
            email : '',
            birthdate : '',        
            type: 'No Federado',
            placeID: ''
        }
    }               

    async getAllPlaces(){
        this.serverResponse = await placeService.getAllPlaces();
        this.places = this.serverResponse.data;
    }    

}
</script>

<style src="./Signup.css" scoped></style>