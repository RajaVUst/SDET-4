export class InventoryLocators {

    static readonly homePage = '[data-testid="home-page"]';

    static readonly heroBanner = '[data-testid="hero-banner"]';

    static readonly productGrid = '[data-testid="product-grid"]';

    static readonly cartLink = '[data-testid="cart-link"]';

    static readonly resultsCount = '[data-testid="results-count"]';

    static readonly searchInput = '[data-testid="search-input"]';

    static readonly searchButton = '[data-testid="search-button"]';

    static readonly sortDropdown = '[data-testid="sort-select"]';

    static readonly shopNowButton = 'a[href="/?category=Electronics"]';

    static productCard(productId: string) {
        return `[data-testid="product-card-${productId}"]`;
    }

    static productName(productId: string) {
        return `[data-testid="product-name-${productId}"]`;
    }

    static productPrice(productId: string) {
        return `[data-testid="product-price-${productId}"]`;
    }

    static addToCart(productId: string) {
        return `[data-testid="add-to-cart-${productId}"]`;
    }

}