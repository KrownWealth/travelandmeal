import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderDetails from '@/components/carts/OrderDetails';

// Mock the CartContext provider
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

describe('OrderDetails Component', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      useCart: jest.fn(),
    }));

    jest.requireMock('../src/contexts/CartContext').useCart.mockReturnValue({
      cartItems: mockCartItems,
      setCartItems: jest.fn(),
    });
  });

  it('renders quantity, total, and related text correctly', () => {
    render(<OrderDetails />);
    
    mockCartItems.forEach((item, index) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      //expect(screen.getByText(`Qty: ${item.quantity}`)).toBeInTheDocument();
      expect(screen.getByText(`Total: ${item.total}`)).toBeInTheDocument();
    });
    
    const expectedTotalPrice = mockCartItems.reduce((total, item) => total + item.total, 0);
    expect(screen.getByText(`Total Items: #${expectedTotalPrice.toFixed(2)}`)).toBeInTheDocument();
  });
});
