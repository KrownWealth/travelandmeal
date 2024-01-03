import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Payment from '@/components/carts/Payment';

describe('Payment Component', () => {
  const mockTotal = 50.00; 

  it('renders Payment correctly', () => {
    render(<Payment total={mockTotal} />);

    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Card Number:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV:/i)).toBeInTheDocument();
    expect(screen.getByText(`Total: #${mockTotal.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pay Now/i })).toBeInTheDocument();
  });
   
});
