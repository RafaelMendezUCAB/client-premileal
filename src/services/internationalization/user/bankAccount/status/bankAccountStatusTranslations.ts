export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'bankAccountDetailsLabel': viewTexts.bankAccountDetailsLabel = term.text; break;
                    case 'bankAccountInformation': viewTexts.bankAccountInformation = term.text; break;
                    case 'bankLabel': viewTexts.bankLabel = term.text; break;
                    case 'accountHolderName': viewTexts.accountHolderName = term.text; break;
                    case 'accountNumberLabel': viewTexts.accountNumberLabel = term.text; break;
                    case 'accountRoutingNumberLabel': viewTexts.accountRoutingNumberLabel = term.text; break;
                    case 'accountCheckNumberLabel': viewTexts.accountCheckNumberLabel = term.text; break;
                    case 'bankAccountStatus': viewTexts.bankAccountStatus = term.text; break;
                    case 'editBankAccontLabel': viewTexts.editBankAccontLabel = term.text; break;
                    case 'verifyBankAccountLabel': viewTexts.verifyBankAccountLabel = term.text; break;
                    case 'bankAccountUpdateLabel': viewTexts.bankAccountUpdateLabel = term.text; break;
                    case 'newBankAccountHolderNameLabel': viewTexts.newBankAccountHolderNameLabel = term.text; break;
                    case 'cancelLabel': viewTexts.cancelLabel = term.text; break;
                    case 'updateLabel': viewTexts.updateLabel = term.text; break;
                    case 'areYouSureLabel': viewTexts.areYouSureLabel = term.text; break;
                    case 'deletingBankAccountDescriptionLabel': viewTexts.deletingBankAccountDescriptionLabel = term.text; break;
                    case 'yesLabel': viewTexts.yesLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'bankAccountSuccessfullyDelete': viewTexts.bankAccountSuccessfullyDelete = term.text; break;
                    case 'bankAccountSuccessfullyUpdated': viewTexts.bankAccountSuccessfullyUpdated = term.text; break;
                    case 'bankAccountDeletedLabel': viewTexts.bankAccountDeletedLabel = term.text; break;
                    case 'bankAccountUpdatedLabel': viewTexts.bankAccountUpdatedLabel = term.text; break;
                    case 'bankAccountMovements': viewTexts.bankAccountMovements = term.text; break;
                    case 'movementsLabel': viewTexts.movementsLabel = term.text; break;
                    case 'searchLabel': viewTexts.searchLabel = term.text; break;
                    case 'deletingBankAccountLabel': viewTexts.deletingBankAccountLabel = term.text; break;
                    case 'settingPrimaryBankAccountLabel': viewTexts.settingPrimaryBankAccountLabel = term.text; break;
                    case 'updatingBankAccountLabel': viewTexts.updatingBankAccountLabel = term.text; break;
                    case 'errorUpdatingBankAccount': viewTexts.errorUpdatingBankAccount = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            bankAccountDetailsLabel: "BANK ACCOUNT DETAILS",
            bankAccountInformation: "Bank Account Information",
            bankLabel: "Bank",
            accountHolderName: "Bank Account Holder Name",
            accountNumberLabel: "Bank Account Number",
            accountRoutingNumberLabel: "Bank Account Routing Number",
            accountCheckNumberLabel: "Bank Account Checking Number",
            bankAccountStatus: "Bank Account Status",
            editBankAccontLabel: "Edit Bank Account",
            verifyBankAccountLabel: "Verify bank account",
            bankAccountUpdateLabel: "Bank account update",
            newBankAccountHolderNameLabel: "Enter new bank account holder name",
            cancelLabel: "Cancel",
            updateLabel: "Update",
            areYouSureLabel: "Are you sure?",
            deletingBankAccountDescriptionLabel: "By deleting a bank account, you won't be able to use it in our platform unless you register and validate it back again",
            yesLabel: "Yes",
            bePatientLabel: "This could take some time. Please, be patient.",
            bankAccountSuccessfullyDelete: "Bank account successfully deleted!",
            bankAccountSuccessfullyUpdated: "Bank account successfully updated!",
            bankAccountDeletedLabel: "your bank account has been deleted",
            bankAccountUpdatedLabel: "your bank account has been updated",
            bankAccountMovements: "Bank Account Movements",
            movementsLabel: "Movements",
            searchLabel: "Search",
            deletingBankAccountLabel: "Updating Bank Account.",
            settingPrimaryBankAccountLabel: "Setting bank account as primary.",
            updatingBankAccountLabel: "Updating Bank Account.",
            errorUpdatingBankAccount: "Error. bank account couldn't be updated!"
        }
    }

}