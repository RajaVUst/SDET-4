import { Locator, Page } from "@playwright/test";

export class SearchResultLocator {

    readonly productLink: Locator
    readonly searchInput: Locator
    readonly above250: Locator
    readonly productCards:Locator
    readonly productNames:Locator
    readonly productPrices: Locator
    constructor(page: Page) {

        this.productLink=page.getByTestId("product-link-prod-001");

         this.searchInput = page.getByTestId("search-input");

        this.above250 =page.getByTestId("price-filter-4");

        this.productCards=page.locator("[data-testid^='product-card-']");

        this.productNames=page.locator("[data-testid^='product-name-']");

        this.productPrices=page.locator("[data-testid^='product-price-']");

    }

}