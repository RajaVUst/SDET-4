import { expect, Page } from "@playwright/test";
import { CartLocator } from "../locators/CartLocator";
import { logger } from "../logger/Logger";

export class CartPage {

    private readonly locator: CartLocator;

    constructor(private page: Page) {

        this.locator = new CartLocator(page);

    }

    async verifyCart() {

        logger.info("Verifying Cart");

        await expect(this.locator.cartItem).toBeVisible();

        await expect(this.locator.total).toBeVisible();

    }

    async proceedToCheckout() {

        logger.info("Proceed to Checkout");

        await this.locator.checkoutBtn.click();

    }

}