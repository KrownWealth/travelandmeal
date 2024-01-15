'use client';
import React from 'react';
import CartPage from '@/components/carts/CartPage';
import ProtectedRoute from '@/components/ProtectedRoute';

const Cart = () => {
  return (
    <ProtectedRoute>
      <CartPage />
    </ProtectedRoute>
  );
};

export default Cart;
