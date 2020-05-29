import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */    
    getUserBankAccounts(userID: number) {
        return API_URL.get(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/all/"+userID);
    },

    getBankAccountStatus(bankAccountID: number){
        return API_URL.get(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/status/"+bankAccountID);
    },

    /* ---------------------- POST METHODS -------------------------- */
    saveBankAccount(bankAccountData: any){
        return API_URL.post(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/create", bankAccountData);
    },

    /* ---------------------- PUT METHODS -------------------------- */
    verifyBankAccount(bankAccountID: number, data: any){
        return API_URL.put(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/verify/"+bankAccountID, data);
    },

    setBankAccountAsPrimary(bankAccountID: number, userID: number){
        return API_URL.put(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/set/primary/"+bankAccountID+"/"+userID);
    },

    updateBankAccount(bankAccountID: number, data: any){
        return API_URL.put(process.env.VUE_APP_USER_BANK_ACCOUNT_ROUTE+"/update/"+bankAccountID, data);
    }
  
    /* ---------------------- DELETE METHODS -------------------------- */
}