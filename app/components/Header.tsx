"use client";

import { Flex, Input, Link as ChakraLink } from "@chakra-ui/react";
import React, { useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import LogoIcon from "../assets/logo.svg";
import AvatarIcon from "../assets/avatar.svg";
import useCharacterStore from "../store";
import { Service } from "../services";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const { setCharacters, setIsLoadingCharacters, searchTerm, setSearchTerm } =
    useCharacterStore();
  const router = useRouter();

  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      setIsLoadingCharacters(true);
      try {
        if (term) {
          if (window.location.pathname !== "/") {
            router.push("/");
          }
          const result = await Service.searchCharacters(term);
          setCharacters(
            Array.isArray(result.data) ? result.data : [result.data]
          );
        } else {
          const data = await Service.getCharacters();
          setCharacters(data.data);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
      setIsLoadingCharacters(false);
    }, 500),
    [setCharacters, setIsLoadingCharacters, router]
  );

  useEffect(() => {
    const fetchInitialCharacters = async () => {
      setIsLoadingCharacters(true);
      try {
        const data = await Service.getCharacters();
        setCharacters(data.data);
      } catch (error) {
        console.error("Error fetching initial characters:", error);
      }
      setIsLoadingCharacters(false);
    };

    fetchInitialCharacters();

    return debouncedSearch.cancel;
  }, [setCharacters, setIsLoadingCharacters, debouncedSearch]);

  useEffect(() => {
    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header style={{ width: "100%", height: "112px" }}>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        h="100%"
        bg="background"
        gap="40px"
        padding={{ base: "20px", md: 0 }}
      >
        <Flex minW="96px">
          <NextLink href={"/"} passHref>
            <ChakraLink>
              <LogoIcon />
            </ChakraLink>
          </NextLink>
        </Flex>
        <Input
          placeholder="Search for a character"
          value={searchTerm}
          onChange={handleSearchChange}
          backgroundColor={"surface"}
          borderRadius={"100px"}
          border={"none"}
          _focus={{ boxShadow: "none" }}
        />
        <Flex minW="48px">
          <NextLink href={"/user-profile"} passHref>
            <ChakraLink>
              <AvatarIcon />
            </ChakraLink>
          </NextLink>
        </Flex>
      </Flex>
    </header>
  );
}
