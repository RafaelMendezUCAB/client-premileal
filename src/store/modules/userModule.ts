import Vue from "vue";

import userService from "../../services/userService";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {    
    users: [],
  },
  // -----------------------------------------------------------------
  getters: {
    // getters and computed props
    //collection: (state: any) => state.users,
  },
  // -----------------------------------------------------------------
  mutations: {    
    setAllUsers(state: {}, users: []) {
      Vue.set(state, "users", users);
    },
  },
  // -----------------------------------------------------------------
  actions: {    
    getAllUsers: async (context: any) => {
      console.log(typeof context);
      await userService.getAllUsers().then((response: any) => {
        context.commit("setAllUsers", response.data);
      });
    },    
  },
};
