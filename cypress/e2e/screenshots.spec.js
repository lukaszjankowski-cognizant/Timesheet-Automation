///<reference types="cypress" />


describe('Skip login', () => {
  it('timesheet attack',() => {
    cy.visit('https://onecognizant.cognizant.com', {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      }
    });
    cy.contains('View Timesheet').click({waitForAnimations: false})
    cy.window().its('open').should('be.called');
    cy.wait(25000)
    cy.contains('[class="ps_box-link timesheet_period"]').click()
  });
});
