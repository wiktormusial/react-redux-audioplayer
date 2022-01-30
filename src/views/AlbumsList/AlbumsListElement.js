import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToPlaylist } from '../../slices/player/playerSlice'
import { addToPlaylistAndRemoveAll } from '../../slices/player/playerSlice'

export default function AlbumsListElement(props) {
  const { title, description, release_date, is_published, song_set } = props.item
  const dispatch = useDispatch()

  let song_list
  if (song_set.length > 0) {
    song_list = song_set.map((song) => {
      return(
        <div key={song.id}>
           <p>{song.title}</p>
           <Link to="#" onClick={() => dispatch(addToPlaylist(song))}>Add to playlist</Link>
        </div>
      )
    })
  }

  const playAlbum = <Link to="#" onClick={() => dispatch(addToPlaylistAndRemoveAll(song_set))}>Play Album</Link>

  return(
    <>
    <h3>{title}</h3>
    {song_set.length > 0 ? playAlbum : ''}
    <p>{description}</p>
    {!is_published ? `Release_date: ${release_date}` : ''}
    <div>Songs: {song_set.length === 0 ? 'TBA' : song_list} </div>
    </>
  )
}
