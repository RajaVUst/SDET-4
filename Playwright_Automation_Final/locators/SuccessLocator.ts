import { Locator, Page } from "@playwright/test";

export class SuccessLocator {

    readonly orderConfirmed: Locator;

    readonly orderId: Locator;

    readonly continueShopping: Locator;

    readonly viewOrderHistory: Locator;

    constructor(page: Page) {

        this.orderConfirmed = page.getByRole("heading", {name:"Order Confirmed!"});

        this.orderId = page.locator("[data-testid='order-number']");
    

        this.continueShopping = page.getByRole('link', {name: /continue shopping/i});

        this.viewOrderHistory= page.getByRole('link',{name:/view order history/i});

    }

}