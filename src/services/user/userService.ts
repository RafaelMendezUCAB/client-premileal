import api from '../API/request';

export default {

  /* --------------------- API CALLS ------------------------------- */
  getAllUsers() {
    return api.user.getAllUsers();
  },

  login(email: string, password: string){
    return api.user.login(email, password);
  },

  socialLogin(email: string, type: string){
    return api.user.socialLogin(email, type);
  },

  signUp(user: any){
    return api.user.signUp(user);
  }
  /* ------------------------------------------------------------------ */

};
