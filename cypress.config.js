const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  e2e: {
    //baseUrl: 'https://onecognizant.cognizant.com',
    experimentalModifyObstructiveThirdPartyCode: true,
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && !browser.isHeadless) {
          launchOptions.args.push(
            `--user-data-dir=C:\\Users\\Dorota_PC\\AppData\\Local\\Google\\Chrome\\User Data\\`
          );
        }
        return launchOptions;
      });
    },
  },
});