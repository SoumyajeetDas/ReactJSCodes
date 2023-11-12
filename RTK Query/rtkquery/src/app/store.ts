import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi.tsx';

export const store = configureStore({
  reducer: {
    // The reducerPath is a unique key that your service will be mounted to in your store.
    [productApi.reducerPath]: productApi.reducer,
  },
  //Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
  // Reference --> https://www.youtube.com/shorts/43ZI-oS_r9Q

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
