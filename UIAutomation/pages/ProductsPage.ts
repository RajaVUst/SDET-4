import { Page } from '@playwright/test';

export class ProductsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchProduct(query: string) {
    await this.page.getByTestId('search-input').fill(query);
    await this.page.getByTestId('search-input').press('Enter');
  }
  async addToCart(productId: string) {
    await this.page.getByTestId(`add-to-cart-prod-${productId}`).click();
  }

  async searchAndAddToCart(query: string, productId: string) {
    await this.searchProduct(query);
    await this.addToCart(productId);
  }
}