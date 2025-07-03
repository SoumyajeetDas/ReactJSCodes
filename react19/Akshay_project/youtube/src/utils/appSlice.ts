import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export default appSlice;
