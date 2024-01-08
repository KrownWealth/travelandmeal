import React, { useEffect } from 'react';
import { useUser } from '@/contexts/AuthContext';

const ProfilePage = () => {
  const { user, fetchUser } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser(); 
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-3 py-40 px-16">
      <h6>UID: {user ? user.$id : ''} </h6>
      <h6>Name: {user ? user.name : ''} </h6>
      <h6>Email: {user ? user.email : ''} </h6>
      <h6>Email Verified: {user ? (user.emailVerification ? 'Verified' : 'Not-Verified') : ''}</h6>
      <h6>Registered on: {user ? new Date(user.registration * 1000).toDateString() : ''} </h6>
    </div>
  );
};

export default ProfilePage;
