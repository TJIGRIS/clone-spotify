import { useSpotifyStore } from "@store/SpotifyStore"
import { Pause, Play } from "./Player"

export default function ButtonPlaylist({ id }) {
  const { isPlaying, setIsPlaying } = useSpotifyStore()

  const handleClick = () => {
    fetch(`/api/info-playlist.json/${id}`)
      .then(item => item.json())
      .then(data => console.log(data))

    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <button className="absolute transition-all duration-300 bottom-20 right-4 opacity-0  bg-green-600 rounded-full p-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 z-50" onClick={handleClick}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>
  )
}
