import React from 'react';
import { render, screen } from '@testing-library/react';
import SignInForm from '@/components/authentication/SignInForm';
import useAuth from '@/hooks/useAuth';


jest.mock('../src/hooks/useAuth', () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock('../src/contexts/CartContext', () => ({
    __esModule: true,
    default: jest.fn(() => ({
      cartItems: [],  
      setCartItems: jest.fn(),
    })),
  }));

  jest.mock('@/components/authentication/SocialLogin', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="social-sign-in">SocialSignInMock</div>),
  }));


describe('SignUpForm', () => {
  const mockUseAuth = useAuth.mockImplementation(() => ({
    userDetails: { username: '', email: '', password: '', checkbox: false },
    handleChange: jest.fn(),
    errors: {},
    showSuccessModal: true,
    setShowSuccessModal: jest.fn(),
    showPassword: false,
    handleSignUpSubmit: jest.fn(),
    togglePasswordVisibility: jest.fn(),
    loading: false,
  }));

  beforeEach(() => {
    mockUseAuth.mockClear();
  });


  test('renders Email and password correctly', () => {
    render(<SignInForm />);
   expect(screen.getByText('Email')).toBeInTheDocument();
   expect(screen.getByText('Password')).toBeInTheDocument();
   expect(screen.getByText('Sign In')).toBeInTheDocument();
   expect(screen.getByTestId('social-sign-in')).toBeInTheDocument();
  });

});
