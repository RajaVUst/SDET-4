import { Locator, Page } from "@playwright/test";

export class ProductLocator {

    readonly productTitle: Locator;

    readonly productPrice: Locator;

    readonly addToCart: Locator;


    readonly image: Locator;

    readonly cartIcon: Locator;

    constructor(page: Page) {

        this.cartIcon = page.getByTestId("cart-link");

        this.productTitle = page.getByRole("heading",{name:"ProSound Wireless Headphones"});;

        this.productPrice = page.getByTestId("product-detail-price");

        this.addToCart = page.getByRole('button', { name: /Add to Cart/i });
        
        this.image = page.getByTestId("product-detail-image");

    }

}