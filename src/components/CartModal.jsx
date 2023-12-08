import { FaPlus, FaMinus } from "react-icons/fa";
import React from "react";
import { useCart } from "@/contexts/CartContext";



const CartModal = ({ isOpen, onClose }) => {
  const [items, setItems] = React.useState(0);
  const { addToCart } = useCart();

  const handleAddItem = () => {
    setItems((prevItems) => prevItems + 1);
  };

  const handleSubtractItem = () => {
    if (items > 0) {
      setItems((prevItems) => prevItems - 1);
    }
  };

  const handleTotal = (items) => {
    if (items && typeof items.price === 'number') {
      return items.price * items.quantity;
    }
    return 0;
    };

  const handleSubmit = () => {
   addToCart({items, total: handleTotal() });
    //more items to add to the cart
    
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <p>Initial order cost: #200.00</p>
          <button
            onClick={onClose}
            className="text-black font-bold bg-transparent hover:bg-transparent -mt-2 ml-auto"
          >
            &times;
          </button>
        </div>

        <div className="flex justify-between my-8">
          <div className="flex border">
            <span className="bg-deep-red p-2 text-white">
              <FaMinus onClick={handleSubtractItem} />
            </span>

            <span className="mx-8 items-center">{items}</span>
            <span className="bg-deep-red p-2  text-white">
              <FaPlus onClick={handleAddItem} />
            </span>
          </div>
          <div className="font-bold">Total: {handleTotal()}</div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <button onClick={handleSubmit}  className="bg-deep-blue">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
