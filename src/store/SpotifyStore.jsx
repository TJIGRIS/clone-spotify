import { create } from "zustand";

export const useSpotifyStore = create((set) => ({
  playSong: false,
  setPlaySong: (playSong) => set({ playSong })
}))
