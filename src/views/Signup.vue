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
                    <v-card class="elevation-3 px-6 py-8" 
                        width="450px">
                    
                        <v-card-text>
                            <v-form>
                                <form v-on:submit="createUser">
                                    <v-text-field
                                        v-model="name"
                                        prepend-icon= "mdi-account"
                                        label="Name"
                                        :rules="[rules.required, rules.alphabet]">
                                    </v-text-field>

                                    <v-text-field
                                        v-model="lastName"
                                        prepend-icon= "mdi-ab-testing"
                                        label="Last Name"
                                        :rules="[rules.required, rules.alphabet]">
                                    </v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        class=""
                                        prepend-icon= "mdi-lock"
                                        label="Password"
                                        :type= "showPassword1 ? 'text' : 'password'" 
                                        hint="Password must contain at least eight characters, including at least 1 letter and 1 number."
                                        persistent-hint
                                        :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword1 = !showPassword1">
                                    </v-text-field>

                                    <v-text-field
                                        v-model="email"
                                        prepend-icon= "mdi-at"
                                        label="E-mail"
                                        :rules="[rules.required, rules.email]">
                                    </v-text-field>

                                    <v-text-field
                                        v-model="birthdate"
                                        prepend-icon= "mdi-calendar-blank-outline"
                                        label="Birth Date"
                                        type="date">
                                    </v-text-field>                

                                    <v-btn depressed 
                                        width=100% 
                                        color="#0095ff" 
                                        class="white--text py-3 pb-7">
                                            Sign Up
                                    </v-btn>

                                </form>
                            </v-form>
                        </v-card-text>                    

                        <span></span>

                        <div class="mx-auto text-center" >OR</div>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn depressed @click="accessGoogle" width=100% color="#F4511E" class="white--text py-6 pb-10">
                                <div class="pr-2 ml-n6 pl-4">
                                    <v-icon large left> mdi-google </v-icon>
                                </div>
                                <div class=""> Sign Up with GOOGLE</div>
                            </v-btn>
                        </v-card-actions>

                        <v-card-actions>                            
                            <v-btn depressed @click="accessFacebook" width=100% color="#3B5998" class="white--text py-6 pb-10">
                                <div class="pr-1 ml-n2 pl-4"> 
                                    <v-icon large left> mdi-facebook </v-icon>
                                </div>
                                <div class="ml-n1"> Sign Up with FACEBOOK</div>  
                            </v-btn>
                        </v-card-actions>
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
  </v-app>
</template>

<script lang='ts'>
    
    import {Vue} from 'vue-property-decorator'
    import Component from "vue-class-component";
    // import { fb, db, fs } from '../firebase';
    // import { storage } from 'firebase';
    import { fa, providerGoogle, providerFacebook } from '../firebase';

@Component
export default class Signup extends Vue{
    data(){
        return {
            showPassword1: false,
            password:'',
            rules:{
                required: (value: string[]) => !!value || 'Required.',
                min: (v: string) => v.length >= 8 || 'Min 8 characters',
                alphabet: (value: string) => {
                    const pattern = /^[A-z]*$|^$/;
                    return(
                        pattern.test(value) ||"Only alphabet characters allowed"
                    )
                },
                // counter: (value: any) => value.lenght <= 20 || 'Max 20 characters',        
                password: (value: string) => {
                    const pattern = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
                    return (
                        pattern.test(value) ||
                        "Password must contain at least eight characters, including at least 1 letter and 1 number.");
                },
                email: (value: string) => {
                    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            },
        }
    }

    accessGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        const token = result.credential
        const user = result.user
        console.log("datos del usuario",user);
        console.log("token", token);
      }).catch(error =>{
        console.log(error);
      })
    }

    accessFacebook(){
      fa.signInWithPopup(providerFacebook).then(result => {
        const token = result.credential
        const user = result.user
        console.log("datos del usuario",user);
        console.log("token", token);
      }).catch(error =>{
        console.log(error);
      })
    }

    name = '';
    lastName = '';
    password ='';
    image ='';
    email = '';
    birthdate = '';

    async createUser(e: any){
        e.preventDefault();
        console.log(this.getUser());
    }
    
    getUser(){
      return {
          name: this.name,
          lastName: this.lastName,
          password: this.password,
          image: this.image,
          email: this.email,
          birthdate: this.birthdate,
          
      } 
  }

}
</script>