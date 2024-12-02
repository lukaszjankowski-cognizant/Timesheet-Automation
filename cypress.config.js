const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  chromeWebSecurity: false,
  e2e: {
    //baseUrl: 'https://compass.esa.cognizant.com/',
    experimentalModifyObstructiveThirdPartyCode: true,
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

