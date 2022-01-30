import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from './fetchAlbums'

const initialState = {
  status: 'idle',
  albums: []
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = "succedded"
        state.albums.push(action.payload)
      })
  }
})

export const getAlbumsStatus = (state) => state.albums.status
export const getAllAlbums = (state) => state.albums.albums
export default albumsSlice.reducer
