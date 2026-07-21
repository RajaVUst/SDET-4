export const ProductData = {

    removeProductScenario: {

        products: [
            "prod-001",
            "prod-002",
            "prod-003"
        ],

        initialCartBadge: 3,

        afterFirstRemoval: {
            removedProduct: "prod-001",
            cartBadge: 2,
            subtotal: "$884.98",
            tax: "$75.22",
            shipping: "FREE",
            total: "$960.20"

        },

        afterSecondRemoval: {
            removedProduct: "prod-002",
            cartBadge: 1,
            subtotal: "$34.99",
            tax: "$2.97",
            shipping: "$5.99",
            total: "$43.95"

        },

        afterThirdRemoval: {
            removedProduct: "prod-003"
        }

    },

    paymentScenario: {
        productId: "prod-003",
        cartBadge: 1,
        checkoutTotal: "$43.95",
        paymentTotal: "$43.95"
    }

};