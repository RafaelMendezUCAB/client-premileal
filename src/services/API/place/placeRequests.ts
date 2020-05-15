import { API_URL } from "../config";  // API_URL = http://localhost:3000/premileal/api

export default {

  /* ---------------------- GET METHODS -------------------------- */
  getAllPlaces() {
    return API_URL.get("/place/all");
  },    

  /* ---------------------- POST METHODS -------------------------- */

  /* ---------------------- PUT METHODS -------------------------- */

  /* ---------------------- DELETE METHODS -------------------------- */
};
