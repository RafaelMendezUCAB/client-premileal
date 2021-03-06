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

  getBankAccountStatus(bankAccountID: number){
    return api.bankAccount.getBankAccountStatus(bankAccountID);
  },

  /* ---------------------- POST METHODS -------------------------- */
  saveBankAccount(bankAccountData: any){
    return api.bankAccount.saveBankAccount(bankAccountData);
  },

  /* ---------------------- PUT METHODS -------------------------- */
  verifyBankAccount(bankAccountID: number, data: any){
    return api.bankAccount.verifyBankAccount(bankAccountID, data);
  },

  setBankAccountAsPrimary(bankAccountID: number, userID: number){
    return api.bankAccount.setBankAccountAsPrimary(bankAccountID, userID);
  },

  updateBankAccount(bankAccountID: number, data: any){
    return api.bankAccount.updateBankAccount(bankAccountID, data);
  },

  /* ---------------------- DELETE METHODS -------------------------- */
  deleteBankAccount(bankAccountID: number, bankAccount: any){
    return api.bankAccount.deleteBankAccount(bankAccountID, bankAccount);
  }
};
