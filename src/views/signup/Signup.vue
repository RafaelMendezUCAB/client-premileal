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
                            >
                                <form v-on:submit="createUser">
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
                                        @click="checkIfUserExists()"
                                    >
                                            Sign Up
                                    </v-btn>
                                    </v-card-actions>
                                </form>
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

    serverResponse: any = null;
    places: any = [];

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
                password: (value: string) => {
                    const pattern = /(?=.{8,})/;
                    return (
                        pattern.test(value) ||
                        "Password must contain at least eight characters.");
                },
                email: (value: string) => {
                    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            },
        }
    }

    assignGoogleCredentials(user: any){
        this.userData.name = user.displayName;
        this.userData.email = user.email;
        this.userData.image = user.photoURL;
        this.userData.type = 'Google';        
    }

    /* ------------------------------------------------------------------------------------------------
        In case user wants to signup, we must check if the user has already
        logged in used one of both. If so, then the server is gonna retrieve all its information and
        we continue to the home page. If not, then we must first register the user and then procced
        to home page
    ------------------------------------------------------------------------------------------------ */
    async checkIfUserExists(){
        if ((this.$refs.form as Vue & { validate: () => boolean }).validate() && this.userData.type === 'No Federado' ){
          this.serverResponse = await userService.login(this.userData.email, this.userData.password);
                
    }

        else if (this.userData.type !== 'No Federado'){

            this.serverResponse = await userService.socialLogin(this.userData.email, this.userData.type);
            if(this.serverResponse.data.length === 0){
            
                this.serverResponse = await userService.signUp(this.userData);
            
            }
            this.assignUserData()
        }
    }
    
    assignUserData(){
        this.$store.dispatch('user/setSessionStatus', true);
        this.$router.push({ name: 'home'});
    }

    accessGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        const token = result.credential
        const user = result.user        
        this.assignGoogleCredentials(user);
        console.log("Now user is: ", this.userData);
        this.$router.push({ name: 'home'});
      }).catch(error =>{
        console.log(error);
      })
    }

    accessFacebook(){
      fa.signInWithPopup(providerFacebook).then(result => {
        const token = result.credential
        const user = result.user
        console.log("USER DATA",user);
        console.log("token", token);
        this.$router.push({ name: 'home'});       
      }).catch(error =>{
        console.log(error);
      })
    }

   userData =
    {
        name : '',
        lastName : '',
        password :'',
        image : '',
        email : '',
        birthdate : '',
        // '01/01/1991',
        type: 'No Federado',
        placeID: ''
    };

    async createUser(e: any){
        e.preventDefault();
        console.log(this.getUser());
    }

    getUser(){
       return this.userData
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

<style src="./Signup.css" scoped></style>