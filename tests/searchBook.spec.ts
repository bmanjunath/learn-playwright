import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class SearchResultsPage extends BasePage {
  readonly firstResultTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.firstResultTitle = page.locator('div._4rR01T').first(); // first book title
  }

  async getFirstBookTitle(): Promise<string> {
    return (await this.getText(this.firstResultTitle)) || '';
  }
}
