import { Locator, Page } from "@playwright/test";

export class CheckoutLocator {
    readonly checkHead: Locator;

    readonly address: Locator;

    readonly city: Locator;

    readonly zip: Locator;

    readonly country: Locator;

    readonly continueButton: Locator;

    readonly checkoutAs: Locator;

    readonly signinAs: Locator;

    constructor(page: Page) {

        this.checkHead= page.getByRole('heading', { name: 'Checkout', exact: true })

        this.address = page.getByTestId("shipping-street-input");

        this.city = page.getByTestId("shipping-city-input");

        this.zip = page.getByTestId("shipping-zip-input");

        this.country = page.getByTestId("shipping-country-input");
        
        this.continueButton = page.getByRole("button", {
            name: /continue to payment/i
        });

        this.checkoutAs = page.getByText("How would you like to checkout?");

        this.signinAs = page.getByRole("button", {name:/Sign in/i});

    }

}