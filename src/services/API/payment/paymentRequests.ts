import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */

    /* ---------------------- POST METHODS -------------------------- */
    pointsPurchase(payment: any){
        return API_URL.post(process.env.VUE_APP_PAYMENT_ROUTE+"/points/purchase", payment);
      }

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}