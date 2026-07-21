import { Page } from '@playwright/test';

export class CheckoutPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async continueToPayment() {
    await this.page.getByTestId('continue-to-payment-button').click();
  }
}