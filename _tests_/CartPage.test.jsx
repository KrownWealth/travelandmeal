import React from 'react';
import { render, screen } from '@testing-library/react';
import CartPage from '@/components/carts/CartPage';




jest.mock('../src/contexts/CartContext', () => ({
  __esModule: true,
  useCart: jest.fn(),
}));
const mockCartItems = [
    {
      name: 'Item 1',
      price: 10,
      quantity: 2,
      total: 20,
    },
    {
      name: 'Item 2',
      price: 15,
      quantity: 3,
      total: 45,
    },
  ];

describe('CartPage Component', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      useCart: jest.fn(), 
    }));

   
    jest.requireMock('../src/contexts/CartContext').useCart.mockReturnValue({
      cartItems: mockCartItems,
      setCartItems: jest.fn(),
    });
  });

  it('renders CartPage correctly', () => {
    render(
      
        <CartPage />
   
    );

    expect(screen.getByText(/Continue Shopping/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Items: #65.00/i)).toBeInTheDocument();
  });
});
