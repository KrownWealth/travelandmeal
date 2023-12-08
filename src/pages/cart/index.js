import React from "react";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="pt-44 pb-40 bg-white">
      <h2>This is Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Image: {item.image}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: {item.total}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          <hr />
        </div>
      ))}
    </section>
  );
};

export default CartPage;
