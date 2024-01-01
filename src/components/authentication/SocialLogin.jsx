import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";



const SocialSignIn = () => {
    const { handleGoogleSignIn } = useAuth();
    return(
        <>
        {/* <button onClick={(e) => handleGoogleSignIn(e)} className=" w-[100%] bg-[#003049]">
        <div className="absolute pl-[1rem] lg:pl-[10rem] pt-[0.4rem]">
          <FcGoogle />
        </div>
        <span>Sign in using Google</span>
      </button> */}

      <button onClick={(e) => handleGoogleSignIn(e)} className="w-[100%] bg-[#003049] relative">
          <div className="absolute pl-[1rem] lg:pl-[5rem] pt-[0.4rem]">
            <FcGoogle />
          </div>
          <span className="pl-10">Sign up using Google</span>
        </button>
        </>
    )
}
export default SocialSignIn;