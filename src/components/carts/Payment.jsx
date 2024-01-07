import React from "react";
import { useCart } from "@/contexts/CartContext";
import { databases, ID } from "../../../utils/appwrite";
import { useUser } from "@/contexts/AuthContext";
import useCartHook from "@/hooks/useCartHook";

const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID;
const databasesId = process.env.NEXT_PUBLIC_APPWRITE_DATABASES_ID;

const Payment = ({ total }) => {
  const { updateCartItems, cartItems, setShowSuccessModal, setQuantityModalOpen } = useCart();
  const { selectedMenuItem } = useCartHook();
  const { user } = useUser();

  const handleUpdateDatabase = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User not logged in.");
      return;
    }

    if (!selectedMenuItem) {
      console.error("No selected item to proceed with payment.");
      // You can show an error message or disable the "Pay Now" button.
      return;
    }

    const documentId = ID.unique();

    // Use selectedMenuItem directly
    const newCartItem = {
      userId: user.name,
      image: selectedMenuItem.imgSrc,
      name: selectedMenuItem.name,
      quantity: quantity,
      price: selectedMenuItem.price,
      totalPrice: total,
    };

    try {
      await databases.createDocument(
        databasesId,
        collectionId,
        documentId,
        newCartItem
      );
      updateCartItems(newCartItem);
      setShowSuccessModal(true);
      setQuantityModalOpen(false);
    } catch (error) {
      console.error("Error creating user items:", error);
    }
  };

  return (
    <div>
      <h1 data-testid="checkout">Checkout</h1>
      <form onSubmit={handleUpdateDatabase}>
        <div className="grid grid-rows-2 pt-12 h-28">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="grid grid-rows-2 pt-4 h-28">
          <label htmlFor="cardNumber"> Card Number: </label>
          <input type="text" name="cardNumber" id="cardNumber" required />
        </div>
        <div className="grid grid-rows-2 pt-8 h-28">
          <label htmlFor="expiry"> Expiry Date: </label>
          <input type="text" name="expiryDate" id="expiry" required />
        </div>
        <div className="grid grid-rows-2 pt-8 h-28">
          <label htmlFor="cvv"> CVV: </label>
          <input type="text" name="cvv" id="cvv" required />
        </div>
        <div className="pt-8 font-bold">
          <p>Total: #{total.toFixed(2)}</p>
        </div>
        <button
          type="submit"
          className="flex bg-deep-red rounded-2 w-[250px] 
         justify-center items-center mt-8 font-bold mx-auto"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
