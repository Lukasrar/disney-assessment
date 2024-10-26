"use client";

import { Box } from "@chakra-ui/react";
import CharacterList from "./components/CharacterList";
import useCharacterStore from "./store";
import FeaturedCharacters from "./components/FeaturedCharacters";

export default function Home() {
  const { characters } = useCharacterStore();

  return (
    <Box w={"100%"}>
      <Box bg={"surface"} p={"80px"}>
        <CharacterList characters={characters} />
      </Box>
      <Box bg={"primary"} p={"80px"}>
        <FeaturedCharacters />
      </Box>
    </Box>
  );
}
