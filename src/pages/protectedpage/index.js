import React, { useEffect } from 'react';
import Modal from '@/components/authentication/AuthModal';
import { useUser } from '@/contexts/AuthContext';
import LoadingModal from '@/components/LoadingModal';

const ProtectedPage = () => {
  const { user, loading } = useUser();
  const [showModal, setShowModal] = React.useState(false);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  useEffect(() => {}, [loading]);

  if (loading) {
    return <LoadingModal />;
  }

  if (!user) {
    return (
      <div className="flex flex-col py-40 ">
        <h3 className="text-center justify-center">
          Please log in to access the cart.
        </h3>
        <button onClick={openLoginModal} className="mx-auto">
          Login
        </button>
        {showModal && <Modal onClose={closeLoginModal} />}
      </div>
    );
  }

  return null;
  // <ProtectedRoute>
  // </ProtectedRoute>
};

export default ProtectedPage;
