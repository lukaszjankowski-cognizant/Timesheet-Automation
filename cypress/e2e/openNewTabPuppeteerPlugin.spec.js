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
      cy.visit('https://onecognizant.cognizant.com/Home')
      
      cy
      .get('#div_qkActioncontainer > div > div:nth-child(2) > div > div.row.row1 > div:nth-child(1)')
      .should('exist')
      .click({force: true})

      cy
      .puppeteer('switchToTabAndGetContent')
      .should('exist')

      cy.title().should('include', 'OneCognizant')
    

      
      //cy.visit('https://compass.esa.cognizant.com')

      //cy.contains('My Homepage').should('exist')
      
    });
});
  