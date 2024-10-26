import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  AspectRatio,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { Character } from "../interface/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCardProps: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Box
      key={character._id}
      textAlign="center"
      height="400px"
      bg={"background"}
    >
      <AspectRatio ratio={1} height="200px">
        <Image
          src={character.imageUrl}
          alt={character.name}
          objectFit="cover"
        />
      </AspectRatio>
      <Tooltip label={character.name} placement="top" hasArrow>
        <Text fontWeight="bold" mt={2} isTruncated>
          {character.name}
        </Text>
      </Tooltip>

      <Box height="100px" overflow="hidden" textAlign="left" mt={2}>
        <Text fontWeight="semibold">Featured Films:</Text>
        {character.films.length > 0 ? (
          character.films.slice(0, 3).map((film, index) => (
            <Text key={index} fontSize="sm">
              {film}
            </Text>
          ))
        ) : (
          <Text fontSize="sm">No films available</Text>
        )}
      </Box>

      <Link href={`/detail/${character._id}`}>
        <Button mt={4} colorScheme="teal" variant="outline" width="100%">
          View Profile
        </Button>
      </Link>
    </Box>
  );
};

export default CharacterCardProps;
