import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    browserName: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS === 'true' ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: process.env.BASE_URL || 'https://www.flipkart.com',
  },
});
