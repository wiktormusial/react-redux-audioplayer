import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songId: 0,
  playlist: [
    {
      id: 0,
      title: 'asd',
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
      state.songId = 0
      state.playlist = action.payload
    },
    incrementSongId(state) {
      state.songId = state.songId + 1
    },
    decrementSongId(state) {
      state.songId = state.songId - 1
    }
  }
})

export const getPlaylist = (state) => state.player.playlist
export const getSongId = (state) => state.player.songId
export const { addToPlaylist, addToPlaylistAndRemoveAll, incrementSongId, decrementSongId } = playerSlice.actions

export default playerSlice.reducer
