import { Page } from "@playwright/test";

export class PaymentPageLocators {
    constructor(private page: Page) {}
    cardNameInput() {
        return this.page.getByTestId("payment-card-name");
    }
    cardNumberInput() {
        return this.page.getByTestId("payment-card-number");
    }
    expiryInput() {
        return this.page.getByTestId("payment-expiry");
    }
    cvvInput() {
        return this.page.getByTestId("payment-cvv");
    }
    placeOrderButton() {
        return this.page.getByTestId("place-order-button");
    }
    confirmationHeading() {
        return this.page.getByTestId("confirmation-heading");
    }
    orderShippingAddress() {
        return this.page.getByTestId("order-shipping-address");
    }
}
