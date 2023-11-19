import Link from "next/link"
import { FcGoogle } from "react-icons/fc";

import { FaRegTimesCircle } from "react-icons/fa";

const SignUp = () => {
  return(
    <section className="px-8 lg-px-16 py-40 ">
      <form>
      <div className="mx-auto flex flex-col justify-center items-center bg-blue-200 rounded px-4 pt-8 pb-16 w-[100%] lg:w-[50%]">
        <div className="flex pl-48 pb-16 text-2xl"><FaRegTimesCircle /></div>
        <div className="flex flex-col-2 pb-12">
          <button>Sign In</button>
        <button>Sign In</button></div>
        <div className="md:grid grid-cols-2 gap-12 pb-4 w-[100%]">
        <div className="flex flex-col">
        <label>First Name</label>
      <input type="text" name="name" className="h-10 rounded"  />
      </div>
      <div className="flex flex-col">
        <label>Last Name</label>
      <input type="text" name="name" className="h-10 rounded"  />
      </div>
        </div>
        <div className="pb-4 w-[100%]">
        <div className="flex flex-col">
        <label>Email</label>
      <input type="email" name="email" className="h-10 rounded" />
      </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 pb-4 w-[100%]">
        <div className="flex flex-col">
        <label>Phone Number</label>
      <input type="phone" name="phone number" className="h-10 rounded"   />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
      <input type="password" name="password" className="h-10 rounded"  />
      </div>
        </div>
     
        <div className="flex flex-row pb-4 w-[100%]">

        <input type="checkbox" name="checkbox" className="h-10 rounded pt-[-4rem]" />
          <label htmlFor="" className="pl-4">I Agree To The Terms And Conditions And  Privacy Policy </label>
      
     
        </div>

      <button type="submit" className="w-[100%] bg-[#d62828]">Sign Up</button>
      {/* <p>Already a member? Sign in</p> */}
     <div className="flex flex-row pb-4 w-[100%] pt-4 justify-center items-center mx-auto"> 
     <hr className="w-[37.5%] border-t border-custom-color"/>
     <p className="w-[25%] text-center">or</p>
     <hr className="w-[37.5%] border-t border-custom-color" />
     </div>
    
    <button type="submit" className=" w-[100%] bg-[#003049]">
        <div className="absolute pl-[1rem] lg:pl-[10rem] pt-[0.4rem]"><FcGoogle /></div>
        <span>Sign up using Google</span></button>

   
      </div>
     
    </form>
     

    </section>
  );
}

export default SignUp;