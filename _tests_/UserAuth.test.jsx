import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAuth from '@/components/authentication/UserAuth';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));
jest.mock('../src/hooks/useAuth', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    user: null,
    userDetails: {
      email: 'test@example.com',
      password: 'password123',
      username: 'testuser',
      checkbox: true,
    },
    handleChange: jest.fn(),
    errors: {},
    loginError: '',
    showSuccessModal: false,
    setShowSuccessModal: jest.fn(),
    showPassword: false,
    loading: false,
    handleSignUpSubmit: jest.fn(),
    handleLoginSubmit: jest.fn(),
    togglePasswordVisibility: jest.fn(),
    handleGoogleSignIn: jest.fn(),
  })),
}));

describe('UserAuth Component', () => {
  test('renders SignUpForm when activeForm is "signup"', () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    render(<UserAuth />);

    const signUpButtons = screen.getAllByRole('button', { name: /Sign Up/i });
    
    expect(signUpButtons.length).toBeGreaterThan(0);
  });

  test('renders SignInForm when activeForm is "signin"', () => {
    render(<UserAuth />);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getAllByText(/Sign Up/i)).toHaveLength(3);
  });
});
