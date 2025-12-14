import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly closeLoginPopupButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('input[name="q"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.closeLoginPopupButton = page.locator('button._2KpZ6l._2doB4z'); // "X" button for login popup
  }

  async closeLoginPopupIfPresent() {
    if (await this.closeLoginPopupButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await this.click(this.closeLoginPopupButton);
    }
  }

  async searchBook(bookName: string) {
    await this.type(this.searchInput, bookName);
    await this.click(this.searchButton);
  }
}
