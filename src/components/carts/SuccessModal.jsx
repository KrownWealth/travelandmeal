"use client"
import { FaCheck } from "react-icons/fa";

const SuccessModal = ({ showSuccessModal, onClose, successCart }) => {
  return ( 
  <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
      showSuccessModal ? "block" : "hidden"
    }`}
  >
     <div className="px-8 pt-40 py-20">
      <div className="w-[100%] lg:w-[50%] mx-auto rounded shadow-lg bg-white">
        <div className="flex flex-col space-y-8 justify-center items-center text-center py-12">
          <div className="relative rounded-[100%] shadow-lg w-22 p-8 text-white bg-[#003049] text-3xl">
            <FaCheck />
          </div>
          <div>
            <h2>{successCart}</h2>
          </div>
          <div>
            <button className="bg-[#003049]" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SuccessModal;
