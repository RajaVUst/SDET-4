import { Page, expect } from '@playwright/test';

export class PaymentPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCardDetails(name: string, number: string, expiry: string, cvv: string) {
    await this.page.getByTestId('payment-card-name').fill(name);
    await this.page.getByTestId('payment-card-number').fill(number);
    await this.page.getByTestId('payment-expiry').fill(expiry);
    await this.page.getByTestId('payment-cvv').fill(cvv);
  }

  async selectSuccessScenario() {
    await this.page.getByTestId('payment-scenario-success').check();
  }

  async selectFailureScenario() {
    await this.page.getByTestId('payment-scenario-failure').check();
  }

  async placeOrder() {
    await this.page.getByTestId('place-order-button').click();
  }

  async checkErrorIsShown() {
    await expect(
      this.page.getByText('Payment processing error. Please check your card details and try again.')
    ).toBeVisible();
  }

  
  async checkStillOnPaymentPage() {
    await expect(this.page.getByRole('heading', { name: 'Payment', exact: true })).toBeVisible();
  }

  async checkFieldsRetainValues(name: string, number: string, expiry: string, cvv: string) {
    await expect(this.page.getByTestId('payment-card-name')).toHaveValue(name);
    await expect(this.page.getByTestId('payment-card-number')).toHaveValue(number);
    await expect(this.page.getByTestId('payment-expiry')).toHaveValue(expiry);
    await expect(this.page.getByTestId('payment-cvv')).toHaveValue(cvv);
  }
}