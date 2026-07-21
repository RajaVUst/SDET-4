import { test, expect } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';

test('No products under the filter', async ({ page, homePage }) => {

    await homePage.open();
    await expect(page).toHaveURL('/');
    await homePage.searchProduct(testData.product);

    await expect(homePage.search).toHaveValue(testData.product);
    await expect(page).toHaveURL(/search/i);
    await homePage.applyPriceFilterincorrect();
    await expect(page.getByText('No products found')).toBeVisible();

});

test('Search for the unavailable product', async ({ page, homePage }) => {

    await homePage.open();
    await expect(page).toHaveURL('/');
    await homePage.searchProduct(testData.product1)
    await expect(page.getByRole('heading',{name:'No results for "pods"'})).toBeVisible();
});
