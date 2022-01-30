import { useSelector } from "react-redux";
import { getPlaylist } from '../../slices/player/playerSlice'

export default function Playlist () {
  const playlist = useSelector(getPlaylist)

  const songs = playlist.map((item) => {
    return (
      <li key={item.id}>{item.title}</li>
    )
  })

  return(
    <>
    <h4>Playlist</h4>
    <ul>
      {songs}
    </ul>
    </>
  )
}
