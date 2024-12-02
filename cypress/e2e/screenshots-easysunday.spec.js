/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Enter compass page', () => {
  it('enters page and logs with MS account', () => {
    //cy.clearCookies()
    cy.visit('https://compass.esa.cognizant.com')
    //cy.loginToAAD2(Cypress.env('aad_username'), Cypress.env('aad_password'));
    cy.contains('Timesheet').click()
    });
});