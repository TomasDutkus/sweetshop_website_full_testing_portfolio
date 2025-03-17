describe('Basket Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
  });

  it('Test Case 2: Basket Content', () => {
    cy.get('h1.display-3').should('contain.text', 'Your Basket');
    cy.get('#basketItems').should('be.visible');
    cy.get('#basketItems a.small').should('have.length', 0);

    // Add item to basket and verify
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('.card').first().find('a.btn-success').click();
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.get('#basketItems a.small').should('have.length', 1);

    // Remove item from basket and verify
    cy.get('#basketItems a.small').click();
    cy.get('#basketItems a.small').should('have.length', 0);
  });

  it('Test Case 3: Checkout Button', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('contain.text', 'Continue to checkout');
    cy.get('button[type="submit"]').eq(1).click();
  });

  it('Test Case 4: Footer', () => {
    cy.verifyFooter();
  });
});
