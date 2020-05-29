import { API_URL } from "../config";

export default {
    getTermsTranslations(lang: string) {
        return API_URL.get(process.env.VUE_APP_INTERNATIONALIZATION_ROUTE+"/"+lang);
    },
}