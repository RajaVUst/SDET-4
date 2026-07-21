import { defineConfig, devices } from '@playwright/test';
import { baseURL } from './utils/env';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    ['allure-playwright'],
  ],

  use: {
    baseURL: baseURL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});