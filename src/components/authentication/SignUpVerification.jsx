
import { useEffect } from 'react';
import { account } from '../../../utils/appwrite';
import { useRouter } from 'next/navigation';

const SignUpVerificationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { email, secret } = router.query;

    if (email && secret) {
      account
        .updateVerification(email, secret)
        .then(() => {
          console.log('Email verification successful');
          // Redirect to a success page or perform any other action
          router.push('/verification-success');
        })
        .catch((error) => {
          console.error('Email verification failed', error);
          // Redirect to a failure page or perform any other action
          router.push('/verification-failure');
        });
    }
  }, [router.query]);

  return (
    <div>
      <p>Verifying email...</p>
      
    </div>
  );
};

export default SignUpVerificationPage;
