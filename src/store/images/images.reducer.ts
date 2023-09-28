import {PayloadAction} from '@reduxjs/toolkit';
import {ImageEntity, ImageState} from './Images.entity';

export default {
  'images/load': (state: ImageState, action: PayloadAction<ImageEntity[]>) => {
    state.listImage = action.payload;
  },
};
