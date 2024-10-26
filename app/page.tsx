"use client";

import { Flex } from "@chakra-ui/react";
import CharacterList from "./components/CharacterList";
import useCharacterStore from "./store";

export default function Home() {
  const { characters } = useCharacterStore();

  return (
    <Flex p={"80px"} bg={"surface"} w={"100%"} h={"100vh"}>
      <CharacterList characters={characters} />
    </Flex>
  );
}
