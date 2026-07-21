import { Page } from "@playwright/test";

export class HomePageLocators {
    constructor(private page: Page) {}
    searchBox() {
        return this.page.getByRole("textbox", {
            name: "Search products, brands, categories..."
        });
    }
    searchButton() {
        return this.page.getByRole('button', {name: "Search"});
    }
    productName(productId: string) {
        return this.page.getByTestId(`product-name-${productId}`);
    }
}
