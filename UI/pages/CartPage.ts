import { expect, Page } from "@playwright/test";

import { CartLocators } from "../locators/CartLocators";
import { Logger } from "../logger/Logger";

export class CartPage {

    constructor(private page: Page) {}

    async verifyCartBadge(count: number) {

        await expect(
            this.page.locator(CartLocators.cartCount)
        ).toHaveText(count.toString());

    }

    async verifyProductExists(productId: string) {

        await expect(
            this.page.locator(
                CartLocators.cartItem(productId)
            )
        ).toBeVisible();

    }

    async removeProduct(productId: string) {

        Logger.info(`Removing ${productId}`);

        await this.page
            .locator(
                CartLocators.decreaseButton(productId)
            )
            .click();

    }

    async verifyProductRemoved(productId: string) {

        await expect(
            this.page.locator(
                CartLocators.cartItem(productId)
            )
        ).toHaveCount(0);

    }

    async verifySubtotal(expected: string) {

        await expect(
            this.page.locator(
                CartLocators.subtotal
            )
        ).toHaveText(expected);

    }

    async verifyTax(expected: string) {

        await expect(
            this.page.locator(
                CartLocators.tax
            )
        ).toHaveText(expected);

    }

    async verifyShipping(expected: string) {

        await expect(
            this.page.locator(
                CartLocators.shipping
            )
        ).toHaveText(expected);

    }

    async verifyTotal(expected: string) {

        await expect(
            this.page.locator(
                CartLocators.total
            )
        ).toHaveText(expected);

    }

    async verifyEmptyCart() {

        Logger.info("Verifying Empty Cart");

        await expect(
            this.page.locator(
                CartLocators.emptyCartMessage
            )
        ).toBeVisible();

    }

    async verifyContinueShoppingVisible() {

        await expect(
            this.page.locator(
                CartLocators.continueShopping
            )
        ).toBeVisible();

    }

    async verifyCheckoutUnavailable() {

        await expect(
            this.page.locator(
                CartLocators.checkoutButton
            )
        ).toHaveCount(0);

    }

    async clickCheckout() {

        Logger.info("Opening Checkout");

        await this.page
            .locator(
                CartLocators.checkoutButton
            )
            .click();

    }

}