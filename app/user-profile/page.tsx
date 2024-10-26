"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { calculateAge } from "../helpers/calculateAge";

const UserProfilePage = () => {
  const [cookies] = useCookies(["userProfile"]);
  const router = useRouter();

  const userProfile = cookies.userProfile || {};

  useEffect(() => {
    if (
      !userProfile.firstName ||
      !userProfile.lastName ||
      !userProfile.city ||
      !userProfile.state
    ) {
      router.push("/edit-user-profile");
    }
  }, [userProfile, router]);

  return (
    <Flex
      bg={"surface"}
      p={{ base: "10px 20px 20px", md: "40px 80px 80px" }}
      w={"100%"}
      h={"100%"}
      flexDir={"column"}
      gap={"16px"}
    >
      <Box display={"flex"} gap={"10px"} flexDir={"column"}>
        <Text
          fontWeight={600}
          fontSize={"40px"}
          lineHeight={"48px"}
          color={"text"}
        >
          {userProfile.firstName} {userProfile.lastName}
        </Text>

        <Text
          fontWeight={400}
          fontSize={"12px"}
          lineHeight={"16px"}
          color={"text"}
        >
          Last Updated: {cookies.userProfile?.updatedAt || "N/A"}
        </Text>
      </Box>

      <Text
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"24px"}
        color={"text"}
      >
        Age:{" "}
        {cookies.userProfile?.birthDate
          ? calculateAge(cookies.userProfile.birthDate)
          : "N/A"}
      </Text>

      <Text
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"24px"}
        color={"text"}
      >
        Location: {userProfile.city || "N/A"}, {userProfile.state || "N/A"}
      </Text>

      <Text
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"24px"}
        color={"text"}
      >
        Favorite Disney Character: {userProfile.favoriteCharacter || "N/A"}
      </Text>

      <Text
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"24px"}
        color={"text"}
      >
        Favorite Disney Movie: {userProfile.favoriteMovie || "N/A"}
      </Text>

      <Text
        fontWeight={700}
        fontSize={"18px"}
        lineHeight={"24px"}
        color={"text"}
      >
        Favorite Disneyland: {userProfile.favoriteDisneyland || "N/A"}
      </Text>

      <NextLink href={"/edit-user-profile"} passHref>
        <ChakraLink>
          <Button bg={"primary"} color="surface">
            Edit Profile
          </Button>
        </ChakraLink>
      </NextLink>
    </Flex>
  );
};

export default UserProfilePage;
