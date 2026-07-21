# SDET-4 UI and API Automation Project

This repository contains a complete end-to-end automation framework for validating both UI and API behavior. The UI tests are implemented with Playwright and TypeScript, while the API tests are built with Java, Maven, Rest-Assured, JUnit 5, and Allure reporting.

## Overview

The project is designed to automate key functional flows for a demo e-commerce-style application and verify backend API behavior. It covers:

- UI regression and workflow validation
- API request/response validation
- Negative and edge-case scenarios
- Automated execution through GitHub Actions
- Rich test reporting with Playwright and Allure

## Tech Stack

### UI Automation
- TypeScript
- Playwright
- Node.js
- dotenv
- Winston for logging

### API Automation
- Java 21
- Maven
- Rest-Assured
- JUnit 5
- Allure Report
- Jackson
- Log4j2

## Project Structure

```text
.github/workflows/        # GitHub Actions CI workflow
API_final/                 # Maven-based API automation module
  pom.xml                   # Maven dependencies and plugins
  src/test/java/            # API test classes and helpers
  src/test/resources/      # API config and schema files
UI/                        # Playwright-based UI automation project
  config/                   # Environment configuration
  data/                     # Test input data
  fixtures/                 # Shared fixtures and setup logic
  flows/                    # Business-flow abstractions
  locators/                 # Page locators grouped by page
  logger/                   # Logging utility
  pages/                    # Page Object Model classes
  tests/                    # Playwright spec files
  playwright.config.ts     # Playwright configuration
  package.json              # Node.js dependencies and scripts
```

## Prerequisites

Make sure the following tools are installed before running the tests locally:

- Node.js 22 or newer
- npm
- Java 21
- Maven

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RajaVUst/SDET-4.git
cd SDET-4
```

### 2. Install UI dependencies

```bash
cd UI
npm ci
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

If you are on Linux and browsers are missing system dependencies, use:

```bash
npx playwright install --with-deps
```

### 4. Install API dependencies

```bash
cd ../API_final
mvn clean test -DskipTests=false
```

## Running Tests

### UI tests

Run all UI tests from the UI folder:

```bash
cd UI
npx playwright test
```

Run a specific spec file:

```bash
npx playwright test tests/paymentProcessingError.spec.ts
```

Run a single test by title:

```bash
npx playwright test --grep "Payment Processing Error"
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

### API tests

Run all API tests from the API module:

```bash
cd API_final
mvn clean test
```

Generate the Allure report:

```bash
mvn allure:report
```

Open the report locally:

```bash
mvn allure:serve
```

## Configuration

### UI configuration

The UI base URL is defined in [UI/config/Environment.ts](UI/config/Environment.ts).

You can override it using the environment variable below:

```bash
set BASE_URL=https://your-app-url
```

On Linux/macOS:

```bash
export BASE_URL=https://your-app-url
```

### API configuration

The API base URL and password values are stored in [API_final/src/test/resources/config.properties](API_final/src/test/resources/config.properties).

Update these values if your test environment requires a different target URL or credentials.

## Covered Test Scenarios

### UI scenarios
- Payment processing error validation
- Remove product validation from the cart
- Checkout flow validation
- Cart badge and total verification

### API scenarios
- User creation
- Authentication token generation
- Retrieval of books from the demo API
- Negative flow validation such as duplicate user creation and invalid password handling

## CI/CD with GitHub Actions

The workflow file at [.github/workflows/ci.yml](.github/workflows/ci.yml) runs both automation suites:

- UI tests through Playwright
- API tests through Maven with Allure report generation

It is triggered on:
- push to the configured branch
- pull requests to the same branch
- manual workflow dispatch

Artifacts produced by the workflow include:
- Playwright HTML report
- Maven Surefire reports
- Allure report

## Reporting

- Playwright generates HTML reports for UI tests.
- Allure produces rich reports for API test execution.
- Test artifacts are uploaded by the GitHub Actions workflow when the run finishes.

## Troubleshooting

If tests fail, verify the following first:

- The target application URL is correct
- All dependencies are installed properly
- Browser dependencies for Playwright are available
- GitHub secrets are configured correctly for CI runs
- The relevant test command is executed from the correct folder

If Playwright browsers are missing, reinstall them with:

```bash
npx playwright install --force
```

## Notes

- The UI suite follows a Page Object Model approach with flow-based test logic for better maintainability.
- The API suite is organized into endpoints, models, specs, and tests to keep responsibilities separated.
- This project is suitable for learning, practicing, and demonstrating automation testing with modern tools.
