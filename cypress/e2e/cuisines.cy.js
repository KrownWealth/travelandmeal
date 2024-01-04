

describe('Cuisines Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render Cuisines component without errors', () => {
    cy.get('[data-testid=cuisines]').should('exist');
  });

  it('should display the slider with food items', () => {
    cy.get('.slick-slider').should('exist').and('be.visible');
  });

  
});
