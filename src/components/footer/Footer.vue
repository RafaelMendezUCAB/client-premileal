<template>
    <v-card height="130">
      <v-footer
        absolute
        class=""
        color="primary lighten-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
            <v-btn
              v-for="icon in icons"
              :key="icon"
              color="white"
              text
              rounded
              class="my-2"
            >
              <v-icon>mdi-{{ icon }}</v-icon>
            </v-btn>
            <v-col
              class="primary lighten-2 py-4 text-center white--text"
              cols="12"
            >
              2020 — <strong>Premileal</strong><br/>
              Caracas, Venezuela
              <!--<v-img src="https://lh3.googleusercontent.com/proxy/VOI9xoz3uGoZ3ggr0ACZ-X2oDjRNkA0r_yWKZjDZyOiG2ktmRuXrElGfGklUyg3FBNs8FFAocSlsiA8u2XkTz6AgfSqPk6NkB7EVbOpDoEzNykQ3mGI" height="30px" width="30px" class="imgCentered"></v-img>-->
            </v-col>
        </v-row>
        
      </v-footer>
    </v-card>
</template>

<script lang="ts">
import {Vue, Watch} from 'vue-property-decorator'
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {

    icons = [
        'facebook',
        'twitter',        
        'instagram',
        'youtube',
    ];

}

</script>

<style src="./Footer.css" scoped></style>