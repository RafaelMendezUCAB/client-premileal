import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */    

    /* ---------------------- POST METHODS -------------------------- */
    saveBankAccount(bankAccountData: any){
        return API_URL.post(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/create", bankAccountData);
    },

    /* ---------------------- PUT METHODS -------------------------- */
    verifyBankAccount(bankAccountID: number, data: any){
        return API_URL.put(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/verify/"+bankAccountID, data);
    }
  
    /* ---------------------- DELETE METHODS -------------------------- */
}