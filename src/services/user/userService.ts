import api from '../API/request';
import { fa, providerGoogle, providerFacebook } from '@/firebase';

let serverResponse: any = null;

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

  async login(userData: any){
    if(userData.type !== 'No Federado'){      
      serverResponse = await this.socialAuthentication(userData.email, userData.type); 
      if(serverResponse.data === "Social user doesn't exists."){
        return await this.signUp(userData);
      }      
    }
    else {
      serverResponse = await this.authenticate(userData.email, userData.password);      
    }
    return serverResponse;
  },    

  /* --------------------- API CALLS ------------------------------- */
  getAllUsers() {
    return api.user.getAllUsers();
  },

  authenticate(email: string, password: string){
    return api.user.login(email, password);
  },

  socialAuthentication(email: string, type: string){
    return api.user.socialLogin(email, type);
  },

  signUp(user: any){
    return api.user.signUp(user);
  }
  /* ------------------------------------------------------------------ */

};
