
import useAuth from "../../hooks/useAuth"
import { AiOutlineMail } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import SocialSignIn from "./SocialLogin"


const SignInForm = () => {
  const {
    userDetails,
    handleChange,
    errors,
    loginError,
    showPassword,
    handleLoginSubmit,
    togglePasswordVisibility,
  } = useAuth();
  
 
  return (
    <form onSubmit={handleLoginSubmit} className="w-[100%]">
      <SocialSignIn />
      <div className="flex flex-row pb-4 w-[100%] pt-4 justify-center items-center mx-auto">
        <hr className="w-[37.5%] border-t border-custom-color" />
        <p className="w-[25%] text-center">or signin with email</p>
        <hr className="w-[37.5%] border-t border-custom-color" />
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
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </div>
      <button type="submit" className="w-[100%] bg-[#d62828]">
      Sign In
      </button>
    </form>
  );
};
export default SignInForm;