import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.total, 0);
};

const Payment = ({total}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling the payment (e.g., API call, redirect, etc.)
    console.log("Payment submitted!");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
      <div className="grid grid-rows-2 pt-12 h-28">
      <label>Name: </label>
      <input type="text" name="name" required />
      </div>
      
      <div className="grid grid-rows-2 pt-4 h-28">
      <label> Card Number: </label>
      <input type="text" name="cardNumber" required />
      </div>
      <div className="grid grid-rows-2 pt-8 h-28">
      <label>  Expiry Date: </label>
      <input type="text" name="expiryDate" required />
      </div>
      <div className="grid grid-rows-2 pt-8 h-28">
      <label> CVV: </label>
      <input type="text" name="cvv" required />
      </div>
        <div className="pt-8 font-bold"><p>Total: #{total.toFixed(2)}</p></div>
        <button type="submit" className="flex bg-deep-red rounded-2 w-[250px] 
         justify-center items-center mt-8 font-bold mx-auto">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
