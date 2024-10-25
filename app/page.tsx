import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Text>home page</Text>
      </Box>
    </main>
  );
}
