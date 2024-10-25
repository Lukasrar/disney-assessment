import { Flex, Input } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../assets/logo.svg";
import AvatarIcon from "../assets/avatar.svg";

export default function Header() {
  return (
    <header style={{ width: "100%", height: "112px" }}>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"100%"}
        h={"100%"}
        bg={"background"}
        gap={"40px"}
      >
        <Flex minW={"96px"}>
          <LogoIcon />
        </Flex>
        <Input />
        <Flex minW={"48px"}>
          <AvatarIcon />
        </Flex>
      </Flex>
    </header>
  );
}
