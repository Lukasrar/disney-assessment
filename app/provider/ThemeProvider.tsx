"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { theme } from "../theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
