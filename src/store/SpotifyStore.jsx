import { create } from "zustand";

export const useSpotifyStore = create((set) => ({
  isPlaying: false,
  currentMusic: { songs: null, playlists: null, song: null },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic })
}))
