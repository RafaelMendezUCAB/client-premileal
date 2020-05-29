export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'paymentHistoryTitleLabel': viewTexts.paymentHistoryTitleLabel = term.text; break;
                    case 'userInformationLabel': viewTexts.userInformationLabel = term.text; break;
                    case 'signUpNameLabel': viewTexts.signUpNameLabel = term.text; break;
                    case 'loginEmailLabel': viewTexts.loginEmailLabel = term.text; break;
                    case 'membershipLevelLabel': viewTexts.membershipLevelLabel = term.text; break;
                    case 'seeProfileLabel': viewTexts.seeProfileLabel = term.text; break;
                    case 'yourPaymentHistoryLabel': viewTexts.yourPaymentHistoryLabel = term.text; break;
                    case 'paymentsLabel': viewTexts.paymentsLabel = term.text; break;
                    case 'searchLabel': viewTexts.searchLabel = term.text; break;
                    /*case '': viewTexts.levelPlanLabel = term.text; break;
                    case '': viewTexts.descriptionLabel = term.text; break;
                    case '': viewTexts.basicPlanLabel = term.text; break;
                    case '': viewTexts.onceMemberLabel = term.text; break;
                    case '': viewTexts.oncePremiumLabel = term.text; break;
                    case '': viewTexts.onceGoldLabel = term.text; break;
                    case '': viewTexts.learnMoreLabel = term.text; break;
                    case '': viewTexts.purchaseLabel = term.text; break;
                    case '': viewTexts.buyToBecomePremiumLabel = term.text; break;
                    case '': viewTexts.redeemLabel = term.text; break;
                    case '': viewTexts.useCouponsLabel = term.text; break;
                    case '': viewTexts.updateLabel = term.text; break;
                    case '': viewTexts.becomePremiumLabel = term.text; break;
                    case '': viewTexts.stayLabel = term.text; break;
                    case '': viewTexts.keepAnEyeLabel = term.text; break;
                    case '': viewTexts.waitingForLabel = term.text; break;*/
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            paymentHistoryTitleLabel: "PAYMENT HISTORY",
            userInformationLabel: "User Information",
            signUpNameLabel: "Name",
            loginEmailLabel: "E-mail address",
            membershipLevelLabel: "Membership Level",
            seeProfileLabel: "See Profile",
            yourPaymentHistoryLabel: "YOUR PAYMENT HISTORY",
            paymentsLabel: "Payments",
            searchLabel: "Search"
        }
    }

}