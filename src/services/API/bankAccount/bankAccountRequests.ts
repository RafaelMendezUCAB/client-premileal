import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */    
    getUserBankAccounts(userID: number) {
        return API_URL.get(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/userBank/all/"+userID);
    },

    /* ---------------------- POST METHODS -------------------------- */
    saveBankAccount(bankAccountData: any){
        return API_URL.post(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/create", bankAccountData);
    }

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}