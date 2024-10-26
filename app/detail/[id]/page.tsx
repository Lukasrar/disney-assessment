"use client";
import { useEffect, useState } from "react";
import { Box, Image, Text, Button, VStack, SimpleGrid } from "@chakra-ui/react";
import { Service } from "../../services";
import { useParams } from "next/navigation";

export default function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      if (typeof id === "string") {
        try {
          const data = await Service.getCharacterDetails(id);
          setCharacter(data);
        } catch (error) {
          console.error("Error fetching character details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return <Text>Loading character details...</Text>;
  }

  if (!character) {
    return <Text>Character not found.</Text>;
  }

  console.log(character);

  return (
    <VStack spacing={4} align="center" p={5}>
      <Image
        src={character.imageUrl}
        alt={character.name}
        boxSize="200px"
        objectFit="cover"
        borderRadius="md"
      />
      <Text fontSize="2xl" fontWeight="bold">
        {character.name}
      </Text>
      <Text fontSize="sm">
        Last Updated: {new Date(character.updatedAt).toLocaleDateString()}
      </Text>

      <Box width="100%">
        <Text fontWeight="semibold" mb={1}>
          Featured Films:
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {character.films.length > 0 ? (
            character.films.map((film: string, index: number) => (
              <Text key={index} fontSize="sm">
                {film}
              </Text>
            ))
          ) : (
            <Text fontSize="sm">No featured films available</Text>
          )}
        </SimpleGrid>
      </Box>

      <Box width="100%">
        <Text fontWeight="semibold" mb={1}>
          Short Films:
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {character.shortFilms.length > 0 ? (
            character.shortFilms.map((shortFilm: string, index: number) => (
              <Text key={index} fontSize="sm">
                {shortFilm}
              </Text>
            ))
          ) : (
            <Text fontSize="sm">No short films available</Text>
          )}
        </SimpleGrid>
      </Box>

      <Box width="100%">
        <Text fontWeight="semibold" mb={1}>
          TV Shows:
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {character.tvShows.length > 0 ? (
            character.tvShows.map((tvShow: string, index: number) => (
              <Text key={index} fontSize="sm">
                {tvShow}
              </Text>
            ))
          ) : (
            <Text fontSize="sm">No TV shows available</Text>
          )}
        </SimpleGrid>
      </Box>

      <Button
        as="a"
        href={character.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="teal"
        variant="solid"
        mt={4}
      >
        Explore More Character Details
      </Button>
    </VStack>
  );
}
