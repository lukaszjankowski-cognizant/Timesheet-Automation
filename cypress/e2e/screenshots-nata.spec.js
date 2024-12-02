/// <reference types = "cypress"/>
 
Cypress.on('uncaught:exception', (err, runnable) => {
    /*if(err.message.includes('Blocked a frame with origin')){
        return false
    }*/
    return false
})
 
describe('First test suite', () => {
 
    it('Should open Timesheets page', () => {
        cy.visit('https://compass.esa.cognizant.com/psc/ESA89PRD/EMPLOYEE/ERP/c/ADMINISTER_EXPENSE_FUNCTIONS.CTS_TS_LAND_COMP.GBL?Action=A&local_date=2024-11-25');
        cy.document().its('readyState').should('eq', 'complete');
        cy.wait(25000) //chyba można usunąć
 
       
        cy.origin('https://compass.esa.cognizant.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Things went bad')) {
                    // we expected this error, so let's ignore it
                    // and let the test continue`
                    return false
                }
            })
 
            cy.contains('Timesheets').should('exist')
 
            cy.get('#CTS_TS_LAND_PER_DESCR30\\$0').should('exist')
 
 
        })
    })
})
 
 
 