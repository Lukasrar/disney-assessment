import { create } from "zustand";
import { Character } from "../interface/character";

interface CharacterStore {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}

const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  setCharacters: (characters) => set({ characters }),
}));

export default useCharacterStore;
