import { Page } from "@playwright/test";
import { HomePageLocators } from "../locators/HomePageLocators";

export class HomePage {
    readonly locators: HomePageLocators;
    constructor(private page: Page) {
        this.locators = new HomePageLocators(page);
    }
    async searchProduct(product: string) {
        await this.page.goto("/");
        await this.locators.searchBox().fill(product);
        await this.locators.searchButton().click();
    }
    async selectProduct() {
        await this.locators.productName("prod-024").click();
    }
}
