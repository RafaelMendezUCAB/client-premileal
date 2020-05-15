<template>
  <v-app>
    <v-content>

    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'
import Component from "vue-class-component";
import Footer from '@/components/footer/Footer.vue';

/* --- Services --- */


/* --- Types --- */


@Component({
  components: {
    Footer
  }
})
export default class UserProfile extends Vue{

  

}
</script>

<style src="./Profile.css" scoped></style>