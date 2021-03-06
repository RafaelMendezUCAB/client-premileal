export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'profileSettingsLabel': viewTexts.profileSettingsLabel = term.text; break;
                    case 'userProfileLabel': viewTexts.userProfileLabel = term.text; break;
                    case 'clickHereToUploadPhotoLabel': viewTexts.clickHereToUploadPhotoLabel = term.text; break;
                    case 'uploadImageLabel': viewTexts.uploadImageLabel = term.text; break;
                    case 'signUpNameLabel': viewTexts.signUpNameLabel = term.text; break;
                    case 'signUpLastNameLabel': viewTexts.signUpLastNameLabel = term.text; break;
                    case 'loginPasswordLabel': viewTexts.loginPasswordLabel = term.text; break;
                    case 'loginEmailLabel': viewTexts.loginEmailLabel = term.text; break;
                    case 'signUpBirthDateLabel': viewTexts.signUpBirthDateLabel = term.text; break;
                    case 'signUpCountryLabel': viewTexts.signUpCountryLabel = term.text; break;
                    case 'membershipLevelLabel': viewTexts.membershipLevelLabel = term.text; break;
                    case 'pointsAvailableLabel': viewTexts.pointsAvailableLabel = term.text; break;
                    case 'updateUserLabel': viewTexts.updateUserLabel = term.text; break;
                    case 'bankAccountsLabel': viewTexts.bankAccountsLabel = term.text; break;
                    case 'registeredBanksLabel': viewTexts.registeredBanksLabel = term.text; break;
                    case 'verifiedLabel': viewTexts.verifiedLabel = term.text; break;
                    case 'unverifiedLabel': viewTexts.unverifiedLabel = term.text; break;
                    case 'bankLabel': viewTexts.bankLabel = term.text; break;
                    case 'accountNumberLabel': viewTexts.accountNumberLabel = term.text; break;
                    case 'statusLabel': viewTexts.statusLabel = term.text; break;
                    case 'detailsLabel': viewTexts.detailsLabel = term.text; break;
                    case 'resetValuesLabel': viewTexts.resetValuesLabel = term.text; break;
                    case 'englishLabel': viewTexts.englishLabel = term.text; break;
                    case 'spanishLabel': viewTexts.spanishLabel = term.text; break;
                    case 'selectPreferredLanguageLabel': viewTexts.selectPreferredLanguageLabel = term.text; break;
                    case 'userUpdatedLabel': viewTexts.userUpdatedLabel = term.text; break;
                    case 'dataUpdatedLabel': viewTexts.dataUpdatedLabel = term.text; break;
                    case 'anErrorOcurredLabel': viewTexts.anErrorOcurredLabel = term.text; break;
                    case 'dataNotUpdatedLabel': viewTexts.dataNotUpdatedLabel = term.text; break;
                    case 'uploadingImageLabel': viewTexts.uploadingImageLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'imageNotUploadedLabel': viewTexts.imageNotUploadedLabel = term.text; break;
                    case 'imageUpdatedLabel': viewTexts.imageUpdatedLabel = term.text; break;
                    case 'updatedImageLabel': viewTexts.updatedImageLabel = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            profileSettingsLabel: "PROFILE SETTINGS",
            userProfileLabel: "User Profile",
            clickHereToUploadPhotoLabel: "Click here to upload new photo",
            uploadImageLabel: "upload image",
            signUpNameLabel: "Name",
            signUpLastNameLabel: "Last Name",
            loginPasswordLabel: "Password",
            loginEmailLabel: "E-mail",
            signUpBirthDateLabel: "Birth Date",
            signUpCountryLabel: "Country",
            membershipLevelLabel: "Membership Level",
            pointsAvailableLabel: "Points available",
            updateUserLabel: "Update user",
            bankAccountsLabel: "Bank Accounts",
            registeredBanksLabel: "Registered Banks",
            verifiedLabel: "Verified",
            unverifiedLabel: "Unverified",
            bankLabel: "Bank",
            accountNumberLabel: "Account Number",
            statusLabel: "Status",
            detailsLabel: "Details",
            resetValuesLabel: "Reset values",
            englishLabel: "English",
            spanishLabel: "Spanish",
            selectPreferredLanguageLabel: "Select preferred language",
            userUpdatedLabel: "User data successfully updated!",
            dataUpdatedLabel: "Data has been updated.",
            anErrorOcurredLabel: "An error ocurred!",
            dataNotUpdatedLabel: "Data couldn't be updated. Please check you internet connection and try again.",
            uploadingImageLabel: "Uploading image.",
            bePatientLabel: "This could take some time. Please be patient.",
            imageNotUploadedLabel: "Image couldn't be uploaded. Please check you internet connection and try again.",
            imageUpdatedLabel: "User image successfully updated!",
            updatedImageLabel: "Image has been updated."
        }
    }

}