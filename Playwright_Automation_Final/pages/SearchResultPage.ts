import { Page, expect } from "@playwright/test";
import { SearchResultLocator } from "../locators/SearchResultLocator";
import { logger } from "../logger/Logger";

export class SearchResultPage {

    private readonly locator: SearchResultLocator;

    constructor(private page: Page) {

        this.locator = new SearchResultLocator(page);

    }

    async verifySearchResult() {

        logger.info("Verifying Search Result Page");

        await expect(this.locator.productLink).toBeVisible();

    }

    async selectAbove250Filter() {

    await this.locator.above250.click();
    }


    async verifySearchKeyword(product: string) {

    await expect(this.locator.searchInput).toHaveValue(product);

    }


    async getProductCount(){

    return await this.locator.productCards.count();
    }


    async openProduct() {

        logger.info("Opening Product");

        await this.locator.productLink.click();

    }


    async verifyLaptopProducts() {

    const count = await this.locator.productNames.count();
    let laptopFound = false;

    for (let i = 0; i < count; i++) {

        const name = (await this.locator.productNames.nth(i).textContent())?.toLowerCase() || "";

        if (name.includes("laptop")) {
            laptopFound = true;
            break;
        }
    }

    expect(laptopFound).toBeTruthy();
    }

    async verifyProductPriceGreaterThan250() {

    const count = await this.locator.productPrices.count();

    for (let i = 0; i < count; i++) {

        const priceText = await this.locator.productPrices.nth(i).textContent();

        const price = Number(priceText?.replace("$", "").trim());

        expect(price).toBeGreaterThanOrEqual(250);

    }

}
}