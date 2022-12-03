import { configureStore } from "@reduxjs/toolkit";
import fakeFetch from "./fakeFetch";
import searchSliceReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchSliceReducer
  },
  middleware: getDefaultMiddleware => {
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          fakeFetch
        }
      }
    })
  }
});

export default store;