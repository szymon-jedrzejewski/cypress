describe('Login test', () => {
  it('Test Case 4', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('incorrectLogin')
    cy.get('#password').type('Password123')
    cy.get('#submit.btn').click()
    cy.get('#error.show').invoke("text").should('equal', 'Your username is invalid!')
  })
  it('Test Case 5', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('incorrectPassword')
    cy.get('#submit.btn').click()
    cy.get('#error.show').invoke("text").should('equal', 'Your password is invalid!')
  })
})