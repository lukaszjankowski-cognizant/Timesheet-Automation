/// <reference types = "cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Azure Active Directory Authentication', () => {

    it('enter page and logs with MS account', () => {
     
      cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'));

      cy.visit('https://onecognizant.cognizant.com/Home');
      
      cy
      .get('#div_qkActioncontainer > div > div:nth-child(2) > div > div.row.row1 > div:nth-child(1)')
      .should('exist')
      .click({force: true});

      cy.wait(40000);//ms

      cy
      .puppeteer('switchToTabAndGetContent')
      .should('exist');
      
    });
});
  