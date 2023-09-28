import {configureStore} from '@reduxjs/toolkit';
import {ImageAtions, imagesReducer} from './images';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const actions = {
  image: ImageAtions,
};

const reducers = {
  image: imagesReducer,
};

export const store = configureStore({
  reducer: reducers,
  enhancers: [],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
