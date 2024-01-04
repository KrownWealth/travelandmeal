describe('OrderDetails Component', () => {
  beforeEach(() => {
    cy.visit('/cart');
  });

  it('should check if the order detail component mounts and renders', () => {
    cy.get('[data-testid=order-detail]').should('exist');
  });

  it('should update cart items and calculate total correctly', () => {
    cy.get('[data-testid=cart-item]').then(($cartItems) => {
      if ($cartItems.length > 0) {
        // Assuming there is at least one item in the cart
        cy.get('[data-testid=quantity-increase-0]').click();
        cy.get('[data-testid=quantity-decrease-0]').click();

        cy.get('[data-testid=total-cart-price]').invoke('text').as('totalPrice');

        cy.get('@totalPrice').then((totalPrice) => {
          const expectedTotal = calculateExpectedTotal();
          expect(totalPrice.trim()).to.equal(`Total Items: ${expectedTotal.toFixed(2)}`);
        });
      } else {
        cy.get('[data-testid=empty-cart-message]').should('exist');
      }
    });
  });

  // Helper function to calculate the expected total based on cart items
  const calculateExpectedTotal = () => {
    // Implement your own logic to fetch or set cartItems
    // Assuming there's a global variable `cartItems` available
    const cartItems = [
      // Example cart items; replace this with your actual cart items
      { total: 10.0 },
      { total: 20.0 },
    ];

    return cartItems.reduce((total, item) => total + item.total, 0);
  };
});
