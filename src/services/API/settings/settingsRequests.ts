import { API_URL } from "../config";


export default {
    /* ---------------------- GET METHODS -------------------------- */
    getSettings() {
        return API_URL.get(process.env.VUE_APP_SETTINGS_ROUTE+"/all");
    },

    /* ---------------------- POST METHODS -------------------------- */

    /* ---------------------- PUT METHODS -------------------------- */
  
    /* ---------------------- DELETE METHODS -------------------------- */
}