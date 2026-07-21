import { Page } from '@playwright/test';
import {logger} from '../utils/logger';

export class CheckoutPage{
    
    constructor(private page:Page){}
    
    async fillDetails(data:any){

        logger.info('Entering guest details');


        await this.page.getByTestId('guest-name-input').fill(data.name);
        await this.page.getByTestId('guest-email-input').fill(data.email);
        await this.page.getByTestId('guest-phone-input').fill(data.phone);
        await this.page.getByTestId('shipping-street-input').fill(data.street);
        await this.page.getByTestId('shipping-city-input').fill(data.city);
        await this.page.getByTestId('shipping-state-select').selectOption(data.state);  
        await this.page.getByTestId('shipping-zip-input').fill(data.zip);

        logger.info('Guest details entered');

        await this.page.getByTestId('continue-to-payment-button').click();

        logger.info('Navigated to payment page');

}

}