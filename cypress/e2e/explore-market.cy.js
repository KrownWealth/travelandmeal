
describe('ExploreMarket Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render ExploreMarket component without errors', () => {
    cy.get('[data-testid=explore-market]').should('exist');
  });

  it('should display carousel images', () => {
    cy.get('.carousel-root .carousel-slider .slide img').should('exist').and('be.visible');
  });

  it('should display text content', () => {
    cy.get('.text-white').should('exist').and('be.visible');
  });

  it('should have a button with a link', () => {
    cy.get('button').should('exist').and('be.visible');
    cy.get('[data-testid=explore-link]').should('exist');
  });

  
});

