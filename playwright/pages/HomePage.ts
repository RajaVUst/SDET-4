import { expect, Page } from '@playwright/test';
import { logger } from '../utils/logger';

export class HomePage {

    constructor(private page: Page){}

    search = this.page.getByTestId('search-input');
    searchButton = this.page.getByTestId('search-button');
    filter = this.page.getByTestId('price-filter-4');
    wrongfilter = this.page.getByTestId('price-filter-0');
    addToCart = this.page.getByTestId('add-to-cart-prod-002');
    cart = this.page.getByTestId('cart-link');

    async open(){
        await this.page.goto('/');
    }

    async searchProduct(product:string){
        logger.info('Searching product : ${product}');
        await this.search.fill(product);
        await this.search.press('Enter');
        await this.searchButton.click();
        logger.info("Search completed");
    }

    async searchUnavailableProdcut(product1:string){
        logger.info('Searching product : ${product}');
        await this.search.fill(product1);
        await this.search.press('Enter');
        await this.searchButton.click();
        logger.info("Search completed");
    }

    async applyPriceFilter(){
        logger.info("Applying price filter");
        await this.filter.click();
        logger.info('Price filter applied');
    }

    async applyPriceFilterincorrect(){
        await this.wrongfilter.click();
    }

    async addProductToCart(){
        logger.info("Adding product to cart");
        await this.addToCart.click();
        logger.info('Product added to cart');
    }

    async verifySearch(product:string){
        await expect(this.search).toHaveValue(product);
    }

    async openCart(){
        logger.info('Opening cart');
        await this.cart.click();
        logger.info('Cart opened');
    }

}