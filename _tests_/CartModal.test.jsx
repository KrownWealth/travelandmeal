import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { QuantityModal } from '@/components/carts/CartModal';

jest.mock('../src/contexts/CartContext', () => ({
  __esModule: true,
  useCart: jest.fn(() => ({
    cartItems: [],
    setCartItems: jest.fn(),
  })),
}));

describe('QuantityModal Component', () => {
  const mockProps = {
    openQuantityModal: true,
    closeQuantityModal: jest.fn(),
    quantity: 1,
    handleAdd: jest.fn(),
    handleSubtract: jest.fn(),
    handleAddToCart: jest.fn(),
    selectedMenuItem: {},
    handleTotal: jest.fn(),
    updatePrice: jest.fn(),
  };

  it('renders QuantityModal correctly', () => {
    render(<QuantityModal {...mockProps} />);

    expect(screen.getByText(/initial order cost/i)).toBeInTheDocument();
    expect(screen.getByText(/total:/i)).toBeInTheDocument();
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });

  it('calls closeQuantityModal function when close button is clicked', () => {
    render(<QuantityModal {...mockProps} />);
    fireEvent.click(screen.getByText(/×/));
    expect(mockProps.closeQuantityModal).toHaveBeenCalled();
  });
});
