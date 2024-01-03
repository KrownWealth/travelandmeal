import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignUpForm from '@/components/authentication/SignUpForm';
import SuccessModal from '@/components/authentication/SuccessModal';
import useAuth from '@/hooks/useAuth';
import SocialSignIn from '@/components/authentication/SocialLogin';



// Mocking the useAuth hook
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

  jest.mock('../src/components/authentication/SuccessModal', () => jest.fn(() => null));
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


  test('renders Username, Email and password, input and label correctly', () => {
    render(<SignUpForm />);
    expect(screen.getByText('Full Name')).toBeInTheDocument();
   expect(screen.getByText('Email')).toBeInTheDocument();
   expect(screen.getByText('Password')).toBeInTheDocument();
   expect(screen.getByText('Sign Up')).toBeInTheDocument();
   expect(screen.getByTestId('social-sign-in')).toBeInTheDocument();
  });

 test('renders SuccessModal when showSuccessModal is true', () => {
    render(<SignUpForm />);
    expect(SuccessModal).toHaveBeenCalled();
    expect(SuccessModal.mock.calls.length).toBe(2);
  
   
  });
});
