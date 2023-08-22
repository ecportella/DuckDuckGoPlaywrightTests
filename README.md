# DuckDuckGo Playwright Automated Test Suite

Welcome to the Playwright automated test suite for the DuckDuckGo search engine. This suite is built using the Playwright framework and follows the Page Object pattern for end-to-end testing.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Troubleshooting](#troubleshooting)
5. [Continuous Integration](#continuous-integration)
6. [Areas for Improvement](#areas-for-improvement)

## Prerequisites

- Node.js and NPM are required to run the test suite.

## Installation

1. **Install Dependencies**: Run the following command to install necessary dependencies.

```bash
npm install
```

2. **Install Playwright Browsers**: You'll need to ensure that you have the browsers installed which Playwright uses.

```bash
npx playwright install
```

## Running Tests

Execute the tests using any of the following commands:

```bash
npm run test
```

Or

```bash
npx playwright test
```

## Troubleshooting

If you face issues during test execution, you can refer to the Playwright report generated. It provides insights on the test execution and possible reasons for failure.

## Continuous Integration

This repository includes a GitHub Actions CI workflow. The tests are triggered:

- When a new Pull Request is opened.
- When a PR gets merged with the Main branch.

This ensures that the test suite is always in a healthy state.

## Areas for Improvement

- **Selectors**: Some of the selectors used in the test scripts can be fragile. Unfortunately, we don't have control over DuckDuckGo's web elements, hence the reliance on these selectors.
- **API Tests**: The requirements for API testing are not distinctly laid out. Currently, the tests are only printing the Icon URLs and checking if the API responds with a status code of `200`.

<br>
__________________________

<br>

Your contributions and feedback are invaluable. Feel free to suggest improvements or open pull requests.
