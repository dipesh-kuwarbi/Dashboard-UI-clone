import { IconButton } from "@chakra-ui/react";
import React from "react";

const HeaderIcon = ({ icon }) => {
  return (
    <IconButton
      bg={"gray.700"}
      borderRadius="100%"
      color="white"
      size={"sm"}
      icon={icon}
      sx={{ _hover: { bgColor: "gray.600" } }}
    />
  );
};

export default HeaderIcon;
