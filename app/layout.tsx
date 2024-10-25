import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeProvider from "./provider/ThemeProvider";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider>
          <Flex w={"100%"} justifyContent={"center"}>
            <Flex
              justifyContent={"center"}
              w={"80%"}
              minH={"100%"}
              alignItems={"center"}
              bg={"background"}
              flexDir={"column"}
            >
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </Flex>
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
