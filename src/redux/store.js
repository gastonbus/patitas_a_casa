import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './slices/homeSlice';
import { pacApi } from '../services/pacApi';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    homeSlice,
    [pacApi.reducerPath]: pacApi.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pacApi.middleware),
});
