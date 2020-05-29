import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/userModule';
import BankAccount from './modules/bankAccountModule';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user:User,
    bankAccount:BankAccount
  }
})
