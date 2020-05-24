import api from '../API/request';

export default {

  /* ---------------------- GET METHODS -------------------------- */  

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
