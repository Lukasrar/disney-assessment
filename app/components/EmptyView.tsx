import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface EmptyViewProps {
  searchTerm: string;
}

const EmptyView: React.FC<EmptyViewProps> = ({ searchTerm }) => {
  return (
    <Box textAlign="center" mt={8}>
      <Text fontSize="lg" color="gray.500">
        No characters found for <strong>"{searchTerm}"</strong>.
      </Text>
    </Box>
  );
};

export default EmptyView;
