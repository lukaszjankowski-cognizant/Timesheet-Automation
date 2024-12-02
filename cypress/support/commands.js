// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToAAD', (username, password) => {
  cy.visit('https://onecognizant.cognizant.com')

  // Login to your AAD tenant.
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        username
      },
    },
    ({ username }) => {
      cy.get('input[type="email"]').type(username, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
    }
  )

  // typing password into da next MS origin page 
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        password,
      },
    },
    ({ password }) => {
      cy.get('input[type="password"]').type(password, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
    }
  )
// validating ms authorisation page and waiting for user's response
cy.origin('login.microsoftonline.com', () => {
  cy.get('#idDiv_SAOTCAS_Title').should('contain', 'Approve sign in request')
})
cy.wait(16000) // wait and thou shall use smartphone authenticator
cy.origin('login.microsoftonline.com', () => {
  cy.contains('Stay signed in?').should('exist')
  cy.get('[type="checkbox"]').check( {force: true} )
  cy.get('[data-report-event="Signin_Submit"]').click()
})
}
);


Cypress.Commands.add('loginToAAD2', (username, password) => {
  cy.visit('https://compass.esa.cognizant.com/')

  // Login to your AAD tenant.
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        username
      },
    },
    ({ username }) => {
      cy.get('input[type="email"]').type(username, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
    }
  )

  // typing password into da next MS origin page 
  cy.origin(
    'login.microsoftonline.com',
    {
      args: {
        password,
      },
    },
    ({ password }) => {
      cy.get('input[type="password"]').type(password, {
        log: false,
      })
      cy.get('input[type="submit"]').click()
    }
  )
// validating ms authorisation page and waiting for user's response
cy.origin('login.microsoftonline.com', () => {
  cy.get('#idDiv_SAOTCAS_Title').should('contain', 'Approve sign in request')
})
cy.wait(16000) // wait and thou shall use smartphone authenticator
cy.origin('login.microsoftonline.com', () => {
  cy.contains('Stay signed in?').should('exist')
  cy.get('[type="checkbox"]').check( {force: true} )
  cy.get('[data-report-event="Signin_Submit"]').click()
})
}
);