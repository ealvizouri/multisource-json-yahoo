import { createSlice } from "@reduxjs/toolkit";
import { SlackFactory } from "../../sources";

const slackFactory = new SlackFactory();

const slackSlice = createSlice({
  name: 'slack',
  initialState: {
    loading: false,
    slackMessages: slackFactory.makeSome(5, true),
  },
  reducers: {
    setLoading: (state, action) => void(state.loading = action.payload),
    setSlackMessages: (state, action) => void(state.slackMessages = action.payload),
    addSlackMessages: (state, action) => void(state.slackMessages = [...state.slackMessages, ...action.payload]),
  }
});

/* SELECTORS */
const selectors = {
  selectLoading: state => state.slack.loading,
  selectSlackMessages: state => state.slack.slackMessages,
}

export const {
  selectLoading,
  selectSlackMessages,
} = selectors;

/* ACTIONS */
export const { setLoading, setSlackMessages, addSlackMessages } = slackSlice.actions;

export const fetchSlackMessages = (params = {}) => async (dispatch, getState, { fakeFetch }) => {
  const { max = 10, precise = true } = params;
  dispatch(setLoading(true));
  const response = await fakeFetch(() => {
    return slackFactory.makeSome(max, precise);
  });
  dispatch(addSlackMessages(response));
  dispatch(setLoading(false));
}

export default slackSlice.reducer;