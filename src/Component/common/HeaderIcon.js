import { Box, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const HeaderIcon = ({ icon }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      w="100%"
    >
      <IconButton
        bg={"gray.700"}
        borderRadius="100%"
        color="white"
        size={"sm"}
        icon={icon}
        sx={{ _hover: { bgColor: "gray.600" } }}
      />
    </MotionBox>
  );
};

export default HeaderIcon;
