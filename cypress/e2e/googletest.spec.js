
/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Should go to gmail', () => {
    it('enters gmail', () => {
      
      cy.visit('https://mail.google.com/')
      
      cy.get('.TN aY7xie aik aHS-bnr').click();
    
    });
  });