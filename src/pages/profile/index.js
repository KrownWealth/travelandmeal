import React from 'react';
import ProfilePage from '@/components/ProfilePage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useUser } from '@/contexts/AuthContext';

const MyProfilePage = () => {
  const { loading } = useUser();

  return (
    <ProtectedRoute>
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>ProfilePage</h1>
            <ProfilePage />
          </>
        )}
      </>
    </ProtectedRoute>
  );
};

export default MyProfilePage;
