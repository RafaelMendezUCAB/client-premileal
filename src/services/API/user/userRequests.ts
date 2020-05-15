import { API_URL } from "../config";

export default {

    /* ---------------------- GET METHODS -------------------------- */
    getAllUsers() {
      return API_URL.get(process.env.VUE_APP_USER_ROUTE+"/all");
    },
  
    login(email: string, password: string){
      return API_URL.get(process.env.VUE_APP_USER_ROUTE+"/login/"+email+"/"+password);
    },
  
    socialLogin(email: string, type: string){
      return API_URL.get(process.env.VUE_APP_USER_ROUTE+"/login/social/"+email+"/"+type);
    },
  
    /* ---------------------- POST METHODS -------------------------- */
    signUp(user: any){
      return API_URL.post(process.env.VUE_APP_USER_ROUTE+"/signup", user);
    }
  
    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
  };