import { render, screen, fireEvent } from '@testing-library/react';
import SocialSignIn from '@/components/authentication/SocialLogin';
import useAuth from '@/hooks/useAuth';
import { FcGoogle } from "react-icons/fc"; // Add missing import

jest.mock('next/link', () => ({ children }) => children);

jest.mock('../src/hooks/useAuth', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({ handleGoogleSignIn: jest.fn() }),
}));

describe("SocialSignIn Component", () => {
  it("renders the sign-in with Google button and calls handleGoogleSignIn", () => {
    render(<SocialSignIn />);

    expect(screen.getByRole('button', { name: 'Sign up using Google' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Sign up using Google' }));
    expect(useAuth().handleGoogleSignIn).toHaveBeenCalledTimes(1);
  });
});
