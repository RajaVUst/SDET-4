import { expect, Page } from "@playwright/test";

import { Logger } from "../logger/Logger";
import { PaymentLocators } from "../locators/PaymentLocators";
import { PaymentData } from "../data/PaymentData";

export class PaymentPage {

    constructor(private page: Page) {}

    async verifyPaymentPageLoaded() {

        Logger.info("Verifying Payment Page");

        await expect(
            this.page.locator(
                PaymentLocators.paymentPage
            )
        ).toBeVisible();

    }

    async selectScenario(data: PaymentData) {

        Logger.info(`Selecting ${data.scenario} scenario`);

        if (data.scenario === "success") {

            await this.page.locator(
                PaymentLocators.successScenario
            ).check();

        } else {

            await this.page.locator(
                PaymentLocators.failureScenario
            ).check();

        }

    }

    async enterPaymentDetails(data: PaymentData) {

        Logger.info("Entering Payment Details");

        await this.selectScenario(data);

        await this.page.locator(
            PaymentLocators.cardHolderName
        ).fill(data.cardHolderName);

        await this.page.locator(
            PaymentLocators.cardNumber
        ).fill(data.cardNumber);

        await this.page.locator(
            PaymentLocators.expiry
        ).fill(data.expiry);

        await this.page.locator(
            PaymentLocators.cvv
        ).fill(data.cvv);

    }

    async verifyPaymentTotal(expected: string) {

        await expect(
            this.page.locator(
                PaymentLocators.paymentTotal
            )
        ).toHaveText(expected);

    }

    async clickPlaceOrder() {

        Logger.info("Clicking Place Order");

        await this.page.locator(
            PaymentLocators.placeOrderButton
        ).click();

    }

}