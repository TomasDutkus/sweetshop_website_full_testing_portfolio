describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
    // Verify navigation links
    cy.get('nav').contains('Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');

    cy.get('nav').contains('Sweets').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');

    cy.get('nav').contains('About').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/about');

    cy.get('nav').contains('Login').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/login');

    cy.get('nav').contains('Basket').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/basket');
  });

  it('Test Case 2: Hero Section', () => {
    cy.get('.advertising img')
      .should('be.visible')
      .and('have.attr', 'alt', 'Sale now on');
    cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    cy.get('p.lead').should(
      'contain.text',
      'The sweetest online shop out there.'
    );
    cy.get('a.btn-primary')
      .should('be.visible')
      .and('have.attr', 'href', '/sweets')
      .and('contain.text', 'Browse Sweets')
      .click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
  });

  it('Test Case 3: Product Cards', () => {
    cy.get('.cards').should('have.length', 4);
    cy.get('.cards').each(($card) => {
      cy.wrap($card).find('img.card-img-top').should('be.visible');
      cy.wrap($card).find('h4.card-title').should('be.visible');
      cy.wrap($card).find('p.card-text').should('be.visible');
      cy.wrap($card).find('p small.text-muted').should('be.visible');
      cy.wrap($card)
        .find('a.btn-success')
        .should('be.visible')
        .and('contain.text', 'Add to Basket');
    });
  });

  it('Test Case 4: Add to Basket Button', () => {
    cy.get('.cards').first().find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '1');
    cy.get('.cards').eq(1).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '2');
    cy.get('.cards').eq(2).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '3');
    cy.get('.cards').eq(3).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '4');
  });

  it('Test Case 5: Footer', () => {
    cy.verifyFooter();
  });
});
