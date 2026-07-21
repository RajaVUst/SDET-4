import { Page } from "@playwright/test";

export class ProductPageLocators {
    constructor(private page: Page) {}
    addToCartButton() {
        return this.page.getByTestId("add-to-cart-detail");
    }
    cartLink() {
        return this.page.getByTestId("cart-link");
    }
}
