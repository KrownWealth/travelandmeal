describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('mount and should display HeroBanner', () => {
    cy.get('[data-testid=hero-banner]').should('exist');
  });

  it('mount and should display HowItWorks section', () => {
    cy.get('[data-testid=how-it-works]').should('exist');
  });

  it('mount and should display VillageMarket section', () => {
    cy.get('[data-testid=village-market]').should('exist');
  });

  it('mount and should display ExploreMarket section', () => {
    cy.get('[data-testid=explore-market]').should('exist');
  });

  it('mount and should display TopRestaurants section', () => {
    cy.get('[data-testid=top-restaurants]').should('exist');
  });

  it('mount and should display Cuisines section', () => {
    cy.get('[data-testid=cuisines]').should('exist');
  });

  // it('should open and close modal when clicking HeroBanner', () => {
  //   cy.get('[data-testid=hero-banner]').click();
  //   cy.get('[data-testid=modal-overlay]').should('be.visible');
    
  //   // Add additional checks or interactions within the modal if needed
    
  //   cy.get('[data-testid=modal-close-button]').click();
  //   cy.get('[data-testid=modal-overlay]').should('not.be.visible');
  // });
});
