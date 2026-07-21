export interface PaymentData {

    cardHolderName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    scenario: "success" | "failure";

}

export const PaymentProcessingErrorData: PaymentData = {

    cardHolderName: "Monisha",
    cardNumber: "4111 1111 1111 1111",
    expiry: "12/30",
    cvv: "123",
    scenario: "success"

};

export const CardDeclinedData: PaymentData = {

    cardHolderName: "Monisha",
    cardNumber: "4111 1111 1111 1111",
    expiry: "12/30",
    cvv: "123",
    scenario: "failure"

};