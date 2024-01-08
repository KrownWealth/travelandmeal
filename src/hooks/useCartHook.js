"use client"
import { useState } from "react";
import { databases, ID } from "../../utils/appwrite";
import { useUser } from "@/contexts/AuthContext";;
import { useCart } from "@/contexts/CartContext";

const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID;
const databasesId = process.env.NEXT_PUBLIC_APPWRITE_DATABASES_ID;


const useCartHook = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const { user } = useUser();
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
    return selectedMenuItem ? quantity * (parseFloat(selectedMenuItem.price) || 1) : 0;
  };
  
  const handleAddToCart = async () => {
    const total = handleTotal();
    const documentId = ID.unique();
    const newCartItem = {
       userId: user.name,
       ...selectedMenuItem,
       userId: user.name,
       ...selectedMenuItem,
      quantity,
      total,
    };
    setCartItems([...cartItems, newCartItem]);
    setShowSuccessModal(true);
    setQuantityModalOpen(false);

    if (user) {
      try {
        
        await databases.createDocument(
          databasesId,
          collectionId,
          documentId,
         newCartItem
        );

        console.log("New Cart Item (without image):", cartItemWithoutImage);
      } catch (error) {
        console.error("Error creating user items:", error);
      }
    }
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
    setShowSuccessModal,
    showSuccessModal,
  };
};

export default useCartHook;