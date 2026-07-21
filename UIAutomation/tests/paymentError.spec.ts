import { test } from '../fixtures/pageFixtures';
import { triggerPaymentError } from '../flows/triggerPaymentError';
import { demoUserId, errorTriggerCard } from '../utils/testData';

test('Scenario 2 - Payment processing error is shown', async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage,
  paymentPage,
}) => {
  await productsPage.page.goto('/');

  const productId = '002'; 

  await triggerPaymentError(
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
    paymentPage,
    demoUserId,
    productId,
    errorTriggerCard
  );
});