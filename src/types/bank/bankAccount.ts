export default interface BankAccount {
    bankAccountID: number,
    bank: string,
    holderName: string,
    accountNumber: string,
    routingNumber: string,
    checkNumber: string,
    isPrimary: boolean,
    accountType: string,
    status: string,
    stripeConnectID: string,
    stripeID: string
}