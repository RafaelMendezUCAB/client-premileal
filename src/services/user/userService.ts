import api from '../API/request';

export default {  

  getUserFirstName(userFullName: string){
    if(userFullName.split(" ").length > 1){
      return userFullName.split(" ")[0];
    }
    else {
      return userFullName;
    }
  },

  getUserLastName(userFullName: string){
    if(userFullName.split(" ").length > 1){
      const names = userFullName.split(" ");      
      if(names.length === 4){
        return names[3];
      }
      return names[1];
    }
    else {
      return userFullName;
    }
  },  

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
