import { test as base, expect } from "@playwright/test";
import { ShopKartFlow } from "../flows/ShopKartFlow";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { PaymentPage } from "../pages/PaymentPage";
import { ProductPage } from "../pages/ProductPage";

type MyFixtures = {
    shopKartFlow: ShopKartFlow;
};
export const test = base.extend<MyFixtures>({
    shopKartFlow: async ({ page }, use) => {
        const shopKartFlow = new ShopKartFlow(
            new HomePage(page),
            new ProductPage(page),
            new CartPage(page),
            new CheckoutPage(page),
            new PaymentPage(page)
        );

        await use(shopKartFlow);
    }
});

export { expect };