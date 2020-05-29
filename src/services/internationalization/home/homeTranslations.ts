export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'joinPremilealLabel': viewTexts.joinPremilealLabel = term.text; break;
                    case 'startEarningPointsLabel': viewTexts.startEarningPointsLabel = term.text; break;
                    case 'becomeMemberLabel': viewTexts.becomeMemberLabel = term.text; break;
                    case 'AcquirePointsLabel': viewTexts.AcquirePointsLabel = term.text; break;
                    case 'premilealDescriptionLabel': viewTexts.premilealDescriptionLabel = term.text; break;
                    case 'joinLoyaltyProgramLabel': viewTexts.joinLoyaltyProgramLabel = term.text; break;
                    case 'getExclusiveRewardsLabel': viewTexts.getExclusiveRewardsLabel = term.text; break;
                    case 'premilealObjectiveLabel': viewTexts.premilealObjectiveLabel = term.text; break;
                    case 'aboutMembershipPlansLabel': viewTexts.aboutMembershipPlansLabel = term.text; break;
                    case 'levelPlanLabel': viewTexts.levelPlanLabel = term.text; break;
                    case 'descriptionLabel': viewTexts.descriptionLabel = term.text; break;
                    case 'basicPlanLabel': viewTexts.basicPlanLabel = term.text; break;
                    case 'onceMemberLabel': viewTexts.onceMemberLabel = term.text; break;
                    case 'oncePremiumLabel': viewTexts.oncePremiumLabel = term.text; break;
                    case 'onceGoldLabel': viewTexts.onceGoldLabel = term.text; break;
                    case 'learnMoreLabel': viewTexts.learnMoreLabel = term.text; break;
                    case 'purchaseLabel': viewTexts.purchaseLabel = term.text; break;
                    case 'buyToBecomePremiumLabel': viewTexts.buyToBecomePremiumLabel = term.text; break;
                    case 'redeemLabel': viewTexts.redeemLabel = term.text; break;
                    case 'useCouponsLabel': viewTexts.useCouponsLabel = term.text; break;
                    case 'updateLabel': viewTexts.updateLabel = term.text; break;
                    case 'becomePremiumLabel': viewTexts.becomePremiumLabel = term.text; break;
                    case 'stayLabel': viewTexts.stayLabel = term.text; break;
                    case 'keepAnEyeLabel': viewTexts.keepAnEyeLabel = term.text; break;
                    case 'waitingForLabel': viewTexts.waitingForLabel = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            joinPremilealLabel: "Join Premileal Rewards",
            startEarningPointsLabel: "Start Earning Points",
            becomeMemberLabel: "Become a Member Now",
            AcquirePointsLabel: "Acquire points now!",
            premilealDescriptionLabel: "Welcome to Premileal, an exclusive loyalty program. The journey of this rewarding program begins after the purchase of Premileal points from our web application. It entitles you to a lifetime of premium privileges, benefits and services. Plus if you earn more points you can get better rewards!",
            joinLoyaltyProgramLabel: "JOIN OUR LOYALTY PROGRAM",
            getExclusiveRewardsLabel: "GET EXCLUSIVE REWARDS",
            premilealObjectiveLabel: "The objective of our platform is for you, our dear client, to be able to benefit from the purchase of points, special offers that you will receive only for being a member of our rewards program, and the possibility of exchanging the points that you have obtained for other products or money among other promotions that will arrive soon.",
            aboutMembershipPlansLabel: "About our Membership Plans",
            waitingForLabel: "What are you waiting for?",
            levelPlanLabel: "levelPlanLabel",
            descriptionLabel: "Description",
            basicPlanLabel: "Basic",
            onceMemberLabel: "Once your Premileal account is created, you become a Basic level user for free, at this level you can buy the number of points you want, after registering a bank account on our platform.",
            oncePremiumLabel: "When you purchase a lifetime Premium subscription to your account for the price of $25.00, you will be able to get 20% more points every time you make a new purchase.",
            onceGoldLabel: "The maximun membership level that an user can reach after the purchase of a lifetime Premiun account and being constantly participating on promotions and purchase of products. In addition, users who reach this level will receive 2500 points for each purchase.",
            learnMoreLabel: "Learn More",
            purchaseLabel: "Purchase",
            buyToBecomePremiumLabel: "Buy points and you will be closer to becoming a premium member!",
            redeemLabel: "Redeem",
            useCouponsLabel: "Use coupons with your next purchases and get benefits in our products",
            updateLabel: "Update",
            becomePremiumLabel: "Become a Premiun Loyalty Member to get better prizes and earn more points",
            stayLabel: "Stay with us",
            keepAnEyeLabel: "Keep an eye on our website to discover new products, and promotions!"
        }
    }

}