import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SearchResultsPage } from '../pages/searchResultsPage';

const BOOK_NAME = process.env.BOOK_NAME || 'Harry Potter';

test.describe('Flipkart Book Search POM Demo', () => {
  test('should search for a book and verify first result', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    await homePage.navigateTo('/');
    await homePage.closeLoginPopupIfPresent();
    await homePage.searchBook(BOOK_NAME);

    const firstBookTitle = await searchResultsPage.getFirstBookTitle();
    console.log('First book found:', firstBookTitle);

    expect(firstBookTitle.toLowerCase()).toContain(BOOK_NAME.toLowerCase());
  });
});
