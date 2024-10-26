import type { Metadata } from "next";
import "./globals.css";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeProvider from "./provider/ThemeProvider";

export const metadata: Metadata = {
  title: "Disney Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Flex w={"100%"} justifyContent={"center"}>
            <Flex
              justifyContent={"center"}
              w={{ base: "90", md: "80%" }}
              minH={"100vh"}
              maxW={"1600px"}
              alignItems={"center"}
              bg={"background"}
              flexDir={"column"}
            >
              <Header />
              {children}
              <Footer />
            </Flex>
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
