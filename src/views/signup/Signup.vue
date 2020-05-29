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
                                :key="llave"
                            >                                
                                <v-text-field
                                    v-model="userData.name"
                                    prepend-icon= "mdi-account"
                                    :label="texts.signUpNameLabel"
                                    :rules="[rules.required, rules.alphabet]"
                                >
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.lastName"
                                    prepend-icon= "mdi-ab-testing"
                                    :label="texts.signUpLastNameLabel"
                                    :rules="[rules.required, rules.alphabet]">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.password"
                                    class=""
                                    prepend-icon= "mdi-lock"
                                    :label="texts.loginPasswordLabel"
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
                                    :label="texts.loginEmailLabel"
                                    :rules="[rules.required, rules.email]">
                                </v-text-field>

                                <v-text-field
                                    v-model="userData.birthdate"
                                    prepend-icon= "mdi-calendar-blank-outline"
                                    :label="texts.signUpBirthDateLabel"
                                    type="date"
                                    :rules="[rules.required]">                                        
                                </v-text-field> 

                                <v-autocomplete
                                    v-model="userData.placeID"
                                    item-value="p_id"
                                    prepend-icon= "mdi-map-marker"
                                    :label="texts.signUpCountryLabel"
                                    :rules="[rules.required]"
                                    :items="places"
                                    item-text="p_name">
                                </v-autocomplete> 

                                <v-select
                                    v-model="userData.preferredLanguage"
                                    outlined
                                    prepend-icon="mdi-translate"
                                    :items="languages"                                            
                                    item-text="name"
                                    item-value="acronym"
                                    :label="texts.selectPreferredLanguageLabel"
                                    style="margin-top: 8%"
                                    :rules="[rules.required]"                                    
                                >                                    
                                </v-select>

                                <v-card-actions>
                                <v-btn depressed 
                                    width=100% 
                                    color="#0095ff" 
                                    class="white--text py-3"
                                    @click="signUp()"
                                >
                                    {{texts.loginSignUpLabel}}
                                </v-btn>
                                </v-card-actions>
                            
                                <span></span>
                                <div div class="mx-auto text-center" >{{texts.loginOptionLabel}}</div>
                                <v-divider></v-divider>
                            </v-form>

                            <v-card-actions>
                                <v-btn depressed @click="accessGoogle" width=100% color="#F4511E" class="white--text py-6">
                                    <div class="pr-4 ml-n7 pl-4">
                                        <v-icon large left> mdi-google </v-icon>
                                    </div>
                                    <div class=""> {{texts.signUpGoogleLabel}}</div>
                                </v-btn>
                            </v-card-actions>

                            <v-card-actions>                            
                                <v-btn depressed @click="accessFacebook" width=100% color="#3B5998" class="white--text py-6">
                                    <div class="pr-4 ml-n3 pl-4"> 
                                        <v-icon large left> mdi-facebook </v-icon>
                                    </div>
                                    <div class="ml-n1"> {{texts.signUpFacebookLabel}}</div>  
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
                                      <v-list-item-title class="headline">{{texts.savingDataLabel}}</v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>  
                                  <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="primary"
                                    indeterminate
                                  ></v-progress-circular>                                                                        
                                  <v-card-text>
                                    {{texts.bePatientLabel}}
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
                        {{texts.alreadyHaveAccountLabel}}
                            <router-link style="text-decoration: none;" 
                                        to="/Login">
                                {{texts.navBarLoginLabel}}
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
    
    import {Vue, Watch} from 'vue-property-decorator'
    import Component from "vue-class-component";    
    import { fa, providerGoogle, providerFacebook } from '../../firebase';
    import Footer from '@/components/footer/Footer.vue';

    import placeService from '../../services/place/placeService';
    import userService from '../../services/user/userService';
    import internationalizationService from '@/services/internationalization/internationalizationService';


@Component({
    components:{
        Footer
    }
})
export default class Signup extends Vue{

    valid = false;
    loadingUserData = false;

    llave = 0;

    formKey = 0;
    
    serverResponse: any = null;
    places: any = [];

    errorTittle = '';
    errorDescription = '';
    error = false;

    userData: any =
    {
        name : '',
        lastName : '',
        password :'',
        image : '',
        email : '',
        birthdate : '',        
        type: 'No Federado',
        placeID: '',
        preferredLanguage: 'en-us'
    };

    showPassword1 = false;
    password = '';    

