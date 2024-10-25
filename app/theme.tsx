"use client";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#054553",
    background: "#fff",
    surface: "#F1F2F3",
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            backgroundColor: "surface",
            borderRadius: "100px",
            border: "none",
            _focus: {
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});
