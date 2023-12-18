import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const SuccessMessage = ({ onSignInClick }) => {
  return (
    <div className="px-8 pt-40 py-20" onClick={(e) => e.stopPropagation()}>
<div className="w-[100%] lg:w-[50%] mx-auto rounded shadow-lg bg-white ">
<div className="flex flex-col space-y-8 justify-center items-center text-center py-12">
<div className="relative rounded-[100%] shadow-lg w-22 p-8 text-white bg-[#003049] text-3xl">
  <FaCheck />
</div>
<div><h2>Successfuly SignUp! 👍</h2></div>
<div>
  <button className="bg-[#003049]" onClick={onSignInClick}>Login</button>
  </div>
</div>
    </div>
    </div>
  )
}

export default SuccessMessage;