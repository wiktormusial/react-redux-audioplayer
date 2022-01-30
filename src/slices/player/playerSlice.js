import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlist: []
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addToPlaylist(state, action) {
      state.playlist.push(action.payload)
    }
  }
})

export const { addToPlaylist } = playerSlice.actions
export default playerSlice.reducer
