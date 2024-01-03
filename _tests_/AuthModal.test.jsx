import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '@/components/authentication/AuthModal';
import { AuthProvider } from '@/contexts/AuthContext';
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

describe('Modal Component', () => {
    test('renders modal with AuthProvider', () => {
        render(
          <AuthProvider>
            <Modal show={true} onClose={jest.fn()} onSuccess={jest.fn()} />
          </AuthProvider>
        );
      
       
      });
  test('renders modal with correct title', () => {
    const onCloseMock = jest.fn();
    const onSuccessMock = jest.fn();

    render(<Modal show={true} onClose={onCloseMock} onSuccess={onSuccessMock} />);

    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
    expect(screen.getByTestId('modal-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Login/SignUp')).toBeInTheDocument();
    
  });
});
