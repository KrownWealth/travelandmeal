describe('Payment Component', () => {
  beforeEach(() => {
   
    cy.visit('/cart');
  });


  it('should render Checkout heading', () => {
    cy.get('[data-testid=checkout]').should('exist');
  });

  it('should submit payment form successfully', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="cardNumber"]').type('1234567890123456');
    cy.get('input[name="expiryDate"]').type('12/23');
    cy.get('input[name="cvv"]').type('123');

    // Submit the form
    cy.get('form').submit();

  });
});
