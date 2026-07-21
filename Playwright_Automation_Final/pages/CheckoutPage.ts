import { Page, expect } from "@playwright/test";
import { CheckoutLocator } from "../locators/CheckoutLocator";
import { Environment } from "../config/env";
import { logger } from "../logger/Logger";

export class CheckoutPage {

    private readonly locator: CheckoutLocator;

    constructor(private page: Page) {

        this.locator = new CheckoutLocator(page);

    }

    async verifyCheckoutPage() {
        logger.info("Verify the checkoutpage")

        await expect(this.locator.checkHead).toBeVisible();

    }

    async checkoutAs(){
        logger.info("Ask user how they would like to checkout");
        await expect(this.locator.checkoutAs).toBeVisible();
        await this.locator.signinAs.click();
    }

    async enterAddress() {

        logger.info("Enter Shipping Address");

        await this.locator.address.fill(Environment.ADDRESS);

        logger.info("Enter city");
        await this.locator.city.fill(Environment.CITY);

        logger.info("Enter zip");
        await this.locator.zip.fill(Environment.ZIP);

        logger.info("Enter Country");
        await this.locator.country.fill("India");

    }

    async continueToPayment() {

        logger.info("Navigating to Payment");

        await this.locator.continueButton.click();

    }

}