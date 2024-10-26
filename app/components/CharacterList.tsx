import React from "react";
import { Character } from "../interface/character";
import { SimpleGrid, Skeleton, Box, Text } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";
import EmptyView from "./EmptyView";

interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  searchTerm?: string;
}

export default function CharacterList({
  characters,
  isLoading,
  searchTerm,
}: CharacterListProps) {
  return (
    <Box>
      {isLoading ? (
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing="5px">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box p="5px">
                <Skeleton height="250px" borderRadius="md" bg="background" />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      ) : characters.length === 0 ? (
        <EmptyView searchTerm={searchTerm || ""} />
      ) : (
        <Box>
          {searchTerm && (
            <Text
              fontSize={"36px"}
              fontWeight={400}
              mb={"20px"}
              textAlign={"center"}
              lineHeight={"14px"}
            >
              Search Results - {searchTerm}
            </Text>
          )}
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing="5px">
            {characters.map((character, index) => (
              <motion.div
                key={character._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
              >
                <CharacterCard character={character} />
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
