'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartFromStorage as loadCartFromStorageAction } from '@/redux/cartSlice';
import { loadCartFromStorage } from '@/utils/localStorage';

export const useCartPersistence = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart from localStorage on app initialization
    const savedCart = loadCartFromStorage();
    if (savedCart.length > 0) {
      dispatch(loadCartFromStorageAction(savedCart));
    }
  }, [dispatch]);
};