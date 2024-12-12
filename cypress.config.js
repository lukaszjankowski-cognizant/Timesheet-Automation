const { defineConfig } = require('cypress');
const { setup, retry } = require('@cypress/puppeteer');

module.exports = defineConfig({
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--user-data-dir=/path/to/your/custom/profile')
    }
 
    return launchOptions
  })
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  defaultCommandTimeout: 30000, // ms
  e2e: {
    chromeWebSecurity: false,
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples', '**/3-other'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Initialize Puppeteer setup
      setup({
        on,
        onMessage: {
          async switchToTabAndGetContent(browser) {
            if (!browser) {
              throw new Error('Lost reference to the browser');
            }

            const page = await retry(async () => {
              const pages = await browser.pages();
              const targetPage = pages.find((p) => p.url().includes('compass.esa.cognizant.com'));
              if (!targetPage) throw new Error('Target page not found');
              return targetPage;
            });

            await page.bringToFront();

            const content = await page.evaluate(() => {
              const element = document.querySelector('#div_qkActioncontainer > div > div:nth-child(2) > div > div.row.row1 > div:nth-child(1)');
              return element ? element.textContent.trim() : null;
            });

            if (!content) {
              throw new Error('Failed to retrieve content from the page');
            }

            return content;
          },
        },
      });

      // Return the config object
      return config;
    },
  },
});