import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsStatus } from '../../slices/albums/albumsSlice'
import { fetchAlbums } from '../../slices/albums/fetchAlbums'
import Player from '../Player/Player'

export default function Header() {
  const dispatch = useDispatch()
  const albumsStatus = useSelector(getAlbumsStatus)

  useEffect(() => {
    if (albumsStatus == 'idle') {
      dispatch(fetchAlbums())
    }
  })

  return(
    <>
    <h1>Audier</h1>
    <Player/>
    </>
  )
}
