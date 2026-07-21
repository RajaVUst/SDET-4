import { test } from "../fixtures/baseFixtures";

import { PaymentSuccessFlow } from "../flow/PaymentSuccessFlow";

test("Payment Successful", async ({homePage,loginPage,searchResultPage,
    productPage,
    cartPage,
    checkoutPage,
    paymentPage,
    successPage}) => 
        {
        const pay = new PaymentSuccessFlow(homePage,
        loginPage,
        searchResultPage,
        productPage,
        cartPage,
        checkoutPage,
        paymentPage,
        successPage);

    await pay.payment();

});