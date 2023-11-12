// There should be a single Reducer for a single store in application and it is connected to the store through rootReducer.

import cartItems from "./reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    cartItems
});


export default rootReducer;