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
    sequenceDiagram
        Cypress ->> App: Visit, pre test
        Cypress ->> Fixture: Get sample data
        App ->> Cypress: Add todos 
        Cypress ->> App: Validate todo count
        Cypress ->> Fixture: Filter todos to be renamed
        App ->> Cypress: Rename todos
        Cypress ->> Fixture: Filter completed todos
        App ->> Cypress: Mark todos as completed
        Cypress ->> App: Validate todo count
        Cypress ->> App: Test Active and Completed buttons
        Cypress ->> App: Test Clear Completed buttons
```

