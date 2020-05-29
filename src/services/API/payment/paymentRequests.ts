import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */
    getUserPayments(userID: any){
      return API_URL.get(process.env.VUE_APP_PAYMENT_ROUTE+"/user/all/"+userID);
    },

    /* ---------------------- POST METHODS -------------------------- */
    pointsPurchase(payment: any){
      return API_URL.post(process.env.VUE_APP_PAYMENT_ROUTE+"/points/purchase", payment);
    },

    notifyAdministrator(data: any){
      return API_URL.post(process.env.VUE_APP_PAYMENT_ROUTE+"/notify/administrator", data);
    },

    testPDF(data: any){
      return API_URL.post(process.env.VUE_APP_PAYMENT_ROUTE+"/test/payment", data);
    }

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}