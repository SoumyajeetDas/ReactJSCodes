// There should be a single Reducer for a single store in application and it is connected to the store through rootReducer.

import { combineReducers } from "redux";
import counterReducer from "./reducer";


// There can be multiple Reducer exported but all should be kept in the rootReducer.
const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer