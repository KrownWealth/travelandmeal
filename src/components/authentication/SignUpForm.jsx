
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth"


const SignUpForm = ({ onSuccess }) => {
  const {
    userDetails,
    handleChange,
    handleSignUpSubmit,
    errors } = useAuth();

  return (
    <form onSubmit={handleSignUpSubmit}>
      <div className="pb-4 w-[100%]">
        <div className="flex flex-col space-y-2">
          <label>Full Name</label>
          <input
            id="name"
            type="name"
            name="name"
            value={ userDetails.name}
            onChange={handleChange}
            className="h-8 rounded bg-gray-100"
            autoComplete="false"
            // endContent={
            //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div> 
      </div>
      <div className="pb-4 w-[100%]">
        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={ userDetails.email}
            onChange={handleChange}
            className="h-8 rounded bg-gray-100"
            autoComplete="false"
            // endContent={
            //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div> 
      </div>
     
      <div className="md:grid grid-cols-2 gap-10 pb-4 w-[100%]">
        <div className="flex flex-col space-y-2">
          <label>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="phone"
            value={ userDetails.phone}
            onChange={handleChange}
            autoComplete="false"
            className="h-8 rounded bg-gray-100"
            // endContent={
            //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
          />
           {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
       
        <div className="flex flex-col space-y-2">
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={ userDetails.password}
            onChange={handleChange}
            autoComplete="false"
            className="h-8 rounded bg-gray-100"
            // endContent={
            //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            // }
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
      </div>
     
      <div className="flex flex-row pb-4 w-[100%]">
        <input
          id="checkbox"
          name="checkbox"
          type="checkbox"
          value={userDetails.checkbox}
          className="h-10 rounded pt-[-4rem]"
        />
        <label htmlFor="" className="pl-4">
          I Agree To The Terms And Conditions And Privacy Policy{" "}
        </label>
      </div>
      <button onClick={onSuccess} type="submit" className="w-[100%] bg-[#d62828]">
        Sign Up
      </button>
      <div className="flex flex-row w-[100%] justify-center items-center mx-auto">
        <hr className="w-[37.5%] border-t border-custom-color" />
        <p className="w-[25%] text-center">or</p>
        <hr className="w-[37.5%] border-t border-custom-color" />
      </div>

      <button className=" w-[100%] bg-[#003049]">
        <div className="absolute pl-[1rem] lg:pl-[5rem] pt-[0.4rem]">
          <FcGoogle />
        </div>
        <span>Sign up using Google</span>
      </button>
    </form>
  );
  };

  export default SignUpForm;