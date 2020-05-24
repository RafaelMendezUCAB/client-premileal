import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */    

    /* ---------------------- POST METHODS -------------------------- */
    saveBankAccount(bankAccountData: any){
        return API_URL.post(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/create", bankAccountData);
    }

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}