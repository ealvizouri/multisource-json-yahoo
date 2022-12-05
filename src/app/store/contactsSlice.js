import { createSlice } from "@reduxjs/toolkit";
import { ContactFactory } from "../../sources";

const contactFactory = new ContactFactory();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    loading: false,
    contacts: contactFactory.makeSome(5, true),
  },
  reducers: {
    setLoading: (state, action) => void(state.loading = action.payload),
    setContacts: (state, action) => void(state.contacts = action.payload),
    addContacts: (state, action) => void(state.contacts = [...state.contacts, ...action.payload]),
  }
});

/* SELECTORS */
const selectors = {
  selectLoading: state => state.contacts.loading,
  selectContacts: state => state.contacts.contacts,
}

export const {
  selectLoading,
  selectContacts,
} = selectors;

/* ACTIONS */
export const { setLoading, setContacts, addContacts } = contactsSlice.actions;

export const fetchContacts = (params = {}) => async (dispatch, getState, { fakeFetch }) => {
  const { max = 10, precise = true } = params;
  dispatch(setLoading(true));
  const response = await fakeFetch(() => {
    return contactFactory.makeSome(max, precise);
  });
  dispatch(addContacts(response));
  dispatch(setLoading(false));
}

export default contactsSlice.reducer;