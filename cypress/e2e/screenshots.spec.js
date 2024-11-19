///<reference types="cypress" />


describe('Screenshort grabber', () => {
    it('first test', () => {
        cy.visit('/', {timeout: 90000})
        cy.get('#i0116')
    });
});
