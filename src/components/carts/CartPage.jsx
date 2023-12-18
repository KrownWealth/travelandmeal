import { useCart } from "@/contexts/CartContext";
import Image from "next/image"
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems } = useCart();
  
  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="pt-44 pb-24">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id}>
              <Image src={item.imgSrc} alt={item.name} width={50} height={50} />
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: {item.total}</p>
              {/* Add additional fields as needed, e.g., item.image, item.price */}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
