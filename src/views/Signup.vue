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
                    






                        <span></span>
                        <!-- <div class="mx-auto text-center" >OR</div> -->
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

        </v-col>
            </v-row>
      </v-container>
  </v-content>
  </v-app>
</template>

<script lang='ts'>
    
    import {Vue} from 'vue-property-decorator'
    import Component from "vue-class-component";
    import { fb, db, fs } from '../firebase';
    import { storage } from 'firebase';
    import { fa, providerGoogle, providerFacebook } from '../firebase';

@Component
export default class Signup extends Vue{
    data(){
        return {

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

    userFirstName = '';
    userLastName = '';
    userEmail = '';
    userAlias = '';
    userBirthday = '';
    userPassword ='';
    userDisplayName='';
    mostrar = false;

    async createUser(e: any){
        e.preventDefault();
        console.log(this.getUser());
    }
    
    getUser(){
      return {
          userFirstName: this.userFirstName,
          userLastName: this.userLastName,
          userEmail: this.userEmail,
          userAlias: this.userAlias,
          userBirthdate: this.userBirthday,
          userPassword: this.userPassword,
          // imageUrl: this.imageUrl,
      } 
  }

}
</script>