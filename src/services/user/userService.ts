import requestService from '../requests/request';

export default {

  /* --------------------- API CALLS ------------------------------- */
  getAllUsers() {
    return requestService.user.getAllUsers();
  },

  login(email: string, password: string){
    return requestService.user.login(email, password);
  },

  socialLogin(email: string, type: string){
    return requestService.user.socialLogin(email, type);
  },

  signUp(user: any){
    return requestService.user.signUp(user);
  }
  /* ------------------------------------------------------------------ */

};
