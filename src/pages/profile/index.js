import React, { useEffect } from "react";
import Modal from "@/components/authentication/AuthModal";
import ProfilePage from "@/components/ProfilePage";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUser } from "@/contexts/AuthContext";
import LoadingModal from "@/components/LoadingModal";

const MyProfilePage = () => {
  const { user, loading } = useUser();
  const [showModal, setShowModal] = React.useState(false);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
  }, [loading]);

  if (loading) {
    // If still loading, show a loading modal
    return <LoadingModal />;
  }

  if (!user) {
    
    return (
      <div className="flex flex-col py-40 ">
        <h3 className="text-center justify-center">Please log in to access this page.</h3>
        <button onClick={openLoginModal} className="mx-auto">Login</button>
        {showModal && <Modal onClose={closeLoginModal} />}
      </div>
    );
  }

  return (
    <ProtectedRoute>
                <h1>ProfilePage</h1>
            <ProfilePage />
    </ProtectedRoute>
  );
};

export default MyProfilePage;