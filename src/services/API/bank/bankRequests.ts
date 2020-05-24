import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */
    getAllBanks() {
        return API_URL.get(process.env.VUE_APP_BANK_ROUTE+"/all");
    },

    getBankRoutingNumbers(bank: string){
        return API_URL.get(process.env.VUE_APP_BANK_ROUTE+"/routing/numbers/"+bank);
    }

    /* ---------------------- POST METHODS -------------------------- */

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}