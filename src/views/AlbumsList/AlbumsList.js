import { useSelector } from "react-redux";
import { getAllAlbums } from '../../slices/albums/albumsSlice'
import AlbumsListElement from './AlbumsListElement'

export default function Player() {
  const albums = useSelector(getAllAlbums)
  const albumslist = albums.map((item) => {
    return (
      <div key={item.id}>
        <AlbumsListElement item={item} />
      </div>
    )
  })

  return(
  <>
    {albumslist}
  </>
  )
}