    textsTranslated: any = null;
    texts = {
        signUpNameLabel: "Name",
        signUpLastNameLabel: "Last Name",
        loginPasswordLabel: "Password",
        loginEmailLabel: "E-mail",
        signUpBirthDateLabel: "Birth Date",
        signUpCountryLabel: "Country",
        loginSignUpLabel: "Sign Up",
        loginOptionLabel: "OR",
        signUpGoogleLabel: "Sign Up with GOOGLE",
        signUpFacebookLabel: "Sign Up with FACEBOOK",
        savingDataLabel: "Saving data",
        bePatientLabel: "This could take some time. Please, be patient.",
        alreadyHaveAccountLabel: "Already have an account?",
        navBarLoginLabel: "Log in",
        requiredLabel: "Required.",
        onlyAlphabet: "Only alphabet characters allowed",
        passwordLengthLabel: "Password must contain at least eight characters.",
        invalidEmailLabel: "Invalid e-mail.",
        englishLabel: "English",
        spanishLabel: "Spanish",
        selectPreferredLanguageLabel: "Select preferred language"
    };

    languages = [
        {
            acronym: 'en-us',
            name: this.texts.englishLabel
        },
        {
            acronym: 'es',
            name: this.texts.spanishLabel
        }
    ];

    rules = {
        required: (value: string[]) => !!value || this.texts.requiredLabel,
        min: (v: string) => v.length >= 8 || 'Min 8 characters',
        alphabet: (value: string) => {
            const pattern = /^[A-z]*$|^$/;
            return(
                pattern.test(value) || this.texts.onlyAlphabet
            )
        },
        password: (value: string) => {
            const pattern = /(?=.{8,})/;
            return (
                pattern.test(value) ||
                this.texts.passwordLengthLabel
            );
        },
        email: (value: string) => {
            const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || this.texts.invalidEmailLabel;
        }
    }

    mounted(){
        this.getAllPlaces();

        const terms = localStorage.getItem('termsTranslated');
        if(terms){
            try{
                this.textsTranslated = JSON.parse(terms);
                //this.texts = internationalizationService.home.translateHome(this.textsTranslated, this.texts);
            }catch(e){
                localStorage.removeItem('terms');
            }
        }

        console.log(this.textsTranslated);
        if(!this.textsTranslated){
            this.texts = internationalizationService.signUp.assignDefaultLabels();
        }
        else {
            console.log("en español");
            this.userData.preferredLanguage = 'es';
            this.getTranslations('es');
        }
    }    

    async getTranslations(language: string){        
        try {
            const translations = await internationalizationService.getTermsTranslations(language);        
            if(internationalizationService.newTerms(this.textsTranslated, translations.data)){
                this.textsTranslated = translations.data;
                this.texts = internationalizationService.signUp.translate(this.textsTranslated, this.texts);
                const parsedTerms = JSON.stringify(this.textsTranslated);
                localStorage.setItem('termsTranslated', parsedTerms);
            }
            else {
                this.texts = internationalizationService.signUp.translate(this.textsTranslated, this.texts);
            }
            this.languages = [
                {
                    acronym: 'en-us',
                    name: this.texts.englishLabel
                },
                {
                    acronym: 'es',
                    name: this.texts.spanishLabel
                }
            ];
        } catch (error) {
            console.log("An error ocurred: ", error);
        }     
    }

    @Watch('userData.preferredLanguage')
    preferredLanguageChange(){
        if(this.userData.preferredLanguage !== 'en-us'){
            this.getTranslations(this.userData.preferredLanguage);
            if(this.textsTranslated){
                this.texts = internationalizationService.signUp.translate(this.textsTranslated, this.texts);
            }                   
        }
        else {
            this.texts = internationalizationService.signUp.assignDefaultLabels();
            localStorage.clear();
        }
        this.languages = [
            {
                acronym: 'en-us',
                name: this.texts.englishLabel
            },
            {
                acronym: 'es',
                name: this.texts.spanishLabel
            }
        ];                       
    }    

    async signUp(){
        if(this.valid || this.userData.type !== 'No Federado'){
            if(this.loadingUserData === false){
                this.loadingUserData = true;
            }
            try {
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
                    const user = JSON.stringify(this.serverResponse.data[0]);
                    localStorage.setItem('userData', user);
                    localStorage.setItem('userLoggedIn', "true");
                    this.$router.push({ name: 'home' }).catch(error => {
                      console.log(error);
                    });
                }
            } catch (error) {
                console.log("An error ocurred: ", error);
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
      try {
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
      } catch (error) {
          console.log("An error ocurred: ", error);
      }
    }

    assignFacebookCredentials(user: any){
        this.userData.name = userService.getUserFirstName(user.displayName);
        this.userData.lastName = userService.getUserLastName(user.displayName);
        this.userData.email = user.email;
        this.userData.image = user.photoURL;
        this.userData.type = 'Facebook';
    }

    accessFacebook(){
      try {
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
      } catch (error) {
          console.log(error);
      }
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
        try {
            this.serverResponse = await placeService.getAllPlaces();
            this.places = this.serverResponse.data;
        } catch (error) {
            console.log(error);
        }
    }    

}
</script>

<style src="./Signup.css" scoped></style>