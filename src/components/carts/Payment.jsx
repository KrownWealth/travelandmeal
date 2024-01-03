import React, { useState } from "react";


const Payment = ({total}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //logic for any payment gateways 
    console.log("Payment submitted!");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
      <div className="grid grid-rows-2 pt-12 h-28">
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" required />
      </div>
      
      <div className="grid grid-rows-2 pt-4 h-28">
      <label htmlFor="cardNumber"> Card Number: </label>
      <input type="text" name="cardNumber" id="cardNumber" required />
      </div>
      <div className="grid grid-rows-2 pt-8 h-28">
      <label htmlFor="expiry">  Expiry Date: </label>
      <input type="text" name="expiryDate" id="expiry" required />
      </div>
      <div className="grid grid-rows-2 pt-8 h-28">
      <label htmlFor="cvv"> CVV: </label>
      <input type="text" name="cvv" id="cvv" required />
      </div>
        <div className="pt-8 font-bold"><p>Total: #{total.toFixed(2)}</p></div>
        <button type="submit" className="flex bg-deep-red rounded-2 w-[250px] 
         justify-center items-center mt-8 font-bold mx-auto">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
