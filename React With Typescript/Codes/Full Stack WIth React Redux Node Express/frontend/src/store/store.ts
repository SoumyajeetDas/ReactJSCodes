import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import gameSlice from "./gameSlice";

// Reducers
const store = configureStore({
    reducer: {
        gamesReducer:gameSlice.reducer
    }

})


// Getting the State Type 
// Reference : https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
export type RootState = ReturnType<typeof store.getState>;
// Getting the Dispatch Type
// Reference : https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
export type AppDispatch = typeof store.dispatch;


// It is recommended to give the type a different name like AppDispatch to prevent confusion, as the type name Dispatch is usually 
// overused. You may also find it to be more convenient to export a hook like useAppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



// Actions
export const gameActions = gameSlice.actions;


export default store;

