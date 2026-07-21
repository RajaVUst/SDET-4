import { Page, expect} from "@playwright/test";
import { CartPageLocators } from "../locators/CartPageLocators";

export class CartPage{
    readonly locators: CartPageLocators;

    constructor(private page: Page) {
        this.locators = new CartPageLocators(page);
    }
    async checkout(){
        await this.locators.checkoutButton().click();
    }
    async freeshippingcharge(){
        await this.locators.increaseQuantity().click();
        await expect(this.page.getByText('You qualify for free')).toBeVisible();
        await expect(this.page.getByText('ShippingFREE')).toBeVisible();
    }

}
