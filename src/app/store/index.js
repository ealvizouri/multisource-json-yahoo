import { configureStore } from "@reduxjs/toolkit";
import fakeFetch from "./fakeFetch";
import searchSliceReducer from './searchSlice';
import contactsSliceReducer from './contactsSlice';
import gDriveSliceReducer from './gDriveSlice';
import slackSliceReducer from './slackSlice';
import twitterSliceReducer from './twitterSlice';
import imagesSliceReducer from './imagesSlice';

const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    contacts: contactsSliceReducer,
    gDrive: gDriveSliceReducer,
    slack: slackSliceReducer,
    twitter: twitterSliceReducer,
    images: imagesSliceReducer,
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