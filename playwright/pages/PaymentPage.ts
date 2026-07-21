import { expect, Page } from '@playwright/test';
import { logger } from '../utils/logger';

export class PaymentPage{

    constructor(private page:Page){}
    async makePayment(card:any){

        logger.info('Entering payment details');

        await this.page.getByTestId('payment-card-name').fill(card.holder);
        await this.page.getByTestId('payment-card-number').fill(card.number);
        await this.page.getByTestId('payment-expiry').fill(card.expiry);
        await this.page.getByTestId('payment-cvv').fill(card.cvv);

        logger.info('Submitting payment');

        await this.page.getByTestId('place-order-button').click();
}

    async verifyFailure(){  
    await expect(this.page.getByTestId('payment-general-error')).toBeVisible();
    
    logger.error('Payment failed as expected using invalid test card');
}

}