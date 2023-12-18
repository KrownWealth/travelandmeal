import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (item) => {
    // console.log("Adding to cart:", item);
    setCartItems((prevItems) => [
      ...prevItems,
      item
    ]);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
