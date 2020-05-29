export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'loginEmailLabel': viewTexts.loginEmailLabel = term.text; break;
                    case 'loginPasswordLabel': viewTexts.loginPasswordLabel = term.text; break;
                    case 'loginForgotPasswordLabel': viewTexts.loginForgotPasswordLabel = term.text; break;
                    case 'navBarLoginLabel': viewTexts.navBarLoginLabel = term.text; break;
                    case 'loginOptionLabel': viewTexts.loginOptionLabel = term.text; break;
                    case 'loginGoogleLabel': viewTexts.loginGoogleLabel = term.text; break;
                    case 'loginFacebookLabel': viewTexts.loginFacebookLabel = term.text; break;
                    case 'loginDontHaveAccountLabel': viewTexts.loginDontHaveAccountLabel = term.text; break;
                    case 'loginSignUpLabel': viewTexts.loginSignUpLabel = term.text; break;
                    case 'LoadingDataLabel': viewTexts.LoadingDataLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'errorLabel': viewTexts.errorLabel = term.text; break;
                    case 'loginWrongCredentialsLabel': viewTexts.loginWrongCredentialsLabel = term.text; break;
                    case 'networkErrorLabel': viewTexts.networkErrorLabel = term.text; break;
                    case 'networkErrorDescriptionLabel': viewTexts.networkErrorDescriptionLabel = term.text; break;
                    /*case '': viewTexts.learnMoreLabel = term.text; break;
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
            loginEmailLabel: "E-mail address",
            loginPasswordLabel: "Password",
            loginForgotPasswordLabel: "Forgot Password?",
            navBarLoginLabel: "Log In",
            loginOptionLabel: "OR",
            loginGoogleLabel: "Log In with GOOGLE",
            loginFacebookLabel: "Log In with FACEBOOK",
            loginDontHaveAccountLabel: "Don't have an account?",
            loginSignUpLabel: "Sign Up",
            LoadingDataLabel: "Loading data",
            bePatientLabel: "This could take some time. Please, be patient.",
            errorLabel: "Error!",
            loginWrongCredentialsLabel: "Email or password incorrect. Please, try again.",
            networkErrorLabel: "Network Error!",
            networkErrorDescriptionLabel: "There was a network error. Check your network connection and try again.",
        }
    }

}