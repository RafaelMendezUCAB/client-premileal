export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'signUpNameLabel': viewTexts.signUpNameLabel = term.text; break;
                    case 'signUpLastNameLabel': viewTexts.signUpLastNameLabel = term.text; break;
                    case 'loginPasswordLabel': viewTexts.loginPasswordLabel = term.text; break;
                    case 'loginEmailLabel': viewTexts.loginEmailLabel = term.text; break;
                    case 'signUpBirthDateLabel': viewTexts.signUpBirthDateLabel = term.text; break;
                    case 'signUpCountryLabel': viewTexts.signUpCountryLabel = term.text; break;
                    case 'loginSignUpLabel': viewTexts.loginSignUpLabel = term.text; break;
                    case 'loginOptionLabel': viewTexts.loginOptionLabel = term.text; break;
                    case 'signUpGoogleLabel': viewTexts.signUpGoogleLabel = term.text; break;
                    case 'signUpFacebookLabel': viewTexts.signUpFacebookLabel = term.text; break;
                    case 'savingDataLabel': viewTexts.savingDataLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'alreadyHaveAccountLabel': viewTexts.alreadyHaveAccountLabel = term.text; break;
                    case 'navBarLoginLabel': viewTexts.navBarLoginLabel = term.text; break;
                    case 'requiredLabel': viewTexts.requiredLabel = term.text; break;
                    case 'onlyAlphabet': viewTexts.onlyAlphabet = term.text; break;
                    case 'passwordLengthLabel': viewTexts.passwordLengthLabel = term.text; break;
                    case 'invalidEmailLabel': viewTexts.invalidEmailLabel = term.text; break;
                    case 'englishLabel': viewTexts.englishLabel = term.text; break;
                    case 'spanishLabel': viewTexts.spanishLabel = term.text; break;
                    case 'selectPreferredLanguageLabel': viewTexts.selectPreferredLanguageLabel = term.text; break;
                    case 'errorLabel': viewTexts.errorLabel = term.text; break;
                    case 'emailInUseLabel': viewTexts.emailInUseLabel = term.text; break;
                    case 'networkErrorLabel': viewTexts.networkErrorLabel = term.text; break;
                    case 'networkErrorDescriptionLabel': viewTexts.networkErrorDescriptionLabel = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            signUpNameLabel: "Name",
            signUpLastNameLabel: "Last Name",
            loginPasswordLabel: "Password",
            loginEmailLabel: "E-mail",
            signUpBirthDateLabel: "Birth Date",
            signUpCountryLabel: "Country",
            loginSignUpLabel: "Sign Up",
            loginOptionLabel: "OR",
            signUpGoogleLabel: "Sign Up with GOOGLE",
            signUpFacebookLabel: "Sign Up with FACEBOOK",
            savingDataLabel: "Saving data",
            bePatientLabel: "This could take some time. Please, be patient.",
            alreadyHaveAccountLabel: "Already have an account?",
            navBarLoginLabel: "Log in",
            requiredLabel: "Required.",
            onlyAlphabet: "Only alphabet characters allowed",
            passwordLengthLabel: "Password must contain at least eight characters.",
            invalidEmailLabel: "Invalid e-mail.",
            englishLabel: "English",
            spanishLabel: "Spanish",
            selectPreferredLanguageLabel: "Select preferred language",
            errorLabel: "Error!",
            emailInUseLabel: "The email address is already registered. Please, use another or login.",
            networkErrorLabel: "Network Error!",
            networkErrorDescriptionLabel: "There was a network error. Check your network connection and try again."
        }
    },    

}