// describe('User Authentication Modal', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

//   it('should open and close the modal', () => {
//     // Open the modal by clicking on a trigger button, e.g., a login button
//     cy.get('[aria-label=switch-to-signin]').click();
//     cy.get('[data-testid=modal-overlay]').should('be.visible');
//     cy.get('[data-testid=modal-close-button]').click();

//     cy.get('[data-testid=modal-overlay]').should('not.be.visible');
//   });

//   it('should switch between Sign In and Sign Up forms', () => {
//     cy.get('[data-testid=auth-modal]').click();
//     cy.get('[data-testid=sign-in]').should('be.visible');
//     cy.get('[aria-label=switch-to-signup]').click(); // Fix typo here
//     cy.get('[data-testid=sign-up]').should('be.visible');
//   });

//   it('should submit Sign In form successfully', () => {
//     cy.get('input[name="email"]').type('test@example.com');
//     cy.get('input[name="password"]').type('testpassword');
//     cy.get('[aria-label=Submit-Sign-In-Form]').submit();
//   });

//   it('should switch to signup form and onSubmit', () => {
//     cy.get('[aria-label=switch-to-signup]').click();
//     cy.get('input[name="username"]').type('testuser');
//     cy.get('input[name="email"]').type('test@example.com');
//     cy.get('input[name="password"]').type('testpassword');
//     cy.get('input[name="checkbox"]').check();
//     cy.get('[aria-label=Submit-Sign-Up-Form]').submit();
//   });

//   it('should render the success modal after signup', () => {
//     cy.get('[data-testid="modal"]').should('be.visible');
//   });
// });
