import React from "react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";

const OrderDetails = () => {
  const { cartItems, setCartItems } = useCart();

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].total = newQuantity * updatedCartItems[index].price;
    setCartItems(updatedCartItems);
  };

  const totalCartPrice = cartItems.reduce((total, item) => total + item.total, 0);

  return (
    <div data-testid="order-detail">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex flex-row justify-between p-4" data-testid="cart-item">
            <div className="flex">
              <Image
                src={item.imgSrc}
                alt={item.name}
                width={100}
                height={100}
                className="rounded overflow-hidden shadow-lg "
                data-testid={`item-image-${index}`}
              />
            </div>
            <div className="flex flex-col">
              <p data-testid={`item-name-${index}`} > {item.name}</p>
              <p data-testid={`item-price-${index}`}> {item.price}</p>
              <div className="flex items-center">
               <p className="mr-4">Qty: </p>
                  <FaMinus data-testid={`quantity-increase-${index}`} onClick={() => handleQuantityChange(index, item.quantity - 1)} />
                <span className="mx-2">{item.quantity}</span>
                  <FaPlus data-testid={`quantity-decrease-${index}`} onClick={() => handleQuantityChange(index, item.quantity + 1)} />
              </div>
            </div>
            <div className="flex">
              <p data-testid={`item-total-${index}`}>Total: {item.total}</p>
              <RiDeleteBinLine
                onClick={() => handleRemoveItem(index)}
                className="text-[#d62828] ml-2 cursor-pointer"
                data-testid={`remove-button-${index}`}
              />
            </div>
          </div>
        ))
      ) : (
        <p data-testid="empty-cart-message">Your cart is empty</p>
      )}
      <div className="flex justify-center items-center mb-4 font-bold">
        <p data-testid="total-cart-price" >Total Items: #{totalCartPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderDetails;