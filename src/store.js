import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './slices/albums/albumsSlice'
import playerReducer from './slices/player/playerSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    player: playerReducer,
  },
});
