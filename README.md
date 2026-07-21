# SDET-4 Playwright UI Automation Project

This project contains end-to-end UI automation tests for a web application using Playwright and TypeScript. The suite is built around the Page Object Model (POM) and flow-based test scenarios for checkout and cart validation.

## Overview

The automated tests cover the following user journeys:

- Payment processing error validation
- Remove product validation from the cart

These tests exercise the main application flows through browser automation and verify expected UI behavior, totals, badges, and cart state changes.

## Tech Stack

- TypeScript
- Playwright
- Node.js
- Winston for logging
- dotenv for environment variables

## Project Structure

```text
config/                # Environment and configuration files
custom/                # Additional utility/custom setup (if used)
data/                  # Test input data for checkout, payments, and products
fixtures/              # Base fixtures and shared test setup
flows/                 # High-level business flow implementations
locators/              # CSS/XPath locators grouped by page
logger/                # Logging setup
pages/                 # Page Object Model classes
tests/                 # Playwright test specifications
playwright.config.ts   # Playwright configuration
package.json           # Project metadata and dependencies
```

## Prerequisites

Make sure the following are installed on your machine:

- Node.js (recommended LTS)
- npm

## Installation

From the project root, install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

If you are running on a Linux environment and need system dependencies as well:

```bash
npx playwright install --with-deps
```

## Configuration

The main application URL is configured in [config/Environment.ts](config/Environment.ts).

You can also override the base URL at runtime by setting:

```bash
set BASE_URL=https://your-app-url
```

On Linux/macOS:

```bash
export BASE_URL=https://your-app-url
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/paymentProcessingError.spec.ts
```

Run a specific test case by title:

```bash
npx playwright test --grep "Payment Processing Error"
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## Test Reports

Playwright will generate an HTML report after the run. To open it:

```bash
npx playwright show-report
```

## Test Coverage

### Payment Processing Error Validation

This flow verifies the journey where a user:

1. Opens the application
2. Adds a product to the cart
3. Proceeds to checkout
4. Enters guest information
5. Continues to payment
6. Submits payment details and validates the process

### Remove Product Validation

This flow verifies the cart behavior where a user:

1. Adds multiple products
2. Removes products one by one
3. Confirms cart badge updates
4. Validates subtotal, tax, shipping, and total changes
5. Confirms the cart becomes empty

## Notes

- The project uses a flow-based structure where business scenarios are implemented in the [flows](flows) folder.
- Page interactions are encapsulated in the [pages](pages) folder for easier maintenance and reusability.
- Test data is stored separately in [data](data) to keep tests readable and maintainable.

## Troubleshooting

If you encounter browser-related issues:

```bash
npx playwright install --force
```

If tests fail due to application timing or slow loading, you can increase the default timeout in the Playwright configuration or the environment settings.
