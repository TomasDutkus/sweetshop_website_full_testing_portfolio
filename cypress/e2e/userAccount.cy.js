describe('User Account Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('.card').first().find('a.btn-success').click();
    cy.get('.card').eq(1).find('a.btn-success').click();
    cy.visit('https://sweetshop.netlify.app/login');
    cy.get('input#exampleInputEmail').type('test@user.com');
    cy.get('input#exampleInputPassword').type('qwerty');
    cy.get('button[type="submit"]').click();
    cy.get('h1').should('contain.text', 'Your Account');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
  });

  it('Test Case 2: User Greeting', () => {
    cy.get('header .lead a')
      .should('be.visible')
      .and('contain.text', 'test@user.com');
  });

  it('Test Case 3: Previous Orders', () => {
    cy.get('h4.mb-3').contains('Previous Orders').should('be.visible');
    cy.get('#transactions').should('be.visible');
    cy.get('#transactions thead th').should('have.length', 4);
    cy.get('#transactions tbody tr').should('have.length.at.least', 1);
    cy.get('#transactions tbody tr').each(($row) => {
      cy.wrap($row).find('th').should('be.visible');
      cy.wrap($row).find('td').should('have.length', 3);
    });
  });

  it('Test Case 4: Basket Summary', () => {
    cy.get('h4.d-flex').contains('Your Basket').should('be.visible');
    cy.get('#basketItems').should('be.visible');
    cy.get('#basketItems a.small').should('have.length', 2);
    cy.get('#basketItems a.small').first().click();
    cy.get('#basketItems a.small').should('have.length', 1);
  });

  it('Test Case 5: Footer', () => {
    cy.verifyFooter();
  });
});
