<template>
    <v-app>
        <v-content>

        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";

import Footer from '@/components/footer/Footer.vue';

@Component({
    components:{
        Footer
    }
})
export default class PointsWithdrawal extends Vue{
    
}
</script>

<style src="./PointsWithdrawal.css" scoped></style>