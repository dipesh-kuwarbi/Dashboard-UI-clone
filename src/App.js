import React, { useState } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Header from "./Header";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        height="100vh"
        marginLeft={isOpen ? "250px" : "60px"}
      >
        <Header isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
        <Box flex="1" overflow="auto"></Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
