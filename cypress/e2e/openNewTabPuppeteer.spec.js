/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
   
  
  
  describe('Azure Active Directory Authentication', () => {
      /*beforeEach(() => {
        
        cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'));
        //cy.visit('https://onecognizant.cognizant.com')
        
      });*/
  
      it('enters page and logs with MS account', () => {
       
        cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'));
        //cy.visit('https://onecognizant.cognizant.com/Home')
        
        cy
        .get('#div_qkActioncontainer')
        .should('exist')
        .click({force: true})
  
        cy
        .puppeteer('switchToTabAndGetContent')
        .should('equal', 'Timesheet')
  
        cy.title().should('include', 'OneCognizant')
      
  
        
        //cy.visit('https://compass.esa.cognizant.com')
  
        //cy.contains('My Homepage').should('exist')
        
      });
  });