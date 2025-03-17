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

Cypress.Commands.add('verifyNavigationPanel', () => {
  cy.get('nav').should('be.visible');
  cy.get('nav').contains('Sweet Shop').should('be.visible');
  cy.get('nav').contains('Sweets').should('be.visible');
  cy.get('nav').contains('About').should('be.visible');
  cy.get('nav').contains('Login').should('be.visible');
  cy.get('nav').contains('Basket').should('be.visible');
});

Cypress.Commands.add('verifyFooter', () => {
  cy.get('footer').should('be.visible');
  cy.get('footer p').should('contain.text', 'Sweet Shop Project 2018');
});
