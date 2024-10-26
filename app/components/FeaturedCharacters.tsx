import React, { useEffect, useState } from "react";
import { Character } from "../interface/character";
import { Service } from "../services";
import CharacterList from "./CharacterList";
import useCharacterStore from "../store";

export default function FeaturedCharacters() {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);
  const [isLoadingFeaturedCharacters, setIsLoadingFeaturedCharacters] =
    useState(false);

  useEffect(() => {
    const run = async () => {
      setIsLoadingFeaturedCharacters(true);
      try {
        const data = await Service.getFeaturedCharacters();

        setFeaturedCharacters(data.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
      setIsLoadingFeaturedCharacters(false);
    };

    run();
  }, []);

  return (
    <CharacterList
      characters={featuredCharacters}
      isLoading={isLoadingFeaturedCharacters}
    />
  );
}
