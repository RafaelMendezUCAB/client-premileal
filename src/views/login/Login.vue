<template>
    <v-app id="inspire"
           style="
            background: #EEEEEE;
           ">
      <v-content>        
        <v-container
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
                    color:red
                    v-model="userData.email"
                    label= "E-mail address"
                    prepend-icon= "mdi-at"
                    :rules="[rules.required, rules.email]"                    
                    />
                  <v-text-field 
                    v-model="userData.password"
                   :type= "showPassword ? 'text' : 'password'" 
                    persistent-hint
                    label= "Password"
                    prepend-icon= "mdi-lock"
                   :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    :rules="[rules.required]"
                    />
                </v-form>
                  <div class="text-right">
                      <router-link 
                        style="text-decoration: none;" 
                        to=""
                      >
                          Forgot Password?
                      </router-link>
                  </div>                     
                  <v-card-actions>
                    <v-btn depressed 
                           width=100% 
                           color="#0095ff" 
                           class="white--text py-3 pb-7" 
                           @click="login"               
                           >Log In</v-btn>
                  </v-card-actions>
    
                  <div class="mx-auto text-center" >OR</div>
    
                  <span></span>
    
                  <v-divider></v-divider>
    
                  <v-card-actions>
                    <v-btn depressed @click="loginGoogle" width=100% color="#F4511E" class="white--text py-6 pb-10">
                      <div class="pr-4 ml-n7 pl-4"><v-icon large left> mdi-google </v-icon></div>
                      <div class=""> Log In with GOOGLE</div>
                    </v-btn>
                  </v-card-actions>
    
                  <v-card-actions>
                    <v-btn depressed @click="loginFacebook" width=100% color="#3B5998" class="white--text py-6 pb-10">
                    <div class="pr-4 ml-n3 pl-4"> <v-icon large left> mdi-facebook </v-icon></div>
                    <div class="ml-n1"> Log In with FACEBOOK</div>  
                    </v-btn>
                  </v-card-actions>
                
              </v-card-text>
            </v-card>
           <div class=" text-center pt-4">
             Don't have an account?
               <router-link style="text-decoration: none;" 
                            to="/Signup">
                  Sign Up
               </router-link>
           </div>

            <v-overlay                                  
              :value="loadingUserData"
            >
                <v-card
                  max-width="344"
                  class="mx-auto"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="headline">Loading data</v-list-item-title>
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

          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>


<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';

// Services
import userService from '../../services/user/userService';

// Components
import Footer from '@/components/footer/Footer.vue';

  @Component({
    components: {
      Footer
    }
  })
  export default class Login extends Vue{

    valid = false;
    loadingUserData = false;

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

    serverResponse: any = null;

    showPassword = false;
    rules = {
      required: (value: any) => !!value || 'Required.',
      email: (value: any) => {
        const pattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }    
            
    async login(){
      if(this.valid || this.userData.type !== 'No Federado'){  
        this.loadingUserData = true;
        this.serverResponse = await userService.login(this.userData);      
        this.loadingUserData = false;
        if(this.serverResponse.data === "Users doesn't exists."){
          this.errorTittle = 'Error!';
          this.errorDescription = 'Email or password incorrect. Please, try again.';
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

    loginGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        this.loadingUserData = true;
        const token = result.credential
        const user = result.user        
        this.assignGoogleCredentials(user);
        this.login();
      }).catch(error =>{
        console.log(error);
        if(error.code !== "auth/cancelled-popup-request" && error.code !== "auth/popup-closed-by-user"){
          this.errorTittle = 'Network Error!';
          this.errorDescription = 'There was a network error. Check your network connection and try again.';
          this.error = true;
        }        
      })
    }

    assignFacebookCredentials(user: any) {
      this.userData.name = userService.getUserFirstName(user.displayName);
      this.userData.lastName = userService.getUserLastName(user.displayName);
      this.userData.email = user.email;
      this.userData.image = user.photoURL;
      this.userData.type = 'Facebook';
    }

    loginFacebook(){
      fa.signInWithPopup(providerFacebook).then(result => {
        this.loadingUserData = true;
        const token = result.credential
        const user = result.user
        this.assignFacebookCredentials(user);
        this.login();
      }).catch(error =>{
        console.log(error);
        if(error.code !== "auth/popup-closed-by-user" && error.code !== "auth/cancelled-popup-request"){
          this.errorTittle = 'Network Error!';
          this.errorDescription = 'There was a network error. Check your network connection and try again.';
          this.error = true;
        }   
      })
    }

  }
  
</script>

<style src="./Login.css" scoped></style>