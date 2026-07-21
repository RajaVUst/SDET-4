import { Page, expect } from '@playwright/test';

// This class represents the cart page.
export class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Clicks the cart icon in the top nav to open the cart
  async openCart() {
    await this.page.getByTestId('cart-link').click();
  }

  // Returns the row for one product in the cart
  cartItem(productId: string) {
    return this.page.getByTestId(`cart-item-prod-${productId}`);
  }

  // Checks that one product is visible in the cart
  async checkProductInCart(productId: string) {
    await expect(this.cartItem(productId)).toBeVisible();
  }

  // Checks that a list of products are all visible in the cart
  async checkProductsInCart(productIds: string[]) {
    for (const id of productIds) {
      await this.checkProductInCart(id);
    }
  }

  // Checks that a product's name matches what we expect
  async checkProductName(productId: string, expectedName: string) {
    await expect(this.page.getByTestId(`cart-item-name-prod-${productId}`)).toHaveText(expectedName);
  }

  // Checks that a product has an image showing
  async checkProductHasImage(productId: string) {
    await expect(this.cartItem(productId).locator('img').first()).toBeVisible();
  }

  // Reads the price of one product, e.g. "$34.99" -> 34.99
  async getProductPrice(productId: string): Promise<number> {
    const priceText = await this.page.getByTestId(`cart-item-price-prod-${productId}`).innerText();
    return parseFloat(priceText.replace(/[^0-9.]/g, ''));
  }

  // Checks a product's price matches the exact expected value
  async checkProductPrice(productId: string, expectedPrice: number) {
    const actualPrice = await this.getProductPrice(productId);
    expect(actualPrice).toBe(expectedPrice);
  }

  // Reads the quantity shown between the - and + buttons for a product
  async getProductQuantity(productId: string): Promise<string> {
    const decreaseButton = this.page.getByTestId(`cart-qty-decrease-prod-${productId}`);
    const qtyText = await decreaseButton.locator('xpath=following-sibling::*[1]').innerText();
    return qtyText.trim();
  }

  // Checks the quantity of a product matches what we expect
  async checkProductQuantity(productId: string, expectedQty: string) {
    const actualQty = await this.getProductQuantity(productId);
    expect(actualQty).toBe(expectedQty);
  }

  // Checks the cart heading shows the right item count, e.g. "(3 items)"
  async checkCartItemCount(expectedCount: number) {
    await expect(
      this.page.getByTestId('cart-heading').getByText(`(${expectedCount} items)`)
    ).toBeVisible();
  }

  // Checks the subtotal shown adds up to the sum of all product prices
  async checkSubtotalMatchesSum(productIds: string[]) {
    let expectedSubtotal = 0;

    for (const id of productIds) {
      expectedSubtotal += await this.getProductPrice(id);
    }

    const subtotalText = await this.page.getByTestId('cart-subtotal').innerText();
    const actualSubtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));

    expect(actualSubtotal).toBeCloseTo(expectedSubtotal, 2);
  }

  async goToCheckout() {
    await this.page.getByTestId('checkout-button').click();
  }
}