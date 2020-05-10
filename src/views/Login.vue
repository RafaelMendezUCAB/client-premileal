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

              <v-card class="elevation-3 px-6 py-8" 
                      width="450px">
              <v-card-text>
                <v-form>
                    <v-text-field 
                      label= "E-mail address"
                      prepend-icon= "mdi-at"
                      :rules="[rules.required, rules.email]"                    
                      />
                    <v-text-field 

                     :type= "showPassword ? 'text' : 'password'" 
                      persistent-hint
                      label= "Password"
                      prepend-icon= "mdi-lock"
                     :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      :rules="[rules.required]"
                      />
                    <div class="text-right">
                        <router-link style="text-decoration: none;" 
                                     to="">
                                      Forgot Password?
                        </router-link>
                    </div>                     
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn depressed 
                       width=100% 
                       color="#0095ff" 
                       class="white--text py-3 pb-7"                
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

            </v-card>
           <div class=" text-center pt-4">
             Don't have an account?
               <router-link style="text-decoration: none;" 
                            to="/Signup">
                  Sign Up
               </router-link>
           </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../firebase';

  @Component
  export default class Login extends Vue{

    data (){
      return{
        showPassword: false,
        rules: {
            required: (value: any) => !!value || 'Required.',
            email: (value: any) => {
              const pattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(value) || 'Invalid e-mail.'
            }
         }
      }
    }

    loginGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        const token = result.credential
        const user = result.user
        console.log("datos del usuario",user);
        console.log("token", token);
      }).catch(error =>{
        console.log(error);
      })
    }

    loginFacebook(){
      fa.signInWithPopup(providerFacebook).then(result => {
        const token = result.credential
      const user = result.user
      console.log("datos del usuario",user);
      console.log("token", token);
      }).catch(error =>{
        console.log(error);
      })
    }

  }
  
</script>