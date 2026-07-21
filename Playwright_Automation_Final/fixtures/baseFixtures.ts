import { test as base } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { SuccessPage } from "../pages/SuccessPage";

type Pages={

    homePage:HomePage;
    loginPage:LoginPage;
    searchResultPage:SearchResultPage;
    productPage:ProductPage;
    cartPage:CartPage;
    checkoutPage:CheckoutPage;
    paymentPage:PaymentPage;
    successPage:SuccessPage;

}

export const test=base.extend<Pages>({

    homePage:async({page},use)=>{

        await use(new HomePage(page));

    },

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    searchResultPage: async ({ page }, use) => {

        await use(new SearchResultPage(page));

    },

    productPage: async ({ page }, use) => {

        await use(new ProductPage(page));

    },

    cartPage: async ({ page }, use) => {

        await use(new CartPage(page));

    },

    checkoutPage: async ({ page }, use) => {

        await use(new CheckoutPage(page));

    },

    paymentPage: async ({ page }, use) => {

        await use(new PaymentPage(page));

    },

    successPage: async ({ page }, use) => {

        await use(new SuccessPage(page));

    }

});