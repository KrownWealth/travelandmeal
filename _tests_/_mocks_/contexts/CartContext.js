// src/__mocks__/contexts/CartContext.js
export const useCart = jest.fn().mockReturnValue({
  cartItems: [],
  updateCartItems: jest.fn(),
});
