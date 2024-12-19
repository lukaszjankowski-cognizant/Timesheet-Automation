
/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Azure Active Directory Authentication', () => {
  it('enters page and logs with MS account', () => {
    
    cy.visit('/')
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