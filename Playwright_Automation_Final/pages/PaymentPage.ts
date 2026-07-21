import { expect, Page } from "@playwright/test";
import { PaymentLocator } from "../locators/PaymentLocator";
import { Environment } from "../config/env";
import { logger } from "../logger/Logger";

export class PaymentPage {

    private readonly locator: PaymentLocator;

    constructor(private page: Page) {

        this.locator = new PaymentLocator(page);

    }


    async enterCardDetails() {

        logger.info("Entering Card Details");

        await this.locator.cardHolder.fill("Alice Johnson");

        await this.locator.cardNumber.fill(Environment.CARD_NUMBER);

        await this.locator.expiry.fill(Environment.CARD_EXPIRY);

        await this.locator.cvv.fill(Environment.CARD_CVV);

    }

    async placeOrder() {

        logger.info("Place Order");

        await this.locator.placeOrder.click();

    }

}