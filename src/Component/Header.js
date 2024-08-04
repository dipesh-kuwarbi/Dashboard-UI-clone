import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Avatar,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import { CiMail, CiSettings } from "react-icons/ci";
import HeaderIcon from "./common/HeaderIcon";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Header = ({ isOpen, setIsOpen }) => {
  const MotionBox = motion(Box);
  const icons = [
    <CiMail size={18} />,
    <CiSettings size={18} />,
    <FiBell size={18} />,
  ];

  const showSidebarToggle = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="brand.800" px={4} ml={{ base: "0", md: "60px" }} py={2}>
      <Flex
        h={12}
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Flex alignItems="center" gap={4} flex="1">
          {showSidebarToggle && (
            <IconButton
              bg="brand.800"
              color="brand.500"
              size="sm"
              // icon={<RiAppsFill size="large" />}
              aria-label="Open Menu"
              sx={{ _hover: { bgColor: "gray.700" } }}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MotionBox
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <InputGroup
              bg="brand.700"
              w={{ base: "140px", sm: "200px" }}
              borderColor="brand.900"
              borderRadius={2}
            >
              <InputLeftElement pointerEvents="none">
                <FiSearch color="white" />
              </InputLeftElement>
              <Input
                placeholder="Search..."
                sx={{ _hover: { borderColor: "brand.500" } }}
              />
            </InputGroup>
          </MotionBox>
        </Flex>
        <Flex alignItems="center" gap={1}>
          {icons.map((icon, index) => (
            <HeaderIcon key={index} icon={icon} />
          ))}
          <Avatar size="sm" src="https://bit.ly/broken-link" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
