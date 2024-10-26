"use client";

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Lato, sans-serif",
      },
    },
  },
  fonts: {
    heading: "Lato, sans-serif",
    body: "Lato, sans-serif",
  },
  colors: {
    primary: "#054553",
    background: "#fff",
    surface: "#F1F2F3",
    text: "#222222",
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            backgroundColor: "background",
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "#C2CCDA",
            _focus: {
              boxShadow: "none",
            },
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          backgroundColor: "background",
          borderRadius: "4px",
          border: "1px solid",
          borderColor: "#C2CCDA",
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "700",
        fontSize: "16px",
        color: "#5B6873",
      },
    },
  },
});
