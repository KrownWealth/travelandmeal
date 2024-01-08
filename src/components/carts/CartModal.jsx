"use client";
import { FaPlus, FaMinus } from "react-icons/fa";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

export const QuantityModal = ({
  openQuantityModal,
  closeQuantityModal,
  quantity,
  handleAdd,
  handleSubtract,
  handleAddToCart,
  selectedMenuItem,
  handleTotal,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
        openQuantityModal ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <p>
            Initial order cost: {formatCurrency(handleTotal(selectedMenuItem))}
          </p>

          <button
            onClick={closeQuantityModal}
            className="text-black font-bold bg-transparent hover:bg-transparent -mt-2 ml-auto"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col justify-between my-8 gap-8">
          <div className="flex items-center border w-[138px] ">
            <span
              onClick={handleSubtract}
              className="bg-deep-red p-2 text-white"
            >
              <FaMinus />
            </span>
            <span className="mx-8 items-center">{quantity}</span>
            <span onClick={handleAdd} className="bg-deep-red p-2 text-white">
              <FaPlus />
            </span>
          </div>
          <div className="font-bold">
            Total:{formatCurrency(handleTotal(selectedMenuItem))}{" "}
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <button
            className="bg-deep-blue rounded-2 w-[150px] "
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
