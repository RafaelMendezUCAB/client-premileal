<template>
    <v-app light>
        <div>
            <Navbar></Navbar>
        </div>
        <v-content>
            
            <v-row
                align="center"
                justify="center"
            >
                <v-col cols="12">
                    <div class="text-center">
                        <h1 class="mainTittle">Bank Accounts!</h1>                                                                      
                    </div>
                </v-col>
            </v-row>      
            <v-divider></v-divider>
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
export default class BankAccount extends Vue{
    
}
</script>

<style src="./BankAccount.css" scoped></style>