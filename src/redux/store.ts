import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadCartFromStorage, saveCartToStorage } from '@/utils/localStorage';

// Middleware to persist cart to localStorage
const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  // Save cart to localStorage after any cart action
  if (action.type.startsWith('cart/')) {
    const state = store.getState();
    saveCartToStorage(state.cart.items);
  }
  
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
