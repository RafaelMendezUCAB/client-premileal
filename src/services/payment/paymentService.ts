import api from '../API/request';

const serverResponse = null;

export default { 

    calculateAmout(points: number, dolarValue: number){
        return Math.round((points / dolarValue) * 100.0 ) / 100.0;        
    },

    calculateComision(points: number, amount: number, serviceCommision: number, stripeCommision: number){
        if(points !== 0){
            return Math.round(((amount * serviceCommision / 100) + stripeCommision) * 100.0) /100.0;
        }
        return 0.00;
    },
    
    calculateTotalAmount(amount: number, totalCommision: number){
        if(amount !== 0){
            return Math.round((amount + totalCommision) * 100.0) / 100.0;
        }
        return 0.00;
    },

    

  /* --------------------- API CALLS ------------------------------- */
    buyPoints(payment: any){
        return api.payment.pointsPurchase(payment);
    }

};
