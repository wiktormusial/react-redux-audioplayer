import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlist: [
    {
      name: 'test_name',
      song: 'http://localhost:8000/uploads/songs/2022/01/29/Ensoniq-ZR-76-08-Dope-92.wav'
    }
  ]
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addToPlaylist(state, action) {
      state.playlist.push(action.payload)
    },
    addToPlaylistAndRemoveAll(state, action) {
      state.playlist = action.payload
    }
  }
})

export const getPlaylist = (state) => state.player.playlist
export const { addToPlaylist, addToPlaylistAndRemoveAll } = playerSlice.actions

export default playerSlice.reducer
