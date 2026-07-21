export interface PaymentData {

    cardHolderName: string;

    cardNumber: string;

    expiry: string;

    cvv: string;

    scenario: "success" | "failure";

}

export const PaymentProcessingErrorData: PaymentData = {

    cardHolderName: "John Smith",

    cardNumber: "4111 1111 1111 1111",

    expiry: "12/30",

    cvv: "123",

    scenario: "success"

};

export const CardDeclinedData: PaymentData = {

    cardHolderName: "John Smith",

    cardNumber: "4000 0000 0000 0002",

    expiry: "12/30",

    cvv: "123",

    scenario: "failure"

};