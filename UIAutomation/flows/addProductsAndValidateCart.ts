import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { log } from '../utils/logger';

interface CartProduct {
  searchTerm: string;
  id: string;
  name: string;
  price: number;
}

export async function addProductsAndValidateCart(
  loginPage: LoginPage,
  productsPage: ProductsPage,
  cartPage: CartPage,
  userId: string,
  products: CartProduct[]
) {
  log('Logging in as demo user ' + userId);
  await loginPage.loginAsDemoUser(userId);

  for (const product of products) {
    log(`Searching for "${product.searchTerm}" and adding to cart`);
    await productsPage.searchAndAddToCart(product.searchTerm, product.id);
  }

  log('Opening the cart');
  await cartPage.openCart();

  const productIds = products.map((p) => p.id);

  log('Checking all products are visible in the cart');
  await cartPage.checkProductsInCart(productIds);

  log('Checking each product name matches what was added');
  for (const product of products) {
    await cartPage.checkProductName(product.id, product.name);
  }

  log('Checking each product has an image');
  for (const id of productIds) {
    await cartPage.checkProductHasImage(id);
  }

  log('Checking each product price matches the expected value');
  for (const product of products) {
    await cartPage.checkProductPrice(product.id, product.price);
  }

  log('Checking each product quantity is 1');
  for (const id of productIds) {
    await cartPage.checkProductQuantity(id, '1');
  }

  log('Checking cart item count matches number of products added');
  await cartPage.checkCartItemCount(products.length);

  log('Checking cart subtotal equals the sum of product prices');
  await cartPage.checkSubtotalMatchesSum(productIds);
}