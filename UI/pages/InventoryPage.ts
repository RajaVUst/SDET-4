import { expect, Page } from "@playwright/test";

import { Environment } from "../config/Environment";
import { InventoryLocators } from "../locators/InventoryLocators";
import { Logger } from "../logger/Logger";

export class InventoryPage {

    constructor(private page: Page) {}

    async openApplication() {

        Logger.info("Opening RetailMart");

        await this.page.goto(Environment.baseUrl);

        await expect(
            this.page.locator(InventoryLocators.homePage)
        ).toBeVisible();

    }

    async verifyHomeLoaded() {

        await expect(
            this.page.locator(InventoryLocators.productGrid)
        ).toBeVisible();

    }

    async clickShopNow() {

        Logger.info("Opening Electronics");

        await this.page
            .locator(InventoryLocators.shopNowButton)
            .first()
            .click();

    }

    async addProduct(productId: string) {

        Logger.info(`Adding ${productId}`);

        await expect(
            this.page.locator(
                InventoryLocators.productCard(productId)
            )
        ).toBeVisible();

        await this.page.locator(
            InventoryLocators.addToCart(productId)
        ).click();

    }

    async addMultipleProducts(...productIds: string[]) {

        for (const product of productIds) {

            await this.addProduct(product);

        }

    }

    async openCart() {

        Logger.info("Opening Cart");

        await this.page.locator(
            InventoryLocators.cartLink
        ).click();

    }

    async searchProduct(product: string) {

        await this.page
            .locator(InventoryLocators.searchInput)
            .fill(product);

        await this.page
            .locator(InventoryLocators.searchButton)
            .click();

    }

    async verifyProductVisible(productId: string) {

        await expect(
            this.page.locator(
                InventoryLocators.productCard(productId)
            )
        ).toBeVisible();

    }

}