import React, { useEffect, useState } from "react";
import { Character } from "../interface/character";
import { Service } from "../services";
import CharacterList from "./CharacterList";

export default function FeaturedCharacters() {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const run = async () => {
      const data = await Service.getFeaturedCharacters();

      setFeaturedCharacters(data.data);
    };

    run();
  }, []);

  return <CharacterList characters={featuredCharacters} />;
}
