/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Azure Active Directory Authentication', () => {
  it('enters page and logs with MS account', () => {
    
    cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'));
    // cy.contains('View Timesheet').click()
    // Stub the window.open method to capture the URL
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
    
    cy.contains('View Timesheet').click();
    
    // Wait for the window.open call and get the URL
    cy.get('@windowOpen').should('be.called').then((stub) => {
      const newTabUrl = stub.args[0][0];
      cy.visit(newTabUrl);
    });
    
    cy.wait(20000);
  });
});