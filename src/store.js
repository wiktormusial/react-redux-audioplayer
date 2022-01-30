import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './slices/albums/albumsSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});
