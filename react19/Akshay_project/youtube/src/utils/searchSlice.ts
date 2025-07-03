import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  [key: string]: string[];
} = {};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    cacheSearchResults: (state, action) => {
      const { payload } = action;
      // Merge the new search results into the state
      Object.assign(state, payload);
    },
  },
});

export default searchSlice;
