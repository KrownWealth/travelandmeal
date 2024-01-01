import { useEffect } from 'react';
import { useUser } from '@/contexts/AuthContext';
import Modal from '@/components/authentication/AuthModal';

const ProtectedPage = ({ showModal, setShowModal, setShowSuccessModal, children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      // if user is not signed in, show modal popup for user to sign in
      setShowModal(true);
    }
  }, [user, setShowModal]);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} onSuccess={() => setShowSuccessModal(true)} />
      )}
      {user && children}
    </>
  );
};

export default ProtectedPage;
