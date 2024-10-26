import { create } from "zustand";
import { Character } from "../interface/character";

interface CharacterStore {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;

  featuredCharacters: Character[];
  setFeaturedCharacters: (characters: Character[]) => void;
}

const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  setCharacters: (characters) => set({ characters }),
  featuredCharacters: [],
  setFeaturedCharacters: (featuredCharacters) => set({ featuredCharacters }),
}));

export default useCharacterStore;
