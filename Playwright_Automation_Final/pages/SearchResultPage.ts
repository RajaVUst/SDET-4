import { expect, Page } from "@playwright/test";
import { SearchResultLocator } from "../locators/SearchResultLocator";

export class SearchResultPage {

    readonly page: Page;
    readonly locator: SearchResultLocator;

    constructor(page: Page) {
        this.page = page;
        this.locator = new SearchResultLocator(page);
    }

    async verifySearchResult() {

        // await expect(this.page).toHaveURL(/search/i);

        await expect(this.locator.productCards.first()).toBeVisible();
    }

    async selectAbove250Filter() {

        await this.locator.above250Filter.click();

        await expect(this.locator.above250Filter).toBeVisible();
    }

    async verifySearchKeyword(product: string) {

        const value = await this.locator.searchInput.inputValue();

        expect(value.toLowerCase()).toContain(product.toLowerCase());
    }

    async getProductCount() {

        return await this.locator.productCards.count();
    }

    async verifyLaptopProducts() {

        const total = await this.locator.productNames.count();

        let laptopFound = false;

        for (let i = 0; i < total; i++) {

            const product = (
            await this.locator.productNames.nth(i).textContent()
            )?.toLowerCase() ?? "";

            if (product.includes("laptop")) {
            laptopFound = true;
            break;
            }
    }

    expect(laptopFound).toBeTruthy();
    }

    async verifyProductPriceGreaterThan250() {

        const total = await this.locator.productPrices.count();

        expect(total).toBeGreaterThan(0);

        for (let i = 0; i < total; i++) {

            const priceText = await this.locator.productPrices.nth(i).textContent();

            const price = Number(
                priceText!
                    .replace("$", "")
                    .replace(",", "")
                    .trim()
            );

            expect(price).toBeGreaterThanOrEqual(250);
        }
    }

    async openFirstProduct() {

        await this.locator.productLinks.first().click();
    }
}