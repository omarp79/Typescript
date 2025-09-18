import { test, expect } from '@playwright/test';
import Env from '../src/env';
import HomePage from '../src/home';
import SearchLanding from '../src/searchLandingPage';

test.beforeEach(async ({ page }) => {
    console.log(Date())
    const env = new Env(page)
    await env.navigateToBaseURL();
})
test.afterEach(async ({ page }) => {
})

test.describe('Search Functionality', () => {
    test('search for books', async ({ page }) => {
        //The test below Navigates to Amazon, searches for Books, clicks on The Housemaid book title, 
        // and verifies the book title and author on the product page.
        const homePage = new HomePage(page);
        const searchLanding = new SearchLanding(page);
        const searchCriteria = 'Books'
        const theTitle = 'The Housemaid';
        const theAuthor = 'Freida McFadden';

        await homePage.search(searchCriteria);
        await searchLanding.clickBookTitle(theTitle);
        await page.waitForLoadState('domcontentloaded');

        await expect(searchLanding.productTitle).toHaveText(theTitle);
    });
});