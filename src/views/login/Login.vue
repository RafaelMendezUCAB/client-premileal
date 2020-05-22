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
                  lazy-validation
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
                    <div class="text-right">
                        <router-link style="text-decoration: none;" 
                                     to="">
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
                </v-form>
              </v-card-text>
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
    <Footer></Footer>
  </v-app>
</template>


<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import { fa, providerGoogle, providerFacebook } from '../../firebase';
import userService from '../../services/user/userService';
import Footer from '@/components/footer/Footer.vue';

  @Component({
    components: {
      Footer
    }
  })
  export default class Login extends Vue{

    userData =
    {
        name : '',
        lastName : '',
        password :'',
        image : '',
        email : '',
        birthdate : '',
        //  '01/01/1991',
        type: 'No Federado',
        placeID: ''
    };

    serverResponse: any = null;

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

    assignFacebookCredentials(user: any) {
      console.log("facebook");
      this.userData.type = 'Facebook';
    }

    assignGoogleCredentials(user: any){
        this.userData.name = user.displayName;
        this.userData.email = user.email;
        this.userData.image = user.photoURL;
        this.userData.type = 'Google';        
    }

    /* ------------------------------------------------------------------------------------------------
        In case user wants to login, we must check if the user already exists. 
        If so, then the server is gonna retrieve all its information and
        we continue to the home page. If not, then we must first register the 
        user and then procced to home page.
    ------------------------------------------------------------------------------------------------ */
    async login(){
      
        console.log("before checking ", this.serverResponse);
        
        if((this.$refs.form as Vue & { validate: () => boolean }).validate() && this.userData.type === 'No Federado'){
            this.serverResponse = await userService.login(this.userData.email, this.userData.password);
        }
        else  if(this.userData.type !== 'No Federado'){
            this.serverResponse = await userService.socialLogin(this.userData.email, this.userData.type);

             console.log("after checking: ", this.serverResponse);
             if(this.serverResponse.data.length === 0){            
                console.log("User doesn't exists: ", this.serverResponse.data);
              }
              else {
                  console.log("User exists: ", this.serverResponse.data);
                  this.$store.dispatch('user/setUserData', this.serverResponse.data[0]);
              }
              this.assignUserData()
        }
    }

        assignUserData(){
        this.$store.dispatch('user/setSessionStatus', true);
        this.$router.push({ name: 'home'});
    }

    loginGoogle(){
      fa.signInWithPopup(providerGoogle).then(result =>{
        const token = result.credential
        const user = result.user        
        this.assignGoogleCredentials(user);
        this.login();
        this.$router.push({ name: 'home'});
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
      this.login();
      this.$router.push({ name: 'home'});
      }).catch(error =>{
        console.log(error);
      })
    }

  }
  
</script>

<style src="./Login.css" scoped></style>