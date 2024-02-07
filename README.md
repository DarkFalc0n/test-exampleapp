# Test Setup for Vite + React app

## Getting Started
To run the vite app in developement mode, run the following commands:
```sh
    pnpm install --save-dev
    pnpm dev
```
This will run the app at http://localhost:5173/ 


## Testing

This project has [Cypress](https://www.cypress.io/) setup for E2E and Component testing.

### E2E testing

Tests all features in a single run using sample data, accessed from cypress/fixtures.

#### Getting started

To run E2E tests in the cli, use:
```
    pnpm test:e2e
```

#### Flow

```mermaid
    zenuml
        C as Cypress
        A as App
        F as Fixture
        C -> A: Visit, pre test
        C -> F: Get sample data
        A -> C: Add todos 
        C -> A: Validate todo count
        C -> F: Filter todos to be renamed
        A -> C: Rename todos
        C -> F: Filter completed todos
        A -> C: Mark todos as completed
        C -> A: Validate todo count
        C -> A: Test Active and Completed buttons
        C -> A: Test Clear Completed buttons
```

