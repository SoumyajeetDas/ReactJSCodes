
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {
    counter:0,
    showCounter:true
}


// Like we can make no of reducer wrt no of data, same we can prepare no of slices for no of data.
const counterSlice = createSlice({
    name:'counter', // Every slice should have a name
    initialState,

    // The createSlice will automatically create action creators corresponding to each reducer here which will return 
    // action / action objects and it will look like {type:"SOME_UNIQUE_IDENTIFIER", payload:""}
    reducers :{
        increment(state,action){
            // Here it feels like/ seems we are mutating the state but Redux in the background actually overriding the previuos state.
            // with the help of other package
            state.counter = state.counter+action.payload // When we pass any data in action we have to access by "payload"
        },
        decrement(state){
            if(state.counter>0)
                --state.counter
        },
        toggle(state){
            state.showCounter=!state.showCounter
        }
    },
})



// Connecting to the store by combining all the reducres to one reducer using configureStore()
// Instead of configureStore() we can also use combinedReducer() from redux.
const store = configureStore({

    // When we want to apss a single reducer we can pas in this way
    reducer:counterSlice.reducer


    // For passing multiple reducers we can pass in this way
    // reducer : {
    //     counter : counterSlice.reducer
    // }
})


// Exporting the action creators which will return action / action methods
export const counterActions = counterSlice.actions

// Exporting Store
export default store;