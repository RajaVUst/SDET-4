import { Page } from "@playwright/test";
import { ProductPageLocators } from "../locators/ProductPageLocators";

export class ProductPage {
    readonly locators: ProductPageLocators;
    constructor(private page: Page) {
        this.locators = new ProductPageLocators(page);
    }
    async addToCart() {
        await this.locators.addToCartButton().click();
    }
    async openCart() {
        await this.locators.cartLink().click();
    }
}
