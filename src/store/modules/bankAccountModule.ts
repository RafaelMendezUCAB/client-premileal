import Vue from "vue";

import BankAccount from "@/types/bank/bankAccount";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {    
    bankAccount: {},    
  },
  // -----------------------------------------------------------------
  getters: {        
    getBankAccountData: (state: any) => state.bankAccount,
  
  },
  // -----------------------------------------------------------------
  mutations: {    
    setBankAccountData(state: {}, bankAccount: BankAccount) {
      Vue.set(state, "bankAccount", bankAccount);
    },
    
  },
  // -----------------------------------------------------------------
  actions: {    
    setBankAccount: async (context: any, bankAccount: BankAccount) => {
        context.commit("setBankAccountData", bankAccount);
    }   
        
  },
};
