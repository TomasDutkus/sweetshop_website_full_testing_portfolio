describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.url().should('eq', 'https://sweetshop.netlify.app/login');
  });

  it('Test Case 1: Navigation Bar', () => {
    cy.verifyNavigationPanel();
  });

  it('Test Case 2: Login Form', () => {
    cy.get('form.needs-validation').should('be.visible');
    cy.get('input#exampleInputEmail').should('be.visible');
    cy.get('input#exampleInputPassword').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Test Case 3: Email Validation', () => {
    cy.get('input#exampleInputEmail').type('invalid-email');
    cy.get('button[type="submit"]').click();
    cy.get('.invalid-email')
      .should('be.visible')
      .and('contain.text', 'Please enter a valid email address');
  });

  it('Test Case 4: Password Validation', () => {
    cy.get('input#exampleInputPassword');
    cy.get('button[type="submit"]').click();
    cy.get('.invalid-password')
      .should('be.visible')
      .and('contain.text', 'Please enter a valid password');
  });

  it('Test Case 5: Form Submission', () => {
    cy.get('input#exampleInputEmail').type('test@user.com');
    cy.get('input#exampleInputPassword').type('qwerty');
    cy.get('button[type="submit"]').click();
    cy.get('h1').should('contain.text', 'Your Account');
  });

  it('Test Case 6: Footer', () => {
    cy.verifyFooter();
  });
});
