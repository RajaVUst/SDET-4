import { Page } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { ProductData } from "../data/ProductData";
import { Logger } from "../logger/Logger";

export class RemoveProductValidationFlow {

    private inventoryPage: InventoryPage;
    private cartPage: CartPage;

    constructor(private page: Page) {

        this.inventoryPage = new InventoryPage(page);
        this.cartPage = new CartPage(page);

    }

    async execute() {
        

        await this.inventoryPage.openApplication();

        await this.inventoryPage.verifyHomeLoaded();

        await this.inventoryPage.addMultipleProducts(
            ...ProductData.removeProductScenario.products
        );

        await this.inventoryPage.openCart();

        await this.cartPage.verifyCartBadge(
            ProductData.removeProductScenario.initialCartBadge
        );

        Logger.info("Removing First Product");

        await this.cartPage.removeProduct(
            ProductData.removeProductScenario.afterFirstRemoval.removedProduct
        );

        await this.cartPage.verifyProductRemoved(
            ProductData.removeProductScenario.afterFirstRemoval.removedProduct
        );

        await this.cartPage.verifyCartBadge(
            ProductData.removeProductScenario.afterFirstRemoval.cartBadge
        );

        await this.cartPage.verifySubtotal(
            ProductData.removeProductScenario.afterFirstRemoval.subtotal
        );

        await this.cartPage.verifyTax(
            ProductData.removeProductScenario.afterFirstRemoval.tax
        );

        await this.cartPage.verifyShipping(
            ProductData.removeProductScenario.afterFirstRemoval.shipping
        );

        await this.cartPage.verifyTotal(
            ProductData.removeProductScenario.afterFirstRemoval.total
        );

        Logger.info("Removing Second Product");

        await this.cartPage.removeProduct(
            ProductData.removeProductScenario.afterSecondRemoval.removedProduct
        );

        await this.cartPage.verifyProductRemoved(
            ProductData.removeProductScenario.afterSecondRemoval.removedProduct
        );

        await this.cartPage.verifyCartBadge(
            ProductData.removeProductScenario.afterSecondRemoval.cartBadge
        );

        await this.cartPage.verifySubtotal(
            ProductData.removeProductScenario.afterSecondRemoval.subtotal
        );

        await this.cartPage.verifyTax(
            ProductData.removeProductScenario.afterSecondRemoval.tax
        );

        await this.cartPage.verifyShipping(
            ProductData.removeProductScenario.afterSecondRemoval.shipping
        );

        await this.cartPage.verifyTotal(
            ProductData.removeProductScenario.afterSecondRemoval.total
        );

        Logger.info("Removing Third Product");

        await this.cartPage.removeProduct(
            ProductData.removeProductScenario.afterThirdRemoval.removedProduct
        );

        await this.cartPage.verifyProductRemoved(
            ProductData.removeProductScenario.afterThirdRemoval.removedProduct
        );

        await this.cartPage.verifyEmptyCart();

        await this.cartPage.verifyContinueShoppingVisible();

        await this.cartPage.verifyCheckoutUnavailable();

        Logger.success("Remove Product Validation Passed");

    }

}