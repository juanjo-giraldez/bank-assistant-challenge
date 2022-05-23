/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

it('successful cycle test with correct password, message feedback success ', () => {
  cy.visit('');
  cy.get('#checkBox').click();
  cy.get('#btn-next').click();
  cy.get('#password').type('asdf1234AQ');
  cy.get('#confirmPassword').type('asdf1234AQ');
  cy.get('#btn-next').click();
  cy.wait(3003);
  cy.get('#img-success').should('have.class', 'success-img');
});
