import { createSlice } from "@reduxjs/toolkit";
import { GDriveFactory } from "../../sources";

const gDriveFactory = new GDriveFactory();

const gDriveSlice = createSlice({
  name: 'gDrive',
  initialState: {
    loading: false,
    files: gDriveFactory.makeSome(5, true),
  },
  reducers: {
    setLoading: (state, action) => void(state.loading = action.payload),
    setFiles: (state, action) => void(state.files = action.payload),
    addFiles: (state, action) => void(state.files = [...state.files, ...action.payload]),
  }
});

/* SELECTORS */
const selectors = {
  selectLoading: state => state.gDrive.loading,
  selectFiles: state => state.gDrive.files,
}

export const {
  selectLoading,
  selectFiles,
} = selectors;

/* ACTIONS */
export const { setLoading, setFiles, addFiles } = gDriveSlice.actions;

export const fetchFiles = (params = {}) => async (dispatch, getState, { fakeFetch }) => {
  const { max = 10, precise = true } = params;
  dispatch(setLoading(true));
  const response = await fakeFetch(() => {
    return gDriveFactory.makeSome(max, precise);
  });
  dispatch(addFiles(response));
  dispatch(setLoading(false));
}

export default gDriveSlice.reducer;