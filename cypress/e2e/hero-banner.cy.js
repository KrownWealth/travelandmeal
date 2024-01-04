
describe('HeroBanner Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render HeroBanner component without errors', () => {
    cy.get('[data-testid=hero-banner]').should('exist');
  });

  it('should open and close modal on Sign In and Sign Up button click', () => {
    cy.get('[aria-label="Sign-In"]').click();
    cy.get('[data-testid=modal]').should('be.visible');

    cy.get('[aria-label="Sign-Up"]').click();
    cy.get('[data-testid=modal]').should('be.visible');
  });

  it('should navigate on logo or navigation link click', () => {
    cy.get('[data-testid=hero-top-logo]').click();
    cy.url().should('include', '/');
  });

  it('should navigate to the cart page on cart icon click', () => {
    cy.get('[aria-label="View-Cart"]').click();
    cy.url().should('include', '/cart');
  });

  it('should display the correct number of cart items', () => {
    cy.get('[data-testid=cart-item-count]').should('have.text', '0'); 
  });

});
