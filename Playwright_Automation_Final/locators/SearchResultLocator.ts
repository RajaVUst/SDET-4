import { Page, Locator } from "@playwright/test";

export class SearchResultLocator {

    readonly page: Page;

    readonly searchInput: Locator;
    readonly productCards: Locator;
    readonly productLinks: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly above250Filter: Locator;

    constructor(page: Page) {

        this.page = page;

        this.searchInput = page.getByTestId("search-input");

        this.productCards = page.getByTestId("product-grid");

        this.productLinks = page.locator("[data-testid^='product-link-']");

        this.productNames = page.locator("[data-testid^='product-name-']");

        this.productPrices = page.locator("[data-testid^='product-price-']");

        this.above250Filter = page.getByTestId("price-filter-4");
    }
}