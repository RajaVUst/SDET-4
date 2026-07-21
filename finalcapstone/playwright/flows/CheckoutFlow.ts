import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { testData } from '../utils/testData';

export class CheckoutFlow{
    home;
    cart;
    checkout;
    payment;    
    constructor(page:Page){
        this.home=new HomePage(page);
    this.cart=new CartPage(page);
    this.checkout=new CheckoutPage(page);
    this.payment=new PaymentPage(page);
}

    async paymentFailureFlow(){ 
    await this.home.open();
    await this.home.searchProduct(testData.product);
    await this.home.applyPriceFilter();
    await this.home.addProductToCart(); 
    await this.home.openCart(); 
    await this.cart.proceedCheckout();
    await this.checkout.fillDetails({
    ...testData.guest,  
    ...testData.address

});
    await this.payment.makePayment(testData.payment);
}
}