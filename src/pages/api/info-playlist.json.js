import { allPlaylists, songs as allSongs } from "@lib/data"


export async function GET({ params, request }) {
  const { url } = request

  const id = new URL(url).searchParams.get('id')

  const playlists = allPlaylists.find(item => item.id === id)
  const songs = allSongs.filter(item => item.albumId === playlists.albumId)

  return new Response(JSON.stringify({ playlists, songs }), {
    headers: { 'Content-Type': 'application/json' }
  })
}