import api from '../API/request';

import home from './home/homeTranslations';
import login from './login/loginTranslations';
import pointsPurchase from './points/purchase/pointsPurchaseTranslations';
import pointsWithdrawal from './points/withdrawal/pointsWithdrawalTranslations';
import signUp from './signup/signUpTranslations';
import premium from './suscriptions/premium/purchase/premiumPurchaseTranslations';
import bankAccountRegistration from './user/bankAccount/registration/bankAccountRegistrationTranslations';
import bankAccountSettings from './user/bankAccount/settings/bankAccountSettingsTranslatios';
import bankAccountStatus from './user/bankAccount/status/bankAccountStatusTranslations';
import bankAccountVerification from './user/bankAccount/verification/bankAccountVerificationTranslations';
import paymentHistory from './user/history/payment/paymentHistoryTranslations';
import withdrawalHistory from './user/history/withdrawal/withdrawalHistoryTranslations';
import userProfile from './user/profile/userProfileTranslations';
import userProfileSettings from './user/profile/settings/userProfileSettingsTranslations';
import navBar from './components/navbar/navbarTranslations';
import footer from './components/footer/footerTranslations';

export default {

  home,
  login,
  pointsPurchase,
  pointsWithdrawal,
  signUp,
  premium,
  bankAccountRegistration,
  bankAccountSettings,
  bankAccountStatus,
  bankAccountVerification,
  paymentHistory,
  withdrawalHistory,
  userProfile,
  userProfileSettings,
  navBar,
  footer,

  /* ---------------------- METHODS -------------------------- */
  getTermsTranslations(lang: string) {
      return api.internationalization.getTermsTranslations(lang);
  },

  newTerms(currentsTerms: any, allTerms: any){
    if(!currentsTerms){
      return true;
    }
    allTerms.forEach((term: any) => {
        if(!currentsTerms.indexOf(term)){
            return true;
        }
    });
    return false;
  }
  
};
