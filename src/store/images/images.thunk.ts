import {ThunkDispatch, Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import {actions} from './images.slice';
import { dispatchable } from '../dispatchable';

export type Action = {
  type: string;
  payload?: any;
};

export const getListImage = dispatchable(() => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
      dispatch(actions['images/load'](result.data));
      return {
        sucess: true,
        data: result.data,
      };
    } catch (error) {
      return {
        sucess: false,
        data: null,
      };
    }
  };
});
