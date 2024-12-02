/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Azure Active Directory Authentication', () => {
    beforeEach(() => {
      cy.session('aad-login', () => {
        cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'));
      });
    });
 
    it('enters page and logs with MS account', () => { 
      cy.contains('My Homepage').should('exist')     
    });
  });