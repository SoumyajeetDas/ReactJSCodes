import { createSlice } from "@reduxjs/toolkit";


const initialStatusState = {
    statusShow: false,
    notification: null
};

export const statusSlice = createSlice({
    name: 'Status',
    initialState: initialStatusState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message
            }
        },
        showStatus(state) {
            state.statusShow = !state.statusShow
        }
    },
})