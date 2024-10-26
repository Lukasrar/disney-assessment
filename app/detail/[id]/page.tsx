"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Flex,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Service } from "../../services";
import { useParams } from "next/navigation";
import FeaturedCharacters from "../../components/FeaturedCharacters";

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
    return (
      <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", md: "row" }}>
        <Box
          bg={"surface"}
          p={{ base: "10px 20px 20px", md: "40px 80px 80px" }}
          minH={{ base: "400px", md: "600px" }}
          transition={"all 0.3s linear"}
          w={"100%"}
        >
          <Flex gap={"20px"} w={"100%"}>
            <Skeleton height="100%" width="40%" borderRadius="md" />
            <Flex flexDir={"column"} gap={"24px"} flexGrow={1}>
              <Skeleton height="48px" width="100%" borderRadius="md" />
              <Skeleton height="16px" width="50%" borderRadius="md" />
              <Box width="100%">
                <Skeleton height="24px" width="100%" borderRadius="md" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
              </Box>
              <Box width="100%">
                <Skeleton height="24px" width="100%" borderRadius="md" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
              </Box>
              <Skeleton height="40px" width="200px" borderRadius="md" />
            </Flex>
          </Flex>
        </Box>
        <Box bg={"primary"} p={"80px"}>
          <Skeleton height="20px" width="100%" borderRadius="md" />
        </Box>
      </Flex>
    );
  }

  if (!character) {
    return <Text>Character not found.</Text>;
  }

  return (
    <Box w={"100%"} h={"100%"}>
      <Box
        bg={"surface"}
        p={{ base: "10px 20px 20px", md: "40px 80px 80px" }}
        transition={"all 0.3s linear"}
      >
        <Flex gap={"20px"} flexDir={{ base: "column", md: "row" }}>
          <Image
            src={character.imageUrl}
            alt={character.name}
            boxSize="40%"
            objectFit="cover"
            borderRadius="md"
          />

          <Flex flexDir={"column"} gap={"24px"}>
            <Text fontSize="40px" fontWeight={600} lineHeight={"48px"}>
              {character.name}
            </Text>
            <Text fontSize="12px" fontWeight={400} lineHeight={"16px"}>
              Last Updated: {new Date(character.updatedAt).toLocaleDateString()}
            </Text>

            <Box width="100%">
              <Text fontSize="18px" fontWeight={700} lineHeight={"24px"}>
                Featured Films:
              </Text>
              {character.films?.length > 0 ? (
                <ul style={{ paddingLeft: "25px" }}>
                  {character.films.map((film: string, index: number) => (
                    <li key={index}>
                      <Text
                        fontSize="15px"
                        fontWeight={600}
                        lineHeight={"24px"}
                      >
                        {film}
                      </Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Text fontSize="sm">No featured films available</Text>
              )}
            </Box>

            <Box width="100%">
              <Text fontSize="18px" fontWeight={700} lineHeight={"24px"}>
                Short Films:
              </Text>
              {character.shortFilms?.length > 0 ? (
                <ul style={{ paddingLeft: "25px" }}>
                  {character.shortFilms.map((film: string, index: number) => (
                    <li key={index}>
                      <Text
                        fontSize="15px"
                        fontWeight={600}
                        lineHeight={"24px"}
                      >
                        {film}
                      </Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Text fontSize="sm">No featured short films available</Text>
              )}
            </Box>

            <Box width="100%">
              <Text fontSize="18px" fontWeight={700} lineHeight={"24px"}>
                TV Shows:
              </Text>
              {character.tvShows?.length > 0 ? (
                <ul style={{ paddingLeft: "25px" }}>
                  {character.tvShows.map((film: string, index: number) => (
                    <li key={index}>
                      <Text
                        fontSize="15px"
                        fontWeight={600}
                        lineHeight={"24px"}
                      >
                        {film}
                      </Text>
                    </li>
                  ))}
                </ul>
              ) : (
                <Text fontSize="sm">No TV shows available</Text>
              )}
            </Box>

            <Button
              as="a"
              href={character.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              bg={"primary"}
              color={"surface"}
            >
              Explore More Character Details
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box bg={"primary"} p={{ base: "20px", md: "80px" }}>
        <FeaturedCharacters />
      </Box>
    </Box>
  );
}
