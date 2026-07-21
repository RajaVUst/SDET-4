import { Page } from "@playwright/test";

import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { PaymentPage } from "../pages/PaymentPage";

import { GuestCheckout } from "../data/CheckoutData";
import { PaymentProcessingErrorData } from "../data/PaymentData";
import { ProductData } from "../data/ProductData";

import { Logger } from "../logger/Logger";

export class PaymentProcessingErrorFlow {

    private inventoryPage: InventoryPage;
    private cartPage: CartPage;
    private checkoutPage: CheckoutOverviewPage;
    private paymentPage: PaymentPage;

    constructor(private page: Page) {

        this.inventoryPage = new InventoryPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutOverviewPage(page);
        this.paymentPage = new PaymentPage(page);

    }

    async execute() {

        await this.inventoryPage.openApplication();

        await this.inventoryPage.verifyHomeLoaded();

        await this.inventoryPage.addProduct(
            ProductData.paymentScenario.productId
        );

        await this.inventoryPage.openCart();

        await this.cartPage.verifyCartBadge(
            ProductData.paymentScenario.cartBadge
        );

        await this.cartPage.clickCheckout();

        await this.checkoutPage.verifyCheckoutPageLoaded();

        await this.checkoutPage.enterGuestInformation(
            GuestCheckout
        );

        await this.checkoutPage.verifyCheckoutTotal(
            ProductData.paymentScenario.checkoutTotal
        );

        await this.checkoutPage.continueToPayment();

        await this.paymentPage.verifyPaymentPageLoaded();

        await this.paymentPage.enterPaymentDetails(
            PaymentProcessingErrorData
        );

        await this.paymentPage.verifyPaymentTotal(
            ProductData.paymentScenario.paymentTotal
        );

        await this.paymentPage.clickPlaceOrder();

        Logger.success("Payment Processing Error Flow Completed");

    }

}