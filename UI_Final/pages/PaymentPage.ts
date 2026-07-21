import { Page, expect } from "@playwright/test";
import { PaymentPageLocators } from "../locators/PaymentPageLocators";

export class PaymentPage {
    readonly locators: PaymentPageLocators;
    constructor(private page: Page) {
        this.locators = new PaymentPageLocators(page);
    }
    async makePayment(payment: any) {
        await this.locators.cardNameInput().fill(payment.cardName);
        await this.locators.cardNumberInput().fill(payment.cardNumber);
        await this.locators.expiryInput().fill(payment.expiry);
        await this.locators.cvvInput().fill(payment.cvv);
        await this.locators.placeOrderButton().click();
    }
    async verifyOrderPlaced() {
        await expect(this.locators.confirmationHeading()).toBeVisible();
        await expect(this.locators.orderShippingAddress()).toBeVisible();
    }
}

