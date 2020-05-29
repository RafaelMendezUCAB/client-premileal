export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'enterInformationLabel': viewTexts.enterInformationLabel = term.text; break;
                    case 'confirmDataLabel': viewTexts.confirmDataLabel = term.text; break;
                    case 'verifyBankAccountLabel': viewTexts.verifyBankAccountLabel = term.text; break;
                    case 'bankAccountRegistrationLabel': viewTexts.bankAccountRegistrationLabel = term.text; break;
                    case 'bankLabel': viewTexts.bankLabel = term.text; break;
                    case 'accountHolderName': viewTexts.accountHolderName = term.text; break;
                    case 'accountNumberLabel': viewTexts.accountNumberLabel = term.text; break;
                    case 'accountRoutingNumberLabel': viewTexts.accountRoutingNumberLabel = term.text; break;
                    case 'accountCheckNumberLabel': viewTexts.accountCheckNumberLabel = term.text; break;
                    case 'setAccountPrimayLabel': viewTexts.setAccountPrimayLabel = term.text; break;
                    case 'saveBankAccountLabel': viewTexts.saveBankAccountLabel = term.text; break;
                    case 'cancelLabel': viewTexts.cancelLabel = term.text; break;
                    case 'youEnteredLabel': viewTexts.youEnteredLabel = term.text; break;
                    case 'routingNumberLabel': viewTexts.routingNumberLabel = term.text; break;
                    case 'checkNumberLabel': viewTexts.checkNumberLabel = term.text; break;
                    case 'setAsPrimaryLabel': viewTexts.setAsPrimaryLabel = term.text; break;
                    case 'confirmLabel': viewTexts.confirmLabel = term.text; break;
                    case 'backLabel': viewTexts.backLabel = term.text; break;
                    case 'howIVerifyBankAccountLabel': viewTexts.howIVerifyBankAccountLabel = term.text; break;
                    case 'createdMessagePart1': viewTexts.createdMessagePart1 = term.text; break;
                    case 'unverifiedLabel': viewTexts.unverifiedLabel = term.text; break;
                    case 'createdMessagePart2': viewTexts.createdMessagePart2 = term.text; break;
                    case 'createdMessagePart3': viewTexts.createdMessagePart3 = term.text; break;
                    case 'formLabel': viewTexts.formLabel = term.text; break;
                    case 'createdMessagePart4': viewTexts.createdMessagePart4 = term.text; break;
                    case 'thanksLabel': viewTexts.thanksLabel = term.text; break;
                    case 'gotItLabel': viewTexts.gotItLabel = term.text; break;
                    case 'yesLabel': viewTexts.yesLabel = term.text; break;
                    case 'routingNumberInvalidLabel': viewTexts.routingNumberInvalidLabel = term.text; break;
                    case 'routingNumberDoesntMatchLabel': viewTexts.routingNumberDoesntMatchLabel = term.text; break;
                    case 'bankAccountAlreadyExistsLabel': viewTexts.bankAccountAlreadyExistsLabel = term.text; break;
                    case 'bankAccountAlreadyExistsDescriptionLabel': viewTexts.bankAccountAlreadyExistsDescriptionLabel = term.text; break;
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
            enterInformationLabel: "Enter information",
            confirmDataLabel: "Confirm data",
            verifyBankAccountLabel: "Verify Bank Account",
            bankAccountRegistrationLabel: "Bank Account Registration",
            bankLabel: "Bank",
            accountHolderName: "Account holder name",
            accountNumberLabel: "Account Number",
            accountRoutingNumberLabel: "Account Routing Number",
            accountCheckNumberLabel: "Account checking number",
            setAccountPrimayLabel: "Set account as primary",
            saveBankAccountLabel: "Save Bank Account",
            cancelLabel: "Cancel",
            youEnteredLabel: "You've entered",
            routingNumberLabel: "Routing Number",
            checkNumberLabel: "Check Number",
            setAsPrimaryLabel: "Set as primary",
            confirmLabel: "Confirm",
            backLabel: "Back",
            howIVerifyBankAccountLabel: "How can I verify my Bank Account?",
            createdMessagePart1: "Your bank account has been successfully registered, but it currently has a status of",
            unverifiedLabel: "Unverified",
            createdMessagePart2: "which means, you can't use it for any transaction inside our platform",
            createdMessagePart3: "In order to change the bank account status to \"Verified\", we've made 2 small deposits to that bank account so you can do the account validation. To validate the account, you must fill the corresponding ",
            formLabel: "form",
            createdMessagePart4: "with the exact amount of both deposits. If the information provided corresponds with the ones we have, then the Bank Account will now have a status of \"Verified\" which means, now is able for being use for any transaction inside our platform",
            thanksLabel: "Thanks for trusting us!",
            gotItLabel: "Got it!",
            yesLabel: "Yes",
            routingNumberInvalidLabel: "Error. Routing number is invalid.",
            routingNumberDoesntMatchLabel: "You've entered a routing number that doesn't belong to the bank selected. Please, change bank or routing number.",
            bankAccountAlreadyExistsLabel: "Error. Bank account already exists.",
            bankAccountAlreadyExistsDescriptionLabel: "You've entered a bank account that has already been registered before. If the problem persists, please contact us at: premileal@gmail.com",
            networkErrorLabel: "Network Error!",
            networkErrorDescriptionLabel: "There was a network error. Check your network connection and try again."
        }
    }

}