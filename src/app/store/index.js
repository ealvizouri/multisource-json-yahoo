import { configureStore } from "@reduxjs/toolkit";
import fakeFetch from "./fakeFetch";
import searchSliceReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchSliceReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          fakeFetch
        }
      }
    })
  }
});

export default store;