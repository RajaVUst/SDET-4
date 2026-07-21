import { Page } from "@playwright/test";

export class CheckoutPageLocators {
    constructor(private page: Page) {}
    Name() {
        return this.page.getByTestId("guest-name-input");
    }
    Email() {
        return this.page.getByTestId("guest-email-input");
    }
    Phone() {
        return this.page.getByTestId("guest-phone-input");
    }
    shippingStreet() {
        return this.page.getByTestId("shipping-street-input");
    }
    shippingCity() {
        return this.page.getByTestId("shipping-city-input");
    }
    shippingState() {
        return this.page.getByTestId("shipping-state-select");
    }
    shippingZip() {
        return this.page.getByTestId("shipping-zip-input");
    }
    continueToPaymentButton() {
        return this.page.getByTestId("continue-to-payment-button");
    }
}
