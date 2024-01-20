import { useUser } from '@/contexts/AuthContext';
import { account } from '../../../utils/appwrite';
import { FcGoogle } from 'react-icons/fc';

const SocialSignIn = () => {
  const { fetchUser } = useUser;

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await account.createOAuth2Session(
        'google',
        'https://main.dwzln7wpioog6.amplifyapp.com/profile',
        'https://main.dwzln7wpioog6.amplifyapp.com/'
      );

      if (!response) {
        throw new Error('Empty response received from Google sign-in');
      }

      console.log(response);
      // Call fetchUser only if the sign-in is successful
      await fetchUser();
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      // setLoginError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div data-testid="social-sign-in">
      <button
        type="submit"
        className="w-[100%] relative bg-[#d62828]"
        aria-label="Sign up using Google"
        role="button"
        onClick={handleGoogleSignIn}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleGoogleSignIn();
          }
        }}
      >
        <div className="absolute pl-[1rem] lg:pl-[5rem] pt-[0.4rem]">
          <FcGoogle />
        </div>
        <span className="pl-10">Sign up using Google</span>
      </button>
    </div>
  );
};

export default SocialSignIn;
