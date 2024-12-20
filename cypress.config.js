const { defineConfig } = require('cypress');
const { setup, retry } = require('@cypress/puppeteer');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  defaultCommandTimeout: 80000, //ms
  e2e: {
    chromeWebSecurity: false,
    //baseUrl: 'https://onecognizant.cognizant.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples', '**/3-other'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      setup({
        on,
        onMessage: {
          async switchToTabAndGetContent(browser) {
            try {
              const page = await retry(async () => {
                const pages = await browser.pages();
                const page = pages.find(page => page.url().includes('compass'));
                if (!page) throw new Error(`Could not find the page with the URL containing 'compass'. Current pages: ${pages.map(page => page.url()).join(', ')}`);
                return page; 
              });

              await page.bringToFront();
              const paragraph = await page.waitForSelector('#win0divPTNUI_LAND_REC_GROUPLET\\$0', { timeout: 30000 });              const paragraphText = await page.evaluate(el => el.textContent, paragraph);
              await paragraph.dispose();
              //await page.close();
              return paragraph;
            } catch (error) {
              console.error('Error:', error);
              throw error;
            }
          },
        },
    });
    },
  },
})