import { Page, expect} from "@playwright/test";
import { HomeLocator } from "../locators/HomeLocator";
import { logger } from "../logger/Logger"
import { Environment } from "../config/env";

export class HomePage{
    private readonly page: Page;
    private readonly locator: HomeLocator;

    constructor(page: Page) {
        this.page = page;
        this.locator = new HomeLocator(page);
    }

    async navigate(){
        logger.info("Open the retail application")

        this.page.goto(Environment.BASE_URL);
    }

    async verifyHomePage() {
        logger.info("Verify home page")
        await expect(this.locator.logo).toBeVisible();
        await expect(this.locator.heading).toBeVisible();

    }

    async searchProduct(product: string){
        logger.info("Search a product: ${product}");
        await this.locator.searchbar.isEnabled();
        await this.locator.searchbar.fill(product);
        await this.locator.searchbar.click();
        logger.info("The searched product is displayed on the product page");   
    }


}