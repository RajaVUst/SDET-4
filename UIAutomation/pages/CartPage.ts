import { Page, expect } from '@playwright/test';

export class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.getByTestId('cart-link').click();
  }
  cartItem(productId: string) {
    return this.page.getByTestId(`cart-item-prod-${productId}`);
  }

 
  async checkProductInCart(productId: string) {
    await expect(this.cartItem(productId)).toBeVisible();
  }

  async checkProductsInCart(productIds: string[]) {
    for (const id of productIds) {
      await this.checkProductInCart(id);
    }
  }

  async checkProductName(productId: string, expectedName: string) {
    await expect(this.page.getByTestId(`cart-item-name-prod-${productId}`)).toHaveText(expectedName);
  }

  async checkProductHasImage(productId: string) {
    await expect(this.cartItem(productId).locator('img').first()).toBeVisible();
  }

  async getProductPrice(productId: string): Promise<number> {
    const priceText = await this.page.getByTestId(`cart-item-price-prod-${productId}`).innerText();
    return parseFloat(priceText.replace(/[^0-9.]/g, ''));
  }

  async getProductQuantity(productId: string): Promise<string> {
    const decreaseButton = this.page.getByTestId(`cart-qty-decrease-prod-${productId}`);
    const qtyText = await decreaseButton.locator('xpath=following-sibling::*[1]').innerText();
    return qtyText.trim();
  }

 
  async checkProductQuantity(productId: string, expectedQty: string) {
    const actualQty = await this.getProductQuantity(productId);
    expect(actualQty).toBe(expectedQty);
  }

  
  async checkCartItemCount(expectedCount: number) {
    await expect(
      this.page.getByTestId('cart-heading').getByText(`(${expectedCount} items)`)
    ).toBeVisible();
  }

  
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