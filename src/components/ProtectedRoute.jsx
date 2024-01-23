import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/AuthContext';
import Modal from '@/components/authentication/AuthModal';
import LoadingModal from '@/components/LoadingModal';
import { useRouter } from 'next/router';
import { account } from '../../utils/appwrite';

const ProtectedRoute = ({ children }) => {
  const { loading } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = account.get();

    user.then(
      (res) => {
        setUserInfo(res);
        console.log(res);
      },
      () => {
        setShowModal(true);
      }
    );
  }, [router]);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : userInfo ? (
        // User is logged in
        <>{children}</>
      ) : (
        // User is not logged in
        <div className="py-40">
          <div className="text-center">Please log in to access the page.</div>
          <button
            onClick={openLoginModal}
            className="flex mx-auto justify-center items-center"
            style={{ marginTop: '4rem' }}
          >
            Login
          </button>

          {showModal && <Modal onClose={closeLoginModal} />}
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
