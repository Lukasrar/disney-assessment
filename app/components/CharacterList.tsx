import React from "react";
import { Character } from "../interface/character";
import { SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList(props: CharacterListProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={"5px"}>
      {props.characters.map((character) => (
        <CharacterCard key={character._id} character={character} />
      ))}
    </SimpleGrid>
  );
}
