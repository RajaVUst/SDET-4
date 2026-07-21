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

        await this.locator.cardNumber.fill("4024007153361885");

        await this.locator.expiry.fill("12/30");

        await this.locator.cvv.fill("123");

    }

    async placeOrder() {

        logger.info("Place Order");

        await this.locator.placeOrder.click();

    }

}