import { Page, expect } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocator";
import { logger } from "../logger/Logger";

export class LoginPage {

    private readonly locator: LoginLocator;

    constructor(private page: Page) {
        this.page = page;
        this.locator = new LoginLocator(page);

    }

    async verifyLoginPage() {
        logger.info("Check wheather login page opened or not")

        await expect(this.locator.loginHead).toBeVisible();

    }

    async login() {

        logger.info("Logging in using Alice's creds");

        await this.locator.demoUser.click();

        await this.locator.email.isVisible();
        await this.locator.password.isVisible();

        await this.locator.signIn.click();

        logger.info("Logging into as Alice is successful");

    }

}