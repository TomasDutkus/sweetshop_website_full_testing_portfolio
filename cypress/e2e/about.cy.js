describe('About Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/about');
    cy.url().should('eq', 'https://sweetshop.netlify.app/about');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
  });

  it('Test Case 2: Page Content', () => {
    cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    cy.get('p.lead').should(
      'contain.text',
      'An intentionally broken web application to help demonstrate Chrome DevTools.'
    );
    cy.get('p.lead').should(
      'contain.text',
      'Sweet Shop is a project created to help demonstrate some of the great features of the Chrome DevTools which may be of use to people who help test web applications.'
    );
    cy.get('p.lead').should(
      'contain.text',
      'Sweet Shop encompasses common issues found in real-world web applications!'
    );
  });

  it('Test Case 3: Footer', () => {
    cy.verifyFooter();
  });
});
