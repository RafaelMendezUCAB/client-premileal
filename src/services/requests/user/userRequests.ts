import { API_URL } from "../config";  // API_URL = http://localhost:3000/premileal/api

export default {

    /* ---------------------- GET METHODS -------------------------- */
    getAllUsers() {
      return API_URL.get("/user/all");
    },
  
     login(email: string, password: string){
      return API_URL.get("/user/login/"+email+"/"+password);
    },
  
    socialLogin(email: string, type: string){
      return API_URL.get("/user/login/social/"+email+"/"+type);
    },
  
    /* ---------------------- POST METHODS -------------------------- */
    signUp(user: any){
      return API_URL.post("/user/signup", user);
    }
  
    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
  };