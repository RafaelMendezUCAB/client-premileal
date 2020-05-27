import api from '../API/request';
import { fa, fb, providerGoogle, providerFacebook } from "../../firebase";

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

  getOnlyBirthDate(birthdate: string){
    return birthdate.split("T")[0];
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
  
  async uploadProfileImage(userID: any, imageFile: any) {
    const imageExtension = imageFile.name.split(".")[1];
    return new Promise(function (resolve, reject) {
      const storageRef = fb
        .storage()
        .ref("images/user/" + userID + "/profile/profileImage.png");
      const uploadTask = storageRef.put(imageFile);
  
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          reject(error);
        },
        async () => {
          await uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
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
  },

  updateUserProfileImage(userID: number, imageURL: any){
    return api.user.updateUserProfileImage(userID, { URL: imageURL });
  },

  updateUserData(userID: number, userData: any){
    return api.user.updateUserData(userID, userData);
  }
  /* ------------------------------------------------------------------ */

};
