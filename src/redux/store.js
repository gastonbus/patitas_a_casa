import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './slices/homeSlice';
import { pacApi } from '../services/pacApi';

export const store = configureStore({
  reducer: {
    homeSlice,
    [pacApi.reducerPath]: pacApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pacApi.middleware),
});
