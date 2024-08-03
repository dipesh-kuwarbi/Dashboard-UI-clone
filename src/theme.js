import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "141316", //Bg dark color
    800: "#2a2b38", // Dark color
    700: "#282B2F",
    500: "#7593FE", // Primary color
  },
};

const theme = extendTheme({ colors });

export default theme;
