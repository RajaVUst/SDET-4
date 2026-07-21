import { logger } from "../logger/Logger";


import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { SuccessPage } from "../pages/SuccessPage";

export class PaymentSuccessFlow {

    constructor(

        private homePage: HomePage,

        private loginPage: LoginPage,

        private searchResultPage: SearchResultPage,

        private productPage: ProductPage,

        private cartPage: CartPage,

        private checkoutPage: CheckoutPage,

        private paymentPage: PaymentPage,

        private successPage: SuccessPage

    ) {}

    async payment() {

        logger.info("Payment Success Flow");

        //Navigate to home and search product
        await this.homePage.navigate();
        await this.homePage.verifyHomePage();
        await this.homePage.searchProduct("ProSound Wireless Headphones");

        //Check the result page
        await this.searchResultPage.verifySearchResult();
        await this.searchResultPage.openProduct();

        //Verify the product and add to cart
        await this.productPage.verifyProductPage();
        await this.productPage.addProductToCart();
        await this.productPage.goToCartPage();

        //Validate the product and proceed to checkout
        await this.cartPage.proceedToCheckout();

        //Verify checkout page and add details
        await this.checkoutPage.verifyCheckoutPage();
        await this.checkoutPage.checkoutAs();

        //Login as a registered user(Here Alice)
        await this.loginPage.verifyLoginPage();
        await this.loginPage.login();


        //Proceed back to checkoutpage and add details
        await this.checkoutPage.verifyCheckoutPage();
        await this.checkoutPage.enterAddress();
        await this.checkoutPage.continueToPayment();

        //Move to patment page and add details
        await this.paymentPage.enterCardDetails();
        await this.paymentPage.placeOrder();

        //Confirm the order
        await this.successPage.verifyOrderSuccess();

        //Get the order number
        const orderId = await this.successPage.getOrderNumber();
        logger.info(`Order Created Successfully : ${orderId}`);


    }

}