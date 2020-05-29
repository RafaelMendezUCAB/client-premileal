import api from '../API/request';

let serverResponse = null;

export default {     

  /* --------------------- API CALLS ------------------------------- */
  async getSettings() {
    serverResponse = await api.settings.getSettings();
    console.log("in service: ", serverResponse.data);
    if(serverResponse.data !== "No settings."){
        return {
            serviceCommision: serverResponse.data[0].set_service_commission,
            gatewayCommision: serverResponse.data[0].set_gateway_commission,
            dolarValue: serverResponse.data[0].set_gold_income
        }
    }
  },  

};
