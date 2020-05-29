<template>
  <v-app>
    <v-content>      
      <template>
        <h1>Thanks for trusting us!</h1>
        <div>          
          <vue-html2pdf
             :show-layout="false"
             :enable-download="true"
             :preview-modal="false"
             :paginate-elements-by-height="1400"
             filename="hee hee"
             :pdf-quality="2"
             pdf-format="a4"
             pdf-orientation="landscape"
             pdf-content-width="800px"
 
             @progress="onProgress($event)"
             @hasStartedGeneration="hasStartedGeneration()"
             @hasGenerated="hasGenerated($event)"
             ref="html2Pdf"
         >
             <section slot="pdf-content">    
                <div class="centered" v-if="paymentData !== null">
                    <img src="@/assets/loyalty logo.png" width="80px" height="auto">
                    <h1>Premileal C.A.</h1>
                    <p>Points Purchase</p>
                    <table id="customers">
                      <tr>
                        <th>Bank</th>
                        <th>Account Number</th>
                        <th>Account Holder Name</th>
                        <th>Points</th>
                        <th>Amount</th>                        
                        <th>Total</th>
                      </tr>
                      <tr>
                        <td>{{paymentData.bankAccount.bank}}</td>
                        <td>{{paymentData.bankAccount.accountNumber}}</td>
                        <td>{{paymentData.bankAccount.holderName}}</td>
                        <td>{{paymentData.points}}</td>
                        <td>${{paymentData.amount}}</td>                        
                        <td>${{paymentData.total}}</td>
                      </tr>                      
                    </table>
                    <h3>For any issues, please contact us: <span style="color: blue; margin-top: 5%">premileal@gmail.com</span></h3>
                </div>
             </section>
         </vue-html2pdf>
        </div>
      </template>
    </v-content>
  </v-app>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueHtml2pdf from 'vue-html2pdf';
import paymentService from "@/services/payment/paymentService";

//const FormData = require('form-data'); 

export default {
    
    data: () => {
      return {
        bank: 'Citybank',
        accountNumber: '5899415537',
        points: '2500',
        amount: '57.86',
        serviceCommission: '58.00',
        total: 1852,
        paymentData: null
      }
    },    
    
    methods: {        
        generateReport () {
            console.log("va a generar: ", this.paymentData)
            this.$refs.html2Pdf.generatePdf()      
        },
        onProgress(){
          console.log("notigns");
        },
        hasStartedGeneration(){
          console.log("hast estarted generation");
        },
        hasGenerated(blob){
          /*const formData = new FormData();
          formData.append("file", blob, "invoice.pdf");          
          paymentService.testPDF(formData);*/
        }
    },

    components: {
        VueHtml2pdf
    },

    mounted() {
        const paymentData = localStorage.getItem('paymentData');
        if(paymentData){
          this.paymentData = JSON.parse(paymentData);
          this.generateReport();        
        }        
        console.log("payment: ", this.paymentData);
        
    },


}

</script>

<style lang="css" scoped>

.centered{
   width: 100%;
  margin: 0 auto;
  text-align: center;
}

#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>