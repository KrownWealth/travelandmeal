import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  const { handleGoogleSignIn } = useAuth();
  return (
    
     <div data-testid="social-sign-in">
      <button
        type="submit"
        className="w-[100%] bg-[#d62828]"
        aria-label="Sign up using Google"
        role="button"
        onClick={handleGoogleSignIn}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleGoogleSignIn();
          }
        }}
      >
        <div className="absolute pl-[1rem] lg:pl-[5rem] pt-[0.4rem]">
          <FcGoogle />
        </div>
        <span className="pl-10">Sign up using Google</span>
      </button>
    </div>
  );
};
export default SocialSignIn;
