import { expect } from "@playwright/test";
import { logger } from "../logger/Logger";

import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";

export class SearchFilterFlow {

    constructor(

        private homePage: HomePage,

        private searchResultPage: SearchResultPage

    ) {}

    async validateSearchWithPriceFilter() {

        logger.info("Search for Laptop and add price above 250 as filter");

        // Open Home Page
        await this.homePage.navigate();

        await this.homePage.verifyHomePage();

        await this.homePage.searchProduct("Laptop");

        //Go to search result page
        await this.searchResultPage.verifySearchResult();

        const countBefore = await this.searchResultPage.getProductCount();

        logger.info(`Products before filter : ${countBefore}`);

        await this.searchResultPage.selectAbove250Filter();

        await this.searchResultPage.verifySearchKeyword('Laptop');

        await this.searchResultPage.verifyLaptopProducts();

        await this.searchResultPage.verifyProductPriceGreaterThan250();

        const count = await this.searchResultPage.getProductCount();

        logger.info(`Products after filter : ${count}`);

        expect(count).not.toBe(countBefore);

        logger.info("SEARCH FILTER FLOW COMPLETED");

    }

}