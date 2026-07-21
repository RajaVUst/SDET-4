import { Page, Locator } from '@playwright/test';

export class LoginPage {
  page: Page;
  loginLink: Locator;
  loginSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.getByTestId('nav-login-link');
    this.loginSubmitButton = page.getByTestId('login-submit-button');
  }

  async loginAsDemoUser(userId: string) {
    await this.loginLink.click();
    await this.page.getByTestId(`demo-login-user-${userId}`).click();
    await this.loginSubmitButton.click();
  }
}