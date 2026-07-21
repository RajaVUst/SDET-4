import { test, expect } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';

test('Search + Price Filter Validation', async ({ page, homePage }) => {

    await homePage.open();

    await expect(page).toHaveURL('/');
    await expect(homePage.search).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.searchButton).toBeEnabled();

    await homePage.searchProduct(testData.product);

    await expect(homePage.search).toHaveValue(testData.product);
    await expect(page).toHaveURL(/search/i);

    await homePage.applyPriceFilter();

    await expect(homePage.addToCart).toBeVisible();
    await expect(homePage.addToCart).toBeEnabled();

    await homePage.addProductToCart();
    await homePage.openCart();

    await expect(page).toHaveURL(/cart/i);
});