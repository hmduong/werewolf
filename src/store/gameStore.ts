import { create } from "zustand";

interface GameState {
  gameId: string | null;
  isPlaying: boolean;
  score: number;
  setGameId: (id: string) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setScore: (score: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameId: null,
  isPlaying: false,
  score: 0,
  setGameId: (id) => set({ gameId: id }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setScore: (score) => set({ score }),
  resetGame: () => set({ gameId: null, isPlaying: false, score: 0 }),
}));
