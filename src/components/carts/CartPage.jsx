import React from "react";
import OrderDetails from "./OrderDetails"
import Payment from "./Payment";
import { useCart } from "@/contexts/CartContext";
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.total, 0);
};



const CartPage = () => {
  const { cartItems } = useCart(); 
  const totalCartPrice = calculateTotal(cartItems);

  return (
    <div className="pt-44 pb-24">
      <h3 className="pl-4 lg:pl-16 font-bold">Continue Shopping</h3>
    <div className="rounded w-[90%] mx-auto ">
    <div className="flex flex-col lg:flex-row">
     <div className="basis-full lg:basis-3/5 bg-white "><OrderDetails /></div>
      <div className="basis-full lg:basis-2/5 bg-gray-100 pt-12  p-4">
        <Payment total={totalCartPrice} /></div>
     </div>
    </div>
    </div>
  );
};

export default CartPage;
