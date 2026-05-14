import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;