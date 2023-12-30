import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import SuccessModal from "./SuccessModal";
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import LoadingModal from "../LoadingModal";
import { FaRegUser } from "react-icons/fa";

const SignUpForm = () => {
  const {
    userDetails,
    handleChange,
    errors,
    showSuccessModal,
    setShowSuccessModal,
    showPassword,
    handleSignUpSubmit,
    togglePasswordVisibility,
    loading,
  } = useAuth();

  return (
    <>
      <form onSubmit={handleSignUpSubmit}>
      {loading && <LoadingModal />} 
      
        <div className="pb-4 w-[100%] relative">
          <div className="flex flex-col space-y-2">
            <label>Full Name</label>
            <div className="relative">
              <input
                id="name"
                type="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="input-field h-8 pl-10 rounded bg-gray-100"
                autoComplete="false"
              />
              <FaRegUser className="icon" />
            </div>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
        </div>
        <div className="pb-4 w-[100%] relative">
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="input-field h-8 pl-10 rounded bg-gray-100"
                autoComplete="false"
              />
              <AiOutlineMail className="icon" />
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="md:grid grid-cols gap-10 pb-4 w-[100%]">
          <div className="flex flex-col space-y-2">
            <label>Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={userDetails.password}
                onChange={handleChange}
                autoComplete="false"
                className="input-field h-8 pl-10 rounded bg-gray-100"
              />
              <IoLockClosedOutline className="icon " />
            </div>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            <div className="flex">
              <input
                type="checkbox"
                id="showPasswordCheckbox"
                onChange={togglePasswordVisibility}
                checked={showPassword}
                autoComplete="false"
                className="mr-2 mt-1 cursor-pointer"
              />
              <label htmlFor="showPasswordCheckbox" className="text-blue-500 cursor-pointer">
                {showPassword ? "Hide Password" : "Show Password"}
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row pb-4 w-[100%]">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            checked={userDetails.checkbox}
            onChange={handleChange}
            className="h-10 rounded pt-[-4rem]"
          />
          <label htmlFor="checkbox" className="pl-4">
            I Agree To The Terms And Conditions And Privacy Policy
          </label>
        </div>
        <button type="submit" disabled={loading} className="w-[100%] bg-[#d62828]">
          Sign Up
        </button>
        <div className="flex flex-row w-[100%] justify-center items-center mx-auto">
          <hr className="w-[37.5%] border-t border-custom-color" />
          <p className="w-[25%] text-center">or</p>
          <hr className="w-[37.5%] border-t border-custom-color" />
        </div>

        <button type="submit" className="w-[100%] bg-[#003049] relative">
          <div className="absolute pl-[1rem] lg:pl-[5rem] pt-[0.4rem]">
            <FcGoogle />
          </div>
          <span className="pl-10">Sign up using Google</span>
        </button>
      </form>

      <SuccessModal showSuccessModal={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
};

export default SignUpForm;
