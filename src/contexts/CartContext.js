import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

   useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); 
        const productsData = await response.json();
        setCartItems(productsData); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
       setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
  return (
    <CartContext.Provider value={{ cartItems, loading, cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
 
};

export const useCart = () => {
  return useContext(CartContext);
};

//