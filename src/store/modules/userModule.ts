import Vue from "vue";

/* --- Services ---*/
import userService from "../../services/user/userService";

/* --- Types --- */
import User from '../../types/user/User';

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {    
    users: [],
    user: {},    // Type: User
    loggedIn: false
  },
  // -----------------------------------------------------------------
  getters: {    
    // getters and computed props
    //collection: (state: any) => state.users,
    getUserData: (state: any) => state.user,
    getSessionStatus: (state: any) => state.loggedIn,
  },
  // -----------------------------------------------------------------
  mutations: {    
    setAllUsers(state: {}, users: []) {
      Vue.set(state, "users", users);
    },

    setUser(state: {}, user: User){
      Vue.set(state, "user", user);
    },

    setUserSessionStatus(state: {}, status: boolean){
      Vue.set(state, "loggedIn", status);
    },

    addPointToUser(state: {}, points: number){
      Vue.set(state, "user.points", points);
    }
  },
  // -----------------------------------------------------------------
  actions: {    
    getAllUsers: async (context: any) => {
      console.log(typeof context);
      await userService.getAllUsers().then((response: any) => {
        context.commit("setAllUsers", response.data);
      });
    },   
    
    setUserData: async (context: any, user: User) => {
      context.commit("setUser", user);
    },

    setSessionStatus: (context: any, status: boolean) => {
      context.commit("setUserSessionStatus", status);
    },

    addPoints: (context: any, points: number) => {
      context.commit("addPointToUser", points);
    }
  },
};
