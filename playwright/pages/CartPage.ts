import { Page } from '@playwright/test';
import {logger} from '../utils/logger';

export class CartPage{
    constructor(private page:Page){}

    checkout=this.page.getByTestId('checkout-button');

    async proceedCheckout(){
        logger.info('Proceeding to checkout');
        await this.checkout.click();
        logger.info('Checkout page opened');
    }

}