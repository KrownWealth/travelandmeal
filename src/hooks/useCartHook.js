import { useState } from "react";
import { useCart } from "@/contexts/CartContext";



const useCartHook = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const { cartItems, setCartItems } = useCart();
 
  const openQuantityModal = (menuItem, defaultQuantity) => {
    setSelectedMenuItem(menuItem);
    setQuantity(defaultQuantity);
    setQuantityModalOpen(true);
  };

  const closeQuantityModal = () => {
    setSelectedMenuItem(null);
    setQuantity(1);
    setQuantityModalOpen(false);
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  const handleTotal = () => {
    return quantity * (parseFloat(selectedMenuItem?.price) || 1);
  };
  const updatePrice = () => {
    return quantity * (parseFloat(selectedMenuItem?.price) || 1);
  };

  const handleAddToCart = (setCartItems, cartItems) => {
    const total = handleTotal();
    const newCartItem = {
      ...selectedMenuItem,
      quantity,
      total,
    };
    setCartItems([...cartItems, newCartItem]);
    setShowSuccessModal(true);
    setQuantityModalOpen(false);
  };

  return {
    quantity,
    quantityModalOpen,
    showSuccessModal,
    selectedMenuItem,
    openQuantityModal,
    closeQuantityModal,
    handleAdd,
    handleSubtract,
    handleTotal,
    handleAddToCart,
    updatePrice,
    setShowSuccessModal,
    showSuccessModal,
  };
};

export default useCartHook;
