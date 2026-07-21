// import { defineConfig, devices } from "@playwright/test";
// import { Environment } from "./config/Environment";

// export default defineConfig({

//   testDir: "./tests",

//   timeout: 30_000,

//   fullyParallel: true,

//   retries: process.env.CI ? 2 : 0,

//   workers: process.env.CI ? 4 : undefined,

//   reporter: [
//     ["list"],
//     ["html"]
//   ],

//   use: {

//     baseURL: Environment.baseUrl,

//     trace: "on-first-retry",

//     screenshot: "only-on-failure",

//     video: "retain-on-failure",

//     actionTimeout: 10_000,

//     navigationTimeout: 30_000

//   },

//   projects: [
//     {
//       name: "chromium",
//       use: {
//         ...devices["Desktop Chrome"]
//       }
//     }
//   ]

// });

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30_000,

  fullyParallel: true,

  workers: process.env.CI ? 4 : undefined,

  retries: process.env.CI ? 2 : 0,

  reporter: process.env.CI
    ? [["list"], ["blob"]]
    : [["list"], ["html"]],

  use: {
    baseURL: process.env.BASE_URL,

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    actionTimeout: 10_000,

    navigationTimeout: 30_000
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