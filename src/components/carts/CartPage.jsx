'use client';
import React from 'react';
import OrderDetails from './OrderDetails';
import Payment from './Payment';
import { useCart } from '@/contexts/CartContext';
import SuccessModal from './SuccessModal';

const CartPage = ({ showSuccessModal, setShowSuccessModal }) => {
  const { cartItems } = useCart();

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.total, 0);
  };
  const totalCartPrice = calculateTotal(cartItems);

  return (
    <div className="pt-44 pb-24">
      <h3 className="pl-6 lg:pl-16 font-bold">Continue Shopping</h3>
      <div className="rounded w-[90%] mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-full lg:basis-3/5 bg-white ">
            <OrderDetails />
          </div>
          <div className="basis-full lg:basis-2/5 bg-gray-100 pt-12  p-4">
            <Payment total={totalCartPrice} />
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <>
          <SuccessModal
            showSuccessModal={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            successCart="Your Order is on it way!"
          />
        </>
      )}
    </div>
  );
};

export default CartPage;
