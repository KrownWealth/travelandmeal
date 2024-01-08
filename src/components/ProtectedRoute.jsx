import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/AuthContext';
import Modal from "@/components/authentication/AuthModal";
import LoadingModal from "@/components/LoadingModal";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      // If user is not logged in, show the message and login button
      setShowModal(true);
    }
  }, [user, loading]);

  return (
    <>
      {loading && <LoadingModal />}
      
      {!loading && !user && (
        <div className='py-40'>
          <div>Please log in to access the cart.</div>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
      )}

      {!loading && user && children}
    </>
  );
};

export default ProtectedRoute;