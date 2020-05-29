export default {

    translate(terms: any, viewTexts: any){
        if(terms.length > 0){
            terms.forEach((term: any) => {
                switch(term.name){
                    case 'pointsAcquisitionLabel': viewTexts.pointsAcquisitionLabel = term.text; break;
                    case 'addPointsLabel': viewTexts.addPointsLabel = term.text; break;
                    case 'pointsLabel': viewTexts.pointsLabel = term.text; break;
                    case 'bankAccountLabel': viewTexts.bankAccountLabel = term.text; break;
                    case 'cancelLabel': viewTexts.cancelLabel = term.text; break;
                    case 'payLabel': viewTexts.payLabel = term.text; break;
                    case 'transactionInformationLabel': viewTexts.transactionInformationLabel = term.text; break;
                    case 'transactionTypeLabel': viewTexts.transactionTypeLabel = term.text; break;
                    case 'paymentLabel': viewTexts.paymentLabel = term.text; break;
                    case 'descriptionLabel': viewTexts.descriptionLabel = term.text; break;
                    case 'acquisitionPoinsLabel': viewTexts.acquisitionPoinsLabel = term.text; break;
                    case 'pointsToAcquireLabel': viewTexts.pointsToAcquireLabel = term.text; break;
                    case 'bankAccountInformation': viewTexts.bankAccountInformation = term.text; break;
                    case 'bankLabel': viewTexts.bankLabel = term.text; break;
                    case 'accountHolderName': viewTexts.accountHolderName = term.text; break;
                    case 'accountNumberLabel': viewTexts.accountNumberLabel = term.text; break;
                    case 'amountLabel': viewTexts.amountLabel = term.text; break;
                    case 'serviceCommissionLabel': viewTexts.serviceCommissionLabel = term.text; break;
                    case 'totalCostLabel': viewTexts.totalCostLabel = term.text; break;
                    case 'howItWorksLabel': viewTexts.howItWorksLabel = term.text; break;
                    case 'whatAppliesWhenBuyingPointsLabel': viewTexts.whatAppliesWhenBuyingPointsLabel = term.text; break;
                    case 'serviceCommissionAggLabel': viewTexts.serviceCommissionAggLabel = term.text; break;
                    case 'pointsWontAppearInstantlyLabel': viewTexts.pointsWontAppearInstantlyLabel = term.text; break;
                    case 'pointsPurchaseDelayLabel': viewTexts.pointsPurchaseDelayLabel = term.text; break;
                    case 'purchaseEmailLabel': viewTexts.purchaseEmailLabel = term.text; break;
                    case 'proccessedPurchaseEmailLabel': viewTexts.proccessedPurchaseEmailLabel = term.text; break;
                    case 'contactUsForIssuesLabel': viewTexts.contactUsForIssuesLabel = term.text; break;
                    case 'proccessingPaymentLabel': viewTexts.proccessingPaymentLabel = term.text; break;
                    case 'bePatientLabel': viewTexts.bePatientLabel = term.text; break;
                    case 'paymentSuccessfullyProcessed': viewTexts.paymentSuccessfullyProcessed = term.text; break;
                    case 'paymentNotifiedLabel': viewTexts.paymentNotifiedLabel = term.text; break;
                    case 'paymentRejectedLabel': viewTexts.paymentRejectedLabel = term.text; break;
                    case 'usingBankAccountNotVerifiedLabel': viewTexts.usingBankAccountNotVerifiedLabel = term.text; break;
                    case 'paymentRejectedDescriptionLabel': viewTexts.paymentRejectedDescriptionLabel = term.text; break;
                    case 'downloadInvoiceLabel': viewTexts.downloadInvoiceLabel = term.text; break;
                    default: break;
                }
            });
            return viewTexts;
        }
    },

    assignDefaultLabels(){
        return {
            pointsAcquisitionLabel: "Points Acquisition",
            addPointsLabel: "Add points",
            pointsLabel: "Points",
            bankAccountLabel: "Bank Account",
            cancelLabel: "Cancel",
            payLabel: "Pay",
            transactionInformationLabel: "Transaction information",
            transactionTypeLabel: "Transaction type",
            paymentLabel: "Payment",
            descriptionLabel: "Description",
            acquisitionPoinsLabel: "Points acquisition",
            pointsToAcquireLabel: "Points to acquire",
            bankAccountInformation: "Bank account information",
            bankLabel: "Bank",
            accountHolderName: "Holder name",
            accountNumberLabel: "Account number",
            amountLabel: "Amount",
            serviceCommissionLabel: "Service commission",
            totalCostLabel: "Total",
            howItWorksLabel: "How it works?",
            whatAppliesWhenBuyingPointsLabel: "The following applies when buying points",
            serviceCommissionAggLabel: "When buying points, a service commission is aggregated to the total amount",
            pointsWontAppearInstantlyLabel: "Points won't appear instantly in your account",
            pointsPurchaseDelayLabel: "Points take from 1 to 2 days to appear in your account",
            purchaseEmailLabel: "You'll receive an email with the payments specifications",
            proccessedPurchaseEmailLabel: "You'll receive an email when the transaction has been successfully processed",
            contactUsForIssuesLabel: "For any issues, please contact us by sending an email to",
            proccessingPaymentLabel: "Processing payment",
            bePatientLabel: "This could take some time. Please, be patient",
            paymentSuccessfullyProcessed: "Payment successfully processed!",
            paymentNotifiedLabel: "You'll be notified when payment has been approved",
            paymentRejectedLabel: "Error! Payment rejected.",
            usingBankAccountNotVerifiedLabel: "You are trying to use a bank account that has not been verified.",
            paymentRejectedDescriptionLabel: "An error ocurred. Your payment has been rejected.",
            downloadInvoiceLabel: "Download Invoice"
        }
    }

}