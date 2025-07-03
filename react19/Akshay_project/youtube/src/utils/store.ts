import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import appSlice from './appSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer, // Register the app slice reducer
    searchReducer: searchSlice.reducer, // Register the search slice reducer (if needed)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types

export const appActions = appSlice.actions; // Export actions for use in components
export const searchActions = searchSlice.actions; // Export search actions for use in components

export default store;
