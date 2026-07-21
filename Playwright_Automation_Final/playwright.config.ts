import path from "path";
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

for (const envFile of [
  path.resolve(__dirname, ".env"),
  path.resolve(__dirname, "..", ".env")
]) {
  dotenv.config({ path: envFile });
}

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: true,
  workers: process.env.CI ? 4 : undefined,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],

  use: {
    baseURL: process.env.BASE_URL,

    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",

    actionTimeout: 30_000,

    navigationTimeout: 30_000,

    headless: true,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    }
  ]
});