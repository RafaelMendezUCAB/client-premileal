export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'buyPointsLabel': viewTexts.buyPointsLabel = term.text; break;
                    case 'navBarLoginLabel': viewTexts.navBarLoginLabel = term.text; break;
                    case 'menuHomeLabel': viewTexts.menuHomeLabel = term.text; break;
                    case 'profileLabel': viewTexts.profileLabel = term.text; break;
                    case 'menuAddBankAccountLabel': viewTexts.menuAddBankAccountLabel = term.text; break;
                    case 'paymentHistoryLabel': viewTexts.paymentHistoryLabel = term.text; break;
                    case 'withdrawalHistoryLabel': viewTexts.withdrawalHistoryLabel = term.text; break;
                    case 'menuLogOutLabel': viewTexts.menuLogOutLabel = term.text; break;
                    /*case '': viewTexts.aboutMembershipPlansLabel = term.text; break;
                    case '': viewTexts.levelPlanLabel = term.text; break;
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
            buyPointsLabel: "Buy Points!",
            navBarLoginLabel: "Log In",
            menuHomeLabel: "Home",
            profileLabel: "Profile",
            menuAddBankAccountLabel: "Add Bank Account",
            paymentHistoryLabel: "Payment History",
            withdrawalHistoryLabel: "Withdrawal History",
            menuLogOutLabel: "Log out"
        }
    }

}