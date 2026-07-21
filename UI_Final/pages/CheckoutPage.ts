import { Page } from "@playwright/test";
import { CheckoutPageLocators } from "../locators/CheckoutPageLocators";

export class CheckoutPage {
    readonly locators: CheckoutPageLocators;
    constructor(private page: Page) {
        this.locators = new CheckoutPageLocators(page);
    }
    async enterShipping(address: any) {
        await this.locators.Name().fill(address.name);
        await this.locators.Email().fill(address.email);
        await this.locators.Phone().fill(address.phone);
        await this.locators.shippingStreet().fill(address.street);
        await this.locators.shippingCity().fill(address.city);
        await this.locators.shippingState().selectOption(address.state);
        await this.locators.shippingZip().fill(address.zip);
        await this.locators.continueToPaymentButton().click();
    }
}

