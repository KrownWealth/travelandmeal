import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
// import MailIcon from '@/components/MailIcon';
// import LockIcon from '@/components/LockIcon';
import useAuth from "../../hooks/useAuth"



const SignInForm = () => {
  const {
    userDetails,
    handleChange,
    handleLoginSubmit,
    errors,
    showPassword,
    togglePasswordVisibility,
  } = useAuth();
 
  return (
    <form className="w-[100%]">
      <button type="submit" className=" w-[100%] bg-[#003049]">
        <div className="absolute pl-[1rem] lg:pl-[10rem] pt-[0.4rem]">
          <FcGoogle />
        </div>
        <span>Sign in using Google</span>
      </button>
      <div className="flex flex-row pb-4 w-[100%] pt-4 justify-center items-center mx-auto">
        <hr className="w-[37.5%] border-t border-custom-color" />
        <p className="w-[25%] text-center">or signin with email</p>
        <hr className="w-[37.5%] border-t border-custom-color" />
      </div>
      <div className="pb-4 w-[100%]">
        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handleChange}
            autoComplete="false"
            className="h-8 rounded bg-gray-100"
            // endContent={
            //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
          />
           {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className="pb-4 w-[100%]">
        <div className="flex flex-col space-y-2">
          <label>Password</label>
          <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={userDetails.password}
          onChange={handleChange}
          autoComplete="off"
          className="h-8 rounded bg-gray-100"
        />
           {errors.password && <p className="text-red-500">{errors.password}</p>}
           <div className="flex">
          <input
              type="checkbox"
              id="showPasswordCheckbox"
              onChange={togglePasswordVisibility}
              checked={showPassword}
              className="mr-2 mt-1 cursor-pointer"
            />
            <label htmlFor="showPasswordCheckbox" className="text-blue-500 cursor-pointer">
              {showPassword ? "Hide Password" : "Show Password"}
            </label>
          </div>
        </div>
      </div>

      <button onClick={handleLoginSubmit} className="w-[100%] bg-[#d62828]">
      Sign In
      </button>
    </form>
  );
};
export default SignInForm;