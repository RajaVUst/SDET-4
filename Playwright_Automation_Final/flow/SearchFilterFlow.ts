import { expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";

export class SearchFilterFlow {

    constructor(
        private readonly homePage: HomePage,
        private readonly searchResultPage: SearchResultPage
    ) {}

    async verifyLaptopSearchAbove250() {

        // Navigate to Home Page
        await this.homePage.navigate();
        await this.homePage.verifyHomePage();

        // Search Product
        await this.homePage.searchProduct("Laptop");

        // Verify Search Results Page
        await this.searchResultPage.verifySearchResult();

        // Capture product count before applying filter
        const countBefore = await this.searchResultPage.getProductCount();

        // Apply Price Filter
        await this.searchResultPage.selectAbove250Filter();

        // Validations
        await this.searchResultPage.verifySearchKeyword("Laptop");
        await this.searchResultPage.verifyLaptopProducts();
        await this.searchResultPage.verifyProductPriceGreaterThan250();

        // Verify filtered product count
        const countAfter = await this.searchResultPage.getProductCount();

        expect(countAfter).toBeLessThanOrEqual(countBefore);
    }
}