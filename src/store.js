import { configureStore } from '@reduxjs/toolkit';
import { photosApi } from '../src/api/photoApi';

const store = configureStore({
  reducer: {
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

export default store;