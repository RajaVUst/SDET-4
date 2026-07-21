import { Page } from "@playwright/test";

export class CartPageLocators {

    constructor(private page: Page) {}
    checkoutButton = () =>
        this.page.getByRole("button", { name: "Proceed to Checkout" });
    increaseQuantity = () =>
        this.page.getByTestId(/cart-qty-increase-prod-/);
}