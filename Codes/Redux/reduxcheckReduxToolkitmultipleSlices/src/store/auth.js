import {createSlice} from '@reduxjs/toolkit'

const initialAuthState = {
    isAuthenticated : false
}

const authSlice = createSlice({
    name:"Authorization",
    initialState:initialAuthState,

     // The createSlice will automatically create action creators corresponding to each reducer here which will return 
    // action / action objects and it will look like {type:"SOME_UNIQUE_IDENTIFIER", payload:""}
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})


export default authSlice;