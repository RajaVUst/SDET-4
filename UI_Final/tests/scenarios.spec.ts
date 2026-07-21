import { test } from "../fixtures/baseFixtures";
import { checkoutData } from "../data/checkoutData";

test("Guest Checkout Flow", async ({ shopKartFlow }) => {
    await shopKartFlow.completeGuestCheckout(checkoutData);
});

test("Free Shipping Threashold Validation", async ({ shopKartFlow }) => {
    await shopKartFlow.searchForProductAndaddtoCart(checkoutData);
});
