import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: 'cypress/tests/**/*.test.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component.js',
    },
    e2e: {
        baseUrl: 'http://127.0.0.1:4173',
        specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
