/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

it('failed cycle test with wrong password, message feedback failed ', () => {
  cy.visit('');
  cy.get('#checkBox').click();
  cy.get('#btn-next').click();
  cy.get('#password').type('pruebaKO123');
  cy.get('#confirmPassword').type('pruebaKO123');
  cy.get('#btn-next').click();
  cy.wait(3003);
  cy.get('#img-failed').should('have.class', 'fail-img');
});
