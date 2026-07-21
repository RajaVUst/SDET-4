import { expect, Page } from "@playwright/test";
import { ProductLocator } from "../locators/ProductLocator";
import { logger } from "../logger/Logger";

export class ProductPage {

    private readonly locator: ProductLocator;

    constructor(private page: Page) {
        this.page = page;
        this.locator = new ProductLocator(page);

    }

    async verifyProductPage() {
        logger.info("Verifying Products page")
        await expect(this.locator.productTitle).toBeVisible();

        await expect(this.locator.productPrice).toBeVisible();

        await expect(this.locator.image).toBeVisible();

    }



    async addProductToCart() {

        logger.info("Add Product to Cart");

        await this.locator.addToCart.click();

    }

    async goToCartPage(){
        logger.info("Go to cart Page");

        await this.locator.cartIcon.click();
    }

}