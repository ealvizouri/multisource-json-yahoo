import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.searchText = action.payload
    },
    clearSearch: (state) => void(state.searchText = ''),
  }
});

/* SELECTORS */
const selectors = {
  selectSearchText: state => state.search.searchText,
}

export const {
  selectSearchText,
} = selectors;

/* ACTIONS */
export const { setSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;