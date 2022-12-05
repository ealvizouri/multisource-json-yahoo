import { createSlice } from "@reduxjs/toolkit";
import { ImageFactory } from "../../sources";

const imageFactory = new ImageFactory();

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    loading: false,
    images: imageFactory.makeSome(5, true),
  },
  reducers: {
    setLoading: (state, action) => void(state.loading = action.payload),
    setImages: (state, action) => void(state.images = action.payload),
    addImages: (state, action) => void(state.images = [...state.images, ...action.payload]),
  }
});

/* SELECTORS */
const selectors = {
  selectLoading: state => state.images.loading,
  selectImages: state => state.images.images,
}

export const {
  selectLoading,
  selectImages,
} = selectors;

/* ACTIONS */
export const { setLoading, setImages, addImages } = imagesSlice.actions;

export const fetchImages = (params = {}) => async (dispatch, getState, { fakeFetch }) => {
  const { max = 5, precise = true } = params;
  dispatch(setLoading(true));
  const response = await fakeFetch(() => {
    return imageFactory.makeSome(max, precise);
  });
  dispatch(addImages(response));
  dispatch(setLoading(false));
}

export default imagesSlice.reducer;