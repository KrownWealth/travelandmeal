
describe('TopRestaurants Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render TopRestaurants component without errors', () => {
    cy.get('[data-testid=top-restaurants]').should('exist');
  });

  it('should display at least one restaurant card', () => {
    cy.get('.max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white').should('exist').and('be.visible');
  });

  it('should navigate to a restaurant page when a card is clicked', () => {
    // Mock the response dynamically with a known restaurant ID
    // const knownRestaurantId = 123;
    // cy.intercept('/api/restaurants/*', (req) => {
    //   req.reply((res) => {
    //     res.send({
    //       id: knownRestaurantId,
    //       
    //     });
    //   });
    // }).as('getRestaurant');


    cy.get('.max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white').first().click();

  //   // Wait for the stubbed response
  //   cy.wait('@getRestaurant');

  //   // Assert that the URL includes '/restaurants/{knownId}'
  //   cy.url().should('include', `/restaurants/${knownRestaurantId}`);
  // });

  it('should load more restaurants when "Load More Fast-food" button is clicked', () => {
    cy.contains('Load More Fast-food').click();

    // Assert that more restaurant cards are visible
    cy.get('.max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white').should('have.length.greaterThan', 3); 
   
  });
});

});