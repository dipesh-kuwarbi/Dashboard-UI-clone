import React, { useState } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Header from "./Component/Header";
import theme from "./theme";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        height="100vh"
        marginLeft={isOpen ? "250px" : "0px"}
      >
        <Header isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
        <Box flex="1" overflow="auto"></Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
