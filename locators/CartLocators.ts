// export class CartLocators {

//     static readonly cartBadge =
//         '[data-testid="cart-count"]';

//     static readonly cartHeading =
//         '[data-testid="cart-heading"]';

//     static readonly checkoutButton =
//         '[data-testid="checkout-button"]';

//     static readonly subtotal =
//         '[data-testid="cart-subtotal"]';

//     static readonly tax =
//         '[data-testid="cart-tax"]';

//     static readonly total =
//         '[data-testid="cart-total"]';

//     static readonly shipping =
//         '[data-testid="cart-shipping"]';

//     static readonly itemList =
//         '[data-testid="cart-items-list"]';

//     static product(productId: string) {
//         return `[data-testid="cart-item-${productId}"]`;
//     }

//     static decrease(productId: string) {
//         return `[data-testid="cart-qty-decrease-${productId}"]`;
//     }

//     static quantity(productId: string) {
//         return `[data-testid="cart-qty-value-${productId}"]`;
//     }

//     static remove(productId: string) {
//         return `[data-testid="cart-remove-${productId}"]`;
//     }

// }

export class CartLocators {

    static readonly cartCount =
        '[data-testid="cart-count"]';

    static readonly cartHeading =
        '[data-testid="cart-heading"]';

    static readonly checkoutButton =
        '[data-testid="checkout-button"]';

    static readonly subtotal =
        '[data-testid="cart-subtotal"]';

    static readonly tax =
        '[data-testid="cart-tax"]';

    static readonly shipping =
        '[data-testid="cart-shipping"]';

    static readonly total =
        '[data-testid="cart-total"]';

    static readonly itemList =
        '[data-testid="cart-items-list"]';

    static readonly emptyCartMessage =
        '[data-testid="empty-cart-message"]';

    static readonly continueShopping =
        '[data-testid="continue-shopping-link"]';

    static cartItem(productId: string) {
        return `[data-testid="cart-item-${productId}"]`;
    }

    static decreaseButton(productId: string) {
        return `[data-testid="cart-qty-decrease-${productId}"]`;
    }

    static quantity(productId: string) {
        return `[data-testid="cart-qty-value-${productId}"]`;
    }

    static removeButton(productId: string) {
        return `[data-testid="cart-remove-${productId}"]`;
    }

}