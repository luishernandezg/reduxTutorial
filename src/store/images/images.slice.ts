import {createSlice} from '@reduxjs/toolkit';
import {ImageState} from './Images.entity';
import imagesReducer from './images.reducer';

export const initialState: ImageState = {
  listImage: [],
};

const imagesSlice = createSlice({
  name: 'iamges',
  initialState: initialState,
  reducers: imagesReducer,
});

export const {actions, reducer} = imagesSlice;
