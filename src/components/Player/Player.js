import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getPlaylist, getSongId, incrementSongId, decrementSongId} from '../../slices/player/playerSlice'
import Playlist from '../Playlist/Playlist'

export default function Player() {
  const dispatch = useDispatch()
  const playlist = useSelector(getPlaylist)
  const songId = useSelector(getSongId)
  const player = document.getElementById('player')
  const song = playlist[songId]
  const [currentSong, setCurrentSong] = useState(song.title)

  function playerPlay() {
    const playPromise = player.play()
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        player.play()
        player.addEventListener('ended', (event) => {
          if (songId < playlist.length - 1) {
            dispatch(incrementSongId())
            console.log(song.id)
            setCurrentSong(playlist.find((item) => item.id === song.id + 1).title)
            player.load()
            player.play()
          }
        });
      })
    }
  }

  function playerPause() {
    const playPromise = player.pause()
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        player.pause()
      })
    }
  }

  function changeSong() {
    if (songId < playlist.length - 1) {
      dispatch(incrementSongId())
      const playPromise = player.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          player.play()
        })
      }
      setCurrentSong(playlist.find((item) => item.id === song.id + 1).title)
    }
  }

  function changeSongBackwards() {
    if (songId > 0) {
      dispatch(decrementSongId())
      const playPromise = player.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          player.play()
        })
      }
      setCurrentSong(playlist.find((item) => item.id === song.id - 1).title)
    }
  }

  return (
    <div>
      {currentSong}
      <br/>
      <audio id="player" src={song.song}>
      </audio>
      <button id="play" onClick={() => playerPlay()}>Start</button>
      <button onClick={() => playerPause()}>Pause</button>
      <button onClick={() => changeSongBackwards()}>Back</button>
      <button onClick={() => changeSong()}>Next song</button><br/>
      <Playlist/>
    </div>
  )
}
