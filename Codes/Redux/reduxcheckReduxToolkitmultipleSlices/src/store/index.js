
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter'
import authSlice from './auth'




// Connecting to the store by combining all the reducres to one reducer using configureStore()
// Instead of configureStore() we can also use combinedReducer() from redux.
const store = configureStore({

    // When we want to apss a single reducer we can pas in this way
    reducer:{
        counterReducer : counterSlice.reducer,
        authReducer :authSlice.reducer
    }


    // For passing multiple reducers we can pass in this way
    // reducer : {
    //     counter : counterSlice.reducer
    // }
})


// Exporting the action creators which will return action / action methods
export const counterActions = counterSlice.actions
export const authActions  = authSlice.actions


// Exporting store
export default store;