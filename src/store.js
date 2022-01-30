import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import albumsReducer from 'slices/albums/albumsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
