# SDET-4


This repository contains two automation projects:

- `Playwright_Automation_Final`: Playwright UI automation tests written in TypeScript.
- `API_Final`: API automation tests written in Java using Maven and REST-assured.

The repository also includes GitHub Actions workflows to run both UI and API automation pipelines.

//Repository Structure

- `.github/workflows/myCI.yml` - main CI workflow for UI and API automation.
- `Playwright_Automation_Final/` - Playwright UI automation project.
- `API_Final/` - Java/Maven API automation project.
- `.idea/` - IDE metadata.

//Playwright_Automation_Final

- `package.json` - npm package metadata and dependencies.
- `package-lock.json` - locked npm dependency tree.
- `playwright.config.ts` - Playwright test configuration.
- `tests/` - test specifications:
  - `searchFilter.spec.ts`
  - `paymentSuccess.spec.ts`
- `pages/` - page object model classes.
- `flow/` - reusable test flows.
- `locators/` - element locator definitions.
- `fixtures/` - Playwright test fixtures.
- `config/env.ts` - environment configuration.
- `logger/Logger.ts` - logging utilities.
- `playwright-report/` - generated Playwright HTML report output.
- `allure-results/` - generated Allure results output.

//API_Final

- `pom.xml` - Maven build configuration.
- `.env` - environment variables for local API execution.
- `src/main` - application source (if present).
- `src/test/java` - API automation test classes.
- `allure-results/` - generated Allure results output.
- `.mvn/` - Maven wrapper metadata (if present).
- `target/` - Maven build output.

//Running the Playwright UI Project

From the root of the repository, switch to the UI project folder:

```bash
cd Playwright_Automation_Final
npm ci
npx playwright install --with-deps
npx playwright test
```

//Environment variables

The UI tests may depend on the following variables:

- `BASE_URL` - application base URL
- `EMAIL` - user email for login flows
- `PASSWORD` - user password for login flows

These are configured in GitHub Actions as secrets.


//Environment variables

The API project uses:

- `BASE_URL` - API base URL

Additional values may be stored in `API_Final/.env` or provided through CI.
//GitHub Actions

The main workflow is defined in `.github/workflows/myCI.yml`.

- `ui-tests` job runs the Playwright UI project under `Playwright_Automation_Final`.
- `api-tests` job runs the Maven-based API project under `API_Final`.


