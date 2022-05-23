/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="Cypress" />

it('info view , next button deactivated, if not checkbox ', () => {
  cy.visit('');
  cy.get('#btn-next').should('be.disabled');
});

it('info view , next button deactivated, if not checkbox ', () => {
  cy.visit('');
  cy.get('#checkBox').click();
  cy.get('#btn-next').should('not.be.disabled');
  cy.get('#btn-next').click();
});
