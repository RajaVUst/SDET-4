import { Page, expect } from '@playwright/test';

export class PaymentPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Fills in the card details form
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

  // Checks that the payment error message is shown
  async checkErrorIsShown() {
    await expect(
      this.page.getByText('Payment processing error. Please check your card details and try again.')
    ).toBeVisible();
  }

  // Confirms the order was NOT placed - we should still be on the Payment step
  async checkStillOnPaymentPage() {
    await expect(this.page.getByRole('heading', { name: 'Payment', exact: true })).toBeVisible();
  }

  // Confirms the form still holds what the user typed, so they can retry
  // without re-entering everything from scratch
  async checkFieldsRetainValues(name: string, number: string, expiry: string, cvv: string) {
    await expect(this.page.getByTestId('payment-card-name')).toHaveValue(name);
    await expect(this.page.getByTestId('payment-card-number')).toHaveValue(number);
    await expect(this.page.getByTestId('payment-expiry')).toHaveValue(expiry);
    await expect(this.page.getByTestId('payment-cvv')).toHaveValue(cvv);
  }

  // Confirms that trying to place the order again doesn't create a second order -
  // the same single error should show, not a new one stacked on top
  async checkNoDuplicateOrderOnRetry() {
    await this.placeOrder();

    const errorMessage = this.page.getByText(
      'Payment processing error. Please check your card details and try again.'
    );
    const errorCount = await errorMessage.count();

    expect(errorCount).toBe(1);
    await this.checkStillOnPaymentPage();
  }
}