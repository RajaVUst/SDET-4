import { Locator, Page } from "@playwright/test";

export class CartLocator {

    readonly cartIcon: Locator;

    readonly cartItem: Locator;

    readonly checkoutBtn: Locator;

    readonly total: Locator;

    readonly remove: Locator;

    constructor(page: Page) {

        this.cartIcon = page.getByRole('link', { name: /Cart/i });

        this.cartItem = page.getByTestId("cart-item-prod-001");

        this.checkoutBtn = page.getByRole('button', { name: /Proceed to Checkout/i });

        this.total = page.getByTestId("cart-total");

        this.remove = page.getByRole('button', { name: /Remove/i });

    }

}