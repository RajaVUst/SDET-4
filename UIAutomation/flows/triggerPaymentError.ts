import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { log } from '../utils/logger';

interface CardDetails {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
}

export async function triggerPaymentError(
  loginPage: LoginPage,
  productsPage: ProductsPage,
  cartPage: CartPage,
  checkoutPage: CheckoutPage,
  paymentPage: PaymentPage,
  userId: string,
  productId: string,
  card: CardDetails
) {
  log('Logging in as demo user ' + userId);
  await loginPage.loginAsDemoUser(userId);

  log('Adding one product to cart');
  await productsPage.addToCart(productId);

  log('Going to cart and starting checkout');
  await cartPage.openCart();
  await cartPage.goToCheckout();

  log('Continuing to payment');
  await checkoutPage.continueToPayment();

  log('Selecting the "Payment Success" option');
  await paymentPage.selectSuccessScenario();

  log('Entering card details that trigger a processing error');
  await paymentPage.fillCardDetails(card.name, card.number, card.expiry, card.cvv);

  log('Placing the order');
  await paymentPage.placeOrder();

  log('Checking the processing error message is shown');
  await paymentPage.checkErrorIsShown();

  log('Checking the order was NOT placed (still on Payment page)');
  await paymentPage.checkStillOnPaymentPage();

  log('Checking the entered card details are still there for retry');
  await paymentPage.checkFieldsRetainValues(card.name, card.number, card.expiry, card.cvv);
}