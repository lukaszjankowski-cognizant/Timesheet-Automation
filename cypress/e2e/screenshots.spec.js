///<reference types="cypress" />


describe('skipping loging', () => {
  it('Attack the timesheet',() => {
    cy.visit('https://onecognizant.cognizant.com');
    cy.contains('View Timesheet', {timeout: 10000}).click();
    cy.contains('Timesheet Summary', {timeout: 6000}).should('be.visible');
  });  
});
