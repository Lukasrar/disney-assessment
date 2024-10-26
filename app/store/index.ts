import { create } from "zustand";
import { Character } from "../interface/character";

interface CharacterStore {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
  isLoadingCharacters: boolean;
  setIsLoadingCharacters: (value: boolean) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  setCharacters: (characters) => set({ characters }),
  isLoadingCharacters: false,
  setIsLoadingCharacters: (isLoadingCharacters) => set({ isLoadingCharacters }),
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

export default useCharacterStore;
