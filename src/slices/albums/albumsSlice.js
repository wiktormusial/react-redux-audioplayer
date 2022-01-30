import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  albums: []
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
})

export default albumsSlice.reducer
