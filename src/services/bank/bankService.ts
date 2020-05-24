import api from '../API/request';

export default {     

  /* --------------------- API CALLS ------------------------------- */
  getAllBanks() {
    return api.bank.getAllBanks();
  },

  getBankRoutingNumbers(bank: string){
      return api.bank.getBankRoutingNumbers(bank);
  }
  
  /* ------------------------------------------------------------------ */

};
