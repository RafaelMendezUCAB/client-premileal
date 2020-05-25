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
                        <div class="">
                          <div class="pb-8"> 
                            <v-avatar class="avatarSize" color="blue" size="100">
    <!-- AQUI IRIA DONDE SE ALMACENA LA IMAGEN DEL USUARIO EN CASO DE TENERLA -->
                              <img class=""
                                   src="" 
                                   alt="Avatar">
                            </v-avatar>
                          </div>
                            <v-file-input
                                class="fontSize"
                                label="Profile Pic"
                                placeholder="Upload Image"
                                outlined
                                prepend-icon="mdi-camera"
                                :rules="[rules.size]">
                          </v-file-input>
                          <v-text-field class="fontSize"
                                        label="Name"
                                        prepend-icon= "mdi-account"
                                        outlined
                                        value="JOHN"
                          >                                            
                          </v-text-field>
                          <v-text-field class="fontSize"
                                        label="Last Name"
                                        prepend-icon= "mdi-ab-testing"
                                        outlined
                                        value="DOE" 
                          >
                          </v-text-field>
                          <v-text-field class="fontSize"
                                        label="Password"
                                        :type= "showPassword1 ? 'text' : 'password'" 
                                        :append-icon= "showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        prepend-icon= "mdi-lock"
                                        @click:append="showPassword1 = !showPassword1"                                        
                                        outlined
                                        value="DOE" 
                          >
                          </v-text-field>                             
                          <v-text-field class="fontSize"
                                        label="E-Mail"
                                        prepend-icon= "mdi-at"
                                        outlined
                                        value="DOE" 
                          >
                          </v-text-field> 
                          <v-text-field class="fontSize"
                                        label="Birth Date"
                                        prepend-icon= "mdi-calendar-blank-outline"
                                        outlined
                                        type="date"
                          >
                          </v-text-field> 
                          <v-text-field class="fontSize"
                                        label="Country"
                                        prepend-icon= "mdi-map-marker"
                                        outlined                                        
                          >
                          </v-text-field>  
                                                         
                        </div>
                        <v-btn class="black buttonSize" dark color="blue">
                          Save Changes
                        </v-btn>
                        <v-btn class="black ml-1 buttonSize" dark color="red">
                          CANCEL
                        </v-btn>                        
                      </v-card-text>
                    </v-card>
                </v-col>
      </v-row>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script lang='ts'>
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import Footer from '@/components/footer/Footer.vue';
import Navbar from '@/components/navbar/Navbar.vue';


@Component({
    components:{
        Footer,
        Navbar
    }
})
export default class UserSettings extends Vue{
      data() {
    return {
      showPassword1: false,
      rules: {
        size: (value: File )=> !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      },
    }
  }


  
}
</script>

<style src="./Settings.css" scoped></style>