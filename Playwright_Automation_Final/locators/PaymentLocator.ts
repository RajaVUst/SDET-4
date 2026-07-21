import { Locator, Page } from "@playwright/test";

export class PaymentLocator {

    readonly cardHolder: Locator;

    readonly cardNumber: Locator;

    readonly expiry: Locator;

    readonly cvv: Locator;

    readonly placeOrder: Locator;

    constructor(page: Page) {

        this. cardHolder = page.getByTestId("payment-card-name");
        this.cardNumber = page.getByTestId("payment-card-number");

        this.expiry = page.getByTestId("payment-expiry");

        this.cvv = page.getByTestId("payment-cvv");

        this.placeOrder = page.getByRole("button", {
            name: /Place Order/i
        });

    }

}