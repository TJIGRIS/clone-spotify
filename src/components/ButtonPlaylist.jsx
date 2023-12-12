import { useSpotifyStore } from "@store/SpotifyStore"
import { Pause, Play } from "./Player"

export default function ButtonPlaylist({ id }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = useSpotifyStore()

  const handleClick = () => {
    fetch(`/api/info-playlist.json?id=${id}`)
      .then(item => item.json())
      .then(data => {
        const { playlists, songs } = data
        setCurrentMusic({ songs, playlists, song: songs[0] })
      })
      .catch(err => console.log(err))
  }

  const isCardPlaylist = isPlaying && currentMusic.playlists?.albumId == id

  return (
    <div>
      <button className="absolute transition-all duration-300 bottom-20 right-4 opacity-0  bg-green-600 rounded-full p-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 z-50" onClick={handleClick}>
        {isCardPlaylist ? <Pause /> : <Play />}
      </button>
    </div>
  )
}
