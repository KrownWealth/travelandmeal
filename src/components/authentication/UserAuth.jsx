import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const UserAuth = ({ onSuccess, showSuccessModal, setShowSuccessModal }) => {
  const [activeForm, setActiveForm] = useState("signin")

  const toggleForm = (formType) => {
    setActiveForm(formType);
  };


  return (
    <>
      <div  className="flex flex-col-2 py-16 justify-center items-center">
        <button
        arial-label="switch-to-signin"
          onClick={() => toggleForm("signin")}
          className={`w-[120px] pr-8 ${
            activeForm === "signin"
              ? "bg-[#003049] text-white"
              : "bg-gray-100 text-black hover:bg-[#003049] hover:text-white"
          }`}
        >
          Sign In
        </button>
        <button
        arial-label="switch-to-signup"
          onClick={() => toggleForm("signup")}
          className={`relative right-8 w-[120px] ${
            activeForm === "signup"
              ? "bg-[#003049] text-white"
              : "bg-gray-100 text-black hover:bg-[#003049] hover:text-white"
          }`}
        >
          Sign Up
        </button>
      </div>
      {activeForm === "signin" && <SignInForm  onSuccess={onSuccess} />}
      {activeForm === "signup" && <SignUpForm onSuccess={() => setShowSuccessModal(true)} />}
      
    </>
  );
};

export default UserAuth;