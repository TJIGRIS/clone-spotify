import { create } from "zustand";

export const useSpotifyStore = create((set) => ({
  playSong: false,
  currentMusic: { songs, playlists, song },
  setPlaySong: (playSong) => set({ playSong }),
  setCurrentMusic: (currentMusic) => set({ currentMusic })
}))
