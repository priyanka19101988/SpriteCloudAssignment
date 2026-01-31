# SpriteCloudAssignment Framework

This project is an end-to-end (E2E) and API testing framework built using [Playwright](https://playwright.dev/) for UI automation and API validation. It is designed for robust, maintainable, and scalable test automation of web applications and REST APIs.

## Features

- **Playwright** for browser automation and UI testing
- **TypeScript** for type-safe, modern JavaScript development
- **API Testing** using Playwright's built-in request context
- **Page Object Model (POM)** for maintainable UI tests
- **Fixtures** for reusable test setup and teardown
- **Custom Test Fixtures** for login, logout, and negative scenarios
- **Headed/Headless Execution** configurable via Playwright config
- **HTML Reporting** for test results
- **AI Assistance**: This framework was designed and enhanced with the help of GitHub Copilot (AI-powered code suggestions and automation)

## Project Structure

```
SpriteCloudAssignment/
├── playwright.config.ts         # Playwright configuration
├── package.json                 # Project dependencies and scripts
├── tests/
│   ├── SauceDemoUiTest.spec.ts  # UI E2E test cases
│   ├── FakeStoreApi.spec.ts     # API test cases for fakestoreapi.com
│   ├── Pages/                   # Page Object Model classes
│   ├── Fixtures/                # Custom Playwright fixtures
│   └── Config/                  # Test configuration files
└── playwright-report/           # HTML test reports
```

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run all tests (headed mode)**
   ```sh
   npx playwright test
   ```

3. **Run a specific test**
   ```sh
   npx playwright test tests/Test.spec.ts
   ```

4. **View HTML report**
   ```sh
   npx playwright show-report
   ```

## Technologies Used

- [Playwright](https://playwright.dev/) (UI & API automation)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [GitHub Copilot](https://github.com/features/copilot) (AI-powered code completion and suggestions)



