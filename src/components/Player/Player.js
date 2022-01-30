import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist, getSongId, incrementSongId, decrementSongId} from '../../slices/player/playerSlice'
import Playlist from '../Playlist/Playlist'

export default function Player() {
  const dispatch = useDispatch()
  const playlist = useSelector(getPlaylist)
  const songId = useSelector(getSongId)
  const player = document.getElementById('player')
  const song = playlist[songId].song

  function changeSong() {
    if (songId < playlist.length - 1) {
      dispatch(incrementSongId())
      player.load()
      player.play()
    }
  }

  function changeSongBackwards() {
    if (songId > 0) {
      dispatch(decrementSongId())
      player.load()
      player.play()
    }
  }

  function ended() {
    if (songId < playlist.length - 1) {
      dispatch(incrementSongId())
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
      <button onClick={() => changeSong()}>Next song</button><br/>
      <Playlist/>
    </div>
  )
}
