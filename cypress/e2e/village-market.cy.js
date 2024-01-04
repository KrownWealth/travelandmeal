
describe('Village Market Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the headings, subheadings, and text', () => {
    cy.get('[data-testid=village-market-heading]').should('exist');
    cy.get('[data-testid=village-market-subheading]').should('exist');
    cy.get('[data-testid=village-market-text]').should('exist');
  });

  it('should routes each sections', () => {
    cy.get('[aria-label="fastfoods"]').click();
    cy.url().should('include', '/restaurants');
  });

});
