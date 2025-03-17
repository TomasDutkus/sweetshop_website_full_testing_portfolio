describe('Sweets Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.url().should('eq', 'https://sweetshop.netlify.app/sweets');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
  });

  it('Test Case 2: Product Cards', () => {
    cy.get('.card').should('have.length', 16);
    cy.get('.card').each(($card) => {
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

  it('Test Case 3: Add to Basket Button', () => {
    cy.get('.card').first().find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '1');
    cy.get('.card').eq(1).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '2');
    cy.get('.card').eq(2).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '3');
    cy.get('.card').eq(3).find('a.btn-success').click();
    cy.get('.badge-success').should('contain.text', '4');
  });

  it('Test Case 4: Footer', () => {
    cy.verifyFooter();
  });
});
