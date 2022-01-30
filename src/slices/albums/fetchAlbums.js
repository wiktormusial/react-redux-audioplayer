import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  async() => {
    const response = await axios('http://localhost:8000/api/v1/songs/albums')
    return response.data
  }
)
