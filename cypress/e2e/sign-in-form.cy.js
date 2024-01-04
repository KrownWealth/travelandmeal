// cypress/integration/signin.spec.js

describe('Sign In Form', () => {
  beforeEach(() => {
    
    cy.visit('/'); 
    // Open the modal
    cy.get('[aria-label=Sign-In]').click(); 
  });

  it('should submit Sign In form successfully', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('testpassword');

    // cy.get('[data-testid=loggedInUser]').should('exist');
  });

  it('should display an error for invalid credentials', () => {
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('invalidpassword');
  });

  it('should toggle password visibility', () => {
    // cy.get('[aria-label=showPasswordCheckbox]').check();
    // cy.get('input[name="password"]').should('have.attr', 'type', 'text');
    // cy.get('[aria-label=showPasswordCheckbox]').uncheck();
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
  });
});
