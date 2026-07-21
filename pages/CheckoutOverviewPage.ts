import { expect, Page } from "@playwright/test";

import { CheckoutData } from "../data/CheckoutData";
import { CheckoutOverviewLocators } from "../locators/CheckoutOverviewLocators";
import { Logger } from "../logger/Logger";

export class CheckoutOverviewPage {

    constructor(private page: Page) {}

    async verifyCheckoutPageLoaded() {

        await expect(
            this.page.locator(
                CheckoutOverviewLocators.checkoutPage
            )
        ).toBeVisible();

    }

    async enterGuestInformation(data: CheckoutData) {

        Logger.info("Entering Guest Information");

        await this.page.locator(
            CheckoutOverviewLocators.guestName
        ).fill(data.name);

        await this.page.locator(
            CheckoutOverviewLocators.guestEmail
        ).fill(data.email);

        await this.page.locator(
            CheckoutOverviewLocators.guestPhone
        ).fill(data.phone);

        await this.page.locator(
            CheckoutOverviewLocators.street
        ).fill(data.street);

        await this.page.locator(
            CheckoutOverviewLocators.city
        ).fill(data.city);

        await this.page.locator(
            CheckoutOverviewLocators.state
        ).selectOption(data.state);

        await this.page.locator(
            CheckoutOverviewLocators.zip
        ).fill(data.zip);

        await this.page.locator(
            CheckoutOverviewLocators.country
        ).fill(data.country);

    }

    async verifyCheckoutTotal(expected: string) {

        await expect(
            this.page.locator(
                CheckoutOverviewLocators.total
            )
        ).toHaveText(expected);

    }

    async continueToPayment() {

        Logger.info("Continuing To Payment");

        await this.page.locator(
            CheckoutOverviewLocators.continueButton
        ).click();

    }

}