import { useState } from 'react'
import { useSelector } from "react-redux";
import { getPlaylist } from '../../slices/player/playerSlice'

export default function Player() {
  const [songId, setSongId] = useState(0)
  const playlist = useSelector(getPlaylist)
  const player = document.getElementById('player')
  const song = playlist[songId]

  function changeSong() {
    if (songId < playlist.length - 1) {
      setSongId(songId + 1)
      player.load()
      player.play()
    }
  }

  function changeSongBackwards() {
    if (songId > 0) {
      setSongId(songId - 1)
      player.load()
      player.play()
    }
  }

  function ended() {
    if (songId < playlist.length - 1) {
      setSongId(songId + 1)
      player.load()
      player.play()
    }
  }

  return (
    <div>
      <audio onEnded={ended} id="player" controls>
        <source src={song}/>
      </audio><br/>
      <button onClick={() => changeSongBackwards()}>Back</button>
      <button onClick={() => changeSong()}>Next song</button>
    </div>
  )
}
