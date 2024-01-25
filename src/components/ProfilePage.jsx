import React, { useEffect } from 'react';
import { useUser } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const { user, fetchUser, logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goBackHome = () => {
    router.push('/');
  };

  return (
    <div className="my-3 py-40 px-16">
      <h6>UID: {user ? user.$id : ''} </h6>
      <h6>Name: {user ? user.name : ''} </h6>
      <h6>Email: {user ? user.email : ''} </h6>
      <h6>
        Email Verified:{' '}
        {user ? (user.emailVerification ? 'Verified' : 'Not-Verified') : ''}
      </h6>
      <h6>
        Registered on:{' '}
        {user ? new Date(user.registration * 1000).toDateString() : ''}{' '}
      </h6>
      <div className="flex mt-8 gap-4">
        <button onClick={goBackHome}> Home</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
