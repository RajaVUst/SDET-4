import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ProductPage } from "../pages/ProductPage";
import { HomePage } from "../pages/HomePage";
import { logger } from "../logger/Logger";

export class ShopKartFlow{
    constructor(
        private home:HomePage,
        private product:ProductPage,
        private cart:CartPage,
        private checkout:CheckoutPage,
        private payment:PaymentPage
    ){}
    async completeGuestCheckout(data:any){
        logger.info(`Starting guest checkout for product=${data?.product}`);
        await this.home.searchProduct(data.product);
        await this.home.selectProduct();
        logger.info(`Product selected, adding to cart | product=${data?.product}`);
        await this.product.addToCart();
        await this.product.openCart();
        await this.cart.checkout();
        await this.checkout.enterShipping({
            ...data.customer,
            ...data.address
        });
        await this.payment.makePayment(data.payment);
        await this.payment.verifyOrderPlaced();
        logger.info(`Guest checkout completed for product=${data?.product}`);
    }
    async searchForProductAndaddtoCart(data:any){
        logger.info(`Searching and adding product to cart: ${data?.product}`);
        await this.home.searchProduct(data.product);
        await this.home.selectProduct();
        await this.product.addToCart();
        await this.product.openCart();
        await this.cart.freeshippingcharge();
        logger.info(`Added product to cart: ${data?.product}`);
    }

}
