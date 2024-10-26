import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  AspectRatio,
  Tooltip,
  Link as ChakraLink,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Character } from "../interface/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      key={character._id}
      textAlign="center"
      height="400px"
      bg={"background"}
    >
      <AspectRatio ratio={1} height="200px" position={"relative"}>
        <>
          {isLoading && (
            <Skeleton
              height="100%"
              w={"100%"}
              position={"absolute"}
              borderRadius="md"
              bg={"gray.200"}
            />
          )}
          <Image
            src={character.imageUrl}
            alt={character.name}
            objectFit="cover"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </>
      </AspectRatio>

      <Flex flexDir={"column"} w={"100%"} h={"100%"} p={"10px"}>
        <Tooltip label={character.name} placement="top" hasArrow>
          <Text
            fontSize={"18px"}
            fontWeight={700}
            lineHeight={"22px"}
            isTruncated
            color={"text"}
          >
            {character.name}
          </Text>
        </Tooltip>

        <Box height="100px" overflow="hidden" justifyContent={"center"}>
          <Text fontWeight={600} fontSize={"15px"} lineHeight={"16px"}>
            Featured <b>Films</b>
          </Text>
          {character.films.length > 0 ? (
            <Text fontSize="12px" fontWeight={400} lineHeight={"16px"}>
              {character.films.slice(0, 3).map((film, index) => (
                <span key={index}>
                  "{film}"
                  {index < character.films.slice(0, 3).length - 1 && ", "}{" "}
                </span>
              ))}
            </Text>
          ) : (
            <Text fontSize="sm">No films available</Text>
          )}
        </Box>

        <NextLink href={`/detail/${character._id}`} passHref>
          <ChakraLink>
            <Button
              variant="ghost"
              width="100%"
              textDecor={"underline"}
              color={"text"}
              fontSize={"12px"}
              fontWeight={900}
            >
              VIEW PROFILE
            </Button>
          </ChakraLink>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default CharacterCard;
