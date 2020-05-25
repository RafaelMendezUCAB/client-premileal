import api from '../API/request';

let serverResponse = null;

export default {

  /* ---------------------- GET METHODS -------------------------- */ 
  async getUserBankAccounts(userID: number) {
    serverResponse = await api.bankAccount.getUserBankAccounts(userID);
    if(serverResponse.data === 'No bank accounts registered.'){
      return [];
    }
    return serverResponse.data;
  },

  /* ---------------------- POST METHODS -------------------------- */
  saveBankAccount(bankAccountData: any){
    return api.bankAccount.saveBankAccount(bankAccountData);
  },

  /* ---------------------- PUT METHODS -------------------------- */
  verifyBankAccount(bankAccountID: number, data: any){
    return api.bankAccount.verifyBankAccount(bankAccountID, data);
  }

  /* ---------------------- DELETE METHODS -------------------------- */
};
