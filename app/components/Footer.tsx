import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer style={{ width: "100%", height: "160px" }}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
        bg={"background"}
        gap={"10px"}
        flexDir={"column"}
        padding={{ base: "20px", md: 0 }}
      >
        <LogoIcon />

        <Text fontSize={"11px"} fontWeight={"400"} textAlign={"center"}>
          For educational use only. All characters and content are the property
          of Disney. This test is for private use and development testing only
          and should not be distributed for public consumption
        </Text>
      </Flex>
    </footer>
  );
}
