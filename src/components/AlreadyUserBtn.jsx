import { AiOutlineUser } from 'react-icons/ai';

const AlreadyUserBtn = ({ handleSignInClick }) => {
  return (
    <div>
      <button
        className="block lg:hidden w-[120px] relative m-auto top-4 rounded-full pl-6 p-1
          justify-center items-center bg-white text-black hover:text-white font-medium"
        aria-label="Sign In"
        role="button"
        onClick={handleSignInClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSignInClick();
          }
        }}
      >
        <span className="absolute left-1 top-1/2 -translate-y-1/2 pl-2  text-black hover:text-white text-xl font-medium">
          <AiOutlineUser />
        </span>
        Sign in
      </button>

      <button
        onClick={handleSignInClick}
        className="lg:block hidden w-[220px] relative m-auto top-48 lg:top-8 rounded-full pl-6 p-1
         justify-center items-center bg-white text-black hover:text-white font-medium"
        aria-label="Sign In"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSignInClick();
          }
        }}
      >
        <span className="absolute left-1 top-1/2 -translate-y-1/2 pl-2  text-black hover:text-white  text-xl font-medium">
          <AiOutlineUser />
        </span>
        Already A User Sign in
      </button>
    </div>
  );
};

export default AlreadyUserBtn;
