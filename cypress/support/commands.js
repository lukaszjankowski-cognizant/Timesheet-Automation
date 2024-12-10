Cypress.Commands.add('loginToAAD', (username, password) => {
  
  cy.session('aad-login', () => {
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
      cy.get('#idDiv_SAOTCAS_Title').should('contain', 'Zatwierdzanie żądania logowania')
    })
    cy.wait(25000) // wait and thou shall use smartphone authenticator
    cy.origin('login.microsoftonline.com', () => {
      cy.contains('Chcesz, aby Cię nie wylogowywać?').should('exist')
      cy.get('[type="checkbox"]').check( {force: true} )
      cy.get('[data-report-event="Signin_Submit"]').click()

    })

  });
})