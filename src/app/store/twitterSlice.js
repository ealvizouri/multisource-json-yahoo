import { createSlice } from "@reduxjs/toolkit";
import { TweetFactory } from "../../sources";

const tweetFactory = new TweetFactory();

const twitterSlice = createSlice({
  name: 'twitter',
  initialState: {
    loading: false,
    tweets: tweetFactory.makeSome(5, true),
  },
  reducers: {
    setLoading: (state, action) => void(state.loading = action.payload),
    setTweets: (state, action) => void(state.tweets = action.payload),
    addTweets: (state, action) => void(state.tweets = [...state.tweets, ...action.payload]),
  }
});

/* SELECTORS */
const selectors = {
  selectLoading: state => state.twitter.loading,
  selectTweets: state => state.twitter.tweets,
}

export const {
  selectLoading,
  selectTweets,
} = selectors;

/* ACTIONS */
export const { setLoading, setTweets, addTweets } = twitterSlice.actions;

export const fetchTweets = (params = {}) => async (dispatch, getState, { fakeFetch }) => {
  const { max = 10, precise = true } = params;
  dispatch(setLoading(true));
  const response = await fakeFetch(() => {
    return tweetFactory.makeSome(max, precise);
  });
  dispatch(addTweets(response));
  dispatch(setLoading(false));
}

export default twitterSlice.reducer;