import React, { useState } from "react";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Header from "./Component/Header";
import theme from "./theme";
import Dashboard from "./Component/dashboard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        height="100vh"
        marginLeft={isOpen ? "250px" : "0px"}
        bg="brand.900"
      >
        <Header isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
        <Box flex="1" overflow="auto" ml={"60px"}>
          <Dashboard />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
