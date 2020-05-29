export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'bankAccountVerificationLabel': viewTexts.bankAccountVerificationLabel = term.text; break;
                    case 'bankAccountInformation': viewTexts.bankAccountInformation = term.text; break;
                    case 'bankLabel': viewTexts.bankLabel = term.text; break;
                    case 'accountHolderName': viewTexts.accountHolderName = term.text; break;
                    case 'bankAccountNumberLabel': viewTexts.bankAccountNumberLabel = term.text; break;
                    case 'bankAccountRoutingNumberLabel': viewTexts.bankAccountRoutingNumberLabel = term.text; break;
                    case 'bankAccountCheckingNumberLabel': viewTexts.bankAccountCheckingNumberLabel = term.text; break;
                    case 'bankAccountStatus': viewTexts.bankAccountStatus = term.text; break;
                    case 'insertAmountHere': viewTexts.insertAmountHere = term.text; break;
                    case 'firstDepositLabel': viewTexts.firstDepositLabel = term.text; break;
                    case 'secondDepositLabel': viewTexts.secondDepositLabel = term.text; break;
                    case 'didntReceiveMoney': viewTexts.didntReceiveMoney = term.text; break;
                    case 'verifyBankAccountLabel': viewTexts.verifyBankAccountLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'whatNowLabel': viewTexts.whatNowLabel = term.text; break;
                    case 'youHaveTwoOptionsLabel': viewTexts.youHaveTwoOptionsLabel = term.text; break;
                    case 'notifyUsOptionLabel': viewTexts.notifyUsOptionLabel = term.text; break;
                    case 'waitMoreTimeLabel': viewTexts.waitMoreTimeLabel = term.text; break;
                    case 'cancelLabel': viewTexts.cancelLabel = term.text; break;
                    case 'notifyUsLabel': viewTexts.notifyUsLabel = term.text; break;
                    case 'bankAccountAlreadyVerified': viewTexts.bankAccountAlreadyVerified = term.text; break;
                    case 'noNeedToVerifyLabel': viewTexts.noNeedToVerifyLabel = term.text; break;
                    case 'bankAccountSuccessfullyVerifiedLabel': viewTexts.bankAccountSuccessfullyVerifiedLabel = term.text; break;
                    case 'bankAccountVerifiedBenefits': viewTexts.bankAccountVerifiedBenefits = term.text; break;
                    case 'step1Label': viewTexts.step1Label = term.text; break;
                    case 'step1DescriptionLabel': viewTexts.step1DescriptionLabel = term.text; break;
                    case 'step2Label': viewTexts.step2Label = term.text; break;
                    case 'step2DescriptionLabel': viewTexts.step2DescriptionLabel = term.text; break;
                    case 'step3Label': viewTexts.step3Label = term.text; break;
                    case 'step3DescriptionLabelPar1': viewTexts.step3DescriptionLabelPar1 = term.text; break;
                    case 'verifiedLabel': viewTexts.verifiedLabel = term.text; break;
                    case 'step3DescriptionLabelPar2': viewTexts.step3DescriptionLabelPar2 = term.text; break;
                    case 'importantLabel': viewTexts.importantLabel = term.text; break;
                    case 'exactAmountLabel': viewTexts.exactAmountLabel = term.text; break;
                    case 'depositsDelayLabel': viewTexts.depositsDelayLabel = term.text; break;
                    case 'makeSureNoDepositsLabel': viewTexts.makeSureNoDepositsLabel = term.text; break;
                    case 'unverifiedLabel': viewTexts.unverifiedLabel = term.text; break;
                    case 'networkErrorLabel': viewTexts.networkErrorLabel = term.text; break;
                    case 'networkErrorDescriptionLabel': viewTexts.networkErrorDescriptionLabel = term.text; break;
                    case 'errorInvalidAmountLabel': viewTexts.errorInvalidAmountLabel = term.text; break;
                    case 'errorInvalidAmountDescriptionLabel': viewTexts.errorInvalidAmountDescriptionLabel = term.text; break;
                    case 'sendingNotificationLabel': viewTexts.sendingNotificationLabel = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            bankAccountVerificationLabel: "BANK ACCOUNT VERIFICATION",
            bankAccountInformation: "Bank Account Information",
            bankLabel: "Bank",
            accountHolderName: "Holder Name",
            bankAccountNumberLabel: "Bank Account Number",
            bankAccountRoutingNumberLabel: "Bank Account Routing Number",
            bankAccountCheckingNumberLabel: "Bank Account Checking Number",
            bankAccountStatus: "Bank Account Status",
            insertAmountHere: "Insert Amounts Here",
            firstDepositLabel: "First Deposit",
            secondDepositLabel: "Second Deposit",
            didntReceiveMoney: "I didn't received any money",
            verifyBankAccountLabel: "Verify Bank Account",
            bePatientLabel: "This could take some time. Please, be patient.",
            whatNowLabel: "What now?",
            youHaveTwoOptionsLabel: "As you didn't received money, you have 2 options",
            notifyUsOptionLabel: "You can notify us about the issue, so we get it touch with you ass soon as we can",
            waitMoreTimeLabel: "Wait more time just to make sure money will never get to you bank account",
            cancelLabel: "Cancel",
            notifyUsLabel: "Notify us",
            bankAccountAlreadyVerified: "Bank Account already verified!",
            noNeedToVerifyLabel: "There's no need to verify the bank account if it's already verified",
            bankAccountSuccessfullyVerifiedLabel: "Bank Account successfully verified!",
            bankAccountVerifiedBenefits: "Now you can use you bank account to buy points and retire money",
            step1Label: "Step 1",
            step1DescriptionLabel: "You must go to you bank account and see your balance. Two deposits made from Premileal must appear, you must take note of both amounts",
            step2Label: "Step 2",
            step2DescriptionLabel: "Insert each deposit on each input and then click on verify. If amounts appear not to be correct, switch both and try again. You will only have 3 tries",
            step3Label: "Step 3",
            step3DescriptionLabelPar1: "If both amounts are correct, then, the bank account status will change to",
            verifiedLabel: "Verified",
            step3DescriptionLabelPar2: "and you'll also be able to see it change on the left card shown",
            importantLabel: "Important!",
            exactAmountLabel: "Insert the exact amount including decimals. Ex: 0.75",
            depositsDelayLabel: "Remember deposits could take days to appear in your bank account balance. Be patient",
            makeSureNoDepositsLabel: "If you mark that you didn't received money, then you could notify us and we will get it touch with you as soon as we can. Make sure the transaction didn't take place"  ,
            unverifiedLabel: "Unverified",      
            networkErrorLabel: "Network Error!",
            networkErrorDescriptionLabel: "There was a network error. Check your network connection and try again.",
            errorInvalidAmountLabel: "Error. Invalid amounts!",
            errorInvalidAmountDescriptionLabel: "The amounts you have entered didn't match with the ones we have. Please, try again.",
            sendingNotificationLabel: "Sending notification."
        }
    }

}