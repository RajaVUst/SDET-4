import { test, expect } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';

test('Payment Failure Validation', async ({
    page,
    homePage,
    cartPage,
    checkoutPage,
    paymentPage
}) => {

    await homePage.open();

    await homePage.searchProduct(testData.product);
    await homePage.applyPriceFilter();
    await homePage.addProductToCart();
    await homePage.openCart();

    await expect(page).toHaveURL(/cart/i);
    await expect(cartPage.checkout).toBeVisible();
    await expect(cartPage.checkout).toBeEnabled();

    await cartPage.proceedCheckout();

    await expect(page).toHaveURL(/checkout/i);

    await checkoutPage.fillDetails({
        ...testData.guest,
        ...testData.address
    });

    await expect(page.getByTestId('payment-card-name')).toBeVisible();
    await expect(page.getByTestId('payment-card-number')).toBeVisible();
    await expect(page.getByTestId('payment-expiry')).toBeVisible();
    await expect(page.getByTestId('payment-cvv')).toBeVisible();
    await expect(page.getByTestId('place-order-button')).toBeEnabled();

    await paymentPage.makePayment(testData.payment);

    await expect(page.getByTestId('payment-general-error')).toBeVisible();

    await expect(page).toHaveURL(/payment|checkout/i);
    await expect(page.getByTestId('place-order-button')).toBeVisible();
});