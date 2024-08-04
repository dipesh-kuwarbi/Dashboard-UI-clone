import React from "react";
import { Button, Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SidebarButton = ({ icon, label, isOpen, isActive, onClick }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      w="100%"
    >
      <Button
        leftIcon={icon}
        variant="ghost"
        justifyContent={isOpen ? "flex-start" : "center"}
        color={isActive ? "brand.500" : "white"}
        sx={{ _hover: { bg: "gray.700" } }}
        position="relative"
        onClick={() => onClick(label)}
      >
        {isActive && (
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            width="4px"
            bg="brand.500"
          />
        )}
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          {isOpen && label}
        </Flex>
      </Button>
    </MotionBox>
  );
};

export default SidebarButton;
