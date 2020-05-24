import api from '../API/request';

export default {

  /* ---------------------- GET METHODS -------------------------- */  

  /* ---------------------- POST METHODS -------------------------- */
  saveBankAccount(bankAccountData: any){
    return api.bankAccount.saveBankAccount(bankAccountData);
  }

  /* ---------------------- PUT METHODS -------------------------- */

  /* ---------------------- DELETE METHODS -------------------------- */
};
