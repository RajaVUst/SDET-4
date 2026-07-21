import { expect, Page } from "@playwright/test";
import { SuccessLocator } from "../locators/SuccessLocator";
import { logger } from "../logger/Logger";

export class SuccessPage {

    private readonly locator: SuccessLocator;

    constructor(private page: Page) {

        this.locator = new SuccessLocator(page);

    }

    async verifyOrderSuccess() {

        logger.info("Verifying Successful Order");

        await expect(this.locator.orderConfirmed).toBeVisible();

        await expect(this.locator.orderId).toBeVisible();

    }

    async getOrderNumber(){

        logger.info("Get the order number");
        const orderNumber = await this.locator.orderId.textContent();

        logger.info(`Order Number : ${orderNumber}`);

        return orderNumber;

    }

    async continueShopping() {
        logger.info("If want to continue shopping do it")
        await this.locator.continueShopping.click();

    }

    async openOrderHistory() {
        logger.info('Open order history page')
        await this.locator.viewOrderHistory.click();

    }

}