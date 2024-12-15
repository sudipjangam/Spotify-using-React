import { create } from 'zustand';
import { Song } from '../types/music';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  setCurrentSong: (song: Song) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  volume: 1,
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
}));