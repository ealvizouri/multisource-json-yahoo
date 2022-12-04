import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    text: '',
    results: []
  },
  reducers: {
    setSearch: (state, action) => {
      state.text = action.payload
    },
    clearSearch: (state) => state.text = '',
    setResults: (state, action) => state.results = action.payload
  }
});

/* SELECTORS */
const selectors = {
  selectSearchText: state => state.search.text,
  selectSearchResults: state => state.search.results
}

export const { selectSearchText } = selectors;

/* ACTIONS */
export const { setSearch, clearSearch, setResults } = searchSlice.actions;

export default searchSlice.reducer;