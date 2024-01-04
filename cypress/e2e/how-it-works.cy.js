
describe('HeroBanner Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render How It Works component without errors', () => {
    cy.get('[data-testid=how-it-works]').should('exist');
  });

  it('should render village market text', () => {
    cy.get('[data-testid=how-it-works]').should('exist');
  });

 

 

});
