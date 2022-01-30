export default function AlbumsListElement(props) {
  const { title, description, release_date, is_published, song_set } = props.item

  let song_list
  if (song_set.length > 0) {
    song_list = song_set.map((song) => {
      return(
        <div key={song.id}>
           <p>{song.title}</p>
           <p>Add to playlist</p>
        </div>
      )
    })
  }

  return(
    <>
    <h3>{title}</h3>
    <p>{description}</p>
    {!is_published ? `Release_date: ${release_date}` : ''}
    <div>Songs: {song_set.length === 0 ? 'TBA' : song_list} </div>
    </>
  )
}
