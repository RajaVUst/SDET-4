import { test } from '../fixtures/pageFixtures';
import { addProductsAndValidateCart } from '../flows/addProductsAndValidateCart';
import { demoUserId, cartProducts } from '../utils/testData';

test('Scenario 1 - Add multiple products and validate cart', async ({
  loginPage,
  productsPage,
  cartPage,
}) => {
  await productsPage.page.goto('/');

  await addProductsAndValidateCart(
    loginPage,
    productsPage,
    cartPage,
    demoUserId,
    cartProducts
  );
});