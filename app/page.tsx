"use client";

import { Box } from "@chakra-ui/react";
import CharacterList from "./components/CharacterList";
import useCharacterStore from "./store";
import FeaturedCharacters from "./components/FeaturedCharacters";

export default function Home() {
  const { characters, isLoadingCharacters, searchTerm } = useCharacterStore();

  return (
    <Box w={"100%"} h={"100%"}>
      <Box
        bg={"surface"}
        p={{ base: "10px 20px 20px", md: "40px 80px 80px" }}
        minH={{ base: "400px", md: "600px" }}
      >
        <CharacterList
          characters={characters}
          isLoading={isLoadingCharacters}
          searchTerm={searchTerm}
        />
      </Box>
      <Box bg={"primary"} p={{ base: "20px", md: "80px" }}>
        <FeaturedCharacters />
      </Box>
    </Box>
  );
}
