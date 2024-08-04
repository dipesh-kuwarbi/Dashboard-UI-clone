import React from "react";
import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaBullseye, FaHamburger, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Goals", icon: FaBullseye, bg: "orange.500" },
  { label: "Popular Dishes", icon: FaHamburger, bg: "blue.500" },
  { label: "Menus", icon: FaUtensils, bg: "teal.500" },
];

const MenuComponent = () => {
  const MotionBox = motion(Box);
  return (
    <Box p={1} borderRadius="md" maxW="md" h="100%">
      {menuItems.map((item, index) => (
        <MotionBox
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          cursor={"pointer"}
          justifyContent="space-between"
        >
          <HStack
            p={2}
            mb={2}
            bg="brand.600"
            borderRadius="md"
            _hover={{ opacity: 0.5 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack alignItems="center">
              <Box
                p={1}
                borderRadius="full"
                bg={item.bg}
                display="flex"
                alignItems="center"
                justifyContent="center"
                w={8}
                h={8}
              >
                <item.icon color="white" />
              </Box>
              <Text fontWeight="bold">{item.label}</Text>
            </HStack>
            <IconButton
              aria-label="Go to"
              icon={<ChevronRightIcon />}
              bg="gray.600"
              color="gray.200"
              borderRadius="100%"
              _hover={{ bg: "transparent", color: "white" }}
            />
          </HStack>
        </MotionBox>
      ))}
    </Box>
  );
};

export default MenuComponent;
