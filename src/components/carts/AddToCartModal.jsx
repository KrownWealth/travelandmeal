import { FaRegTimesCircle, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useState } from "react";

const AddToCartModal = ({ soupItem, setShowCartModal }) => {
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleMinusFromCart = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
  };

  const handleSubmit = () => {
    // Add the item and total to the cart (You should implement this part)
    setShowCartModal(false);
  };

  const total = count * parseFloat(soupItem.price.slice(1));

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <div>
              <h1>Customize Your Order</h1>
            </div>
            <button onClick={handleCloseCart} className="pointer">
              
              <FaRegTimesCircle />
            </button>
          </div>
          <div className="modal-body">
            <div className="flex justify-between">
              <p>Initial order cost:</p>
              <p>{soupItem.price}</p>
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <p className="ml-2">Quantity</p>
                <div className="bg-blue text-white w-28">
                  <span>
                    <FaPlusSquare onClick={handleAddToCart} />
                  </span>
                  <p>{count}</p>
                  <span>
                    <FaMinusSquare onClick={handleMinusFromCart} />
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex">
                  <p className="ml-2">Total: #{total.toFixed(2)}</p>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
