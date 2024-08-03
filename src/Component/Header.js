import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Avatar,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import { RiAppsFill } from "react-icons/ri";
import { CiMail, CiSettings } from "react-icons/ci";
import HeaderIcon from "./common/HeaderIcon";

const Header = ({ isOpen, setIsOpen }) => {
  const icons = [
    <CiMail size={18} />,
    <CiSettings size={18} />,
    <FiBell size={18} />,
  ];
  return (
    <Box bg={"brand.800"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <IconButton
            bg={"brand.800"}
            color="brand.500"
            size={"sm"}
            icon={<RiAppsFill size="large" />}
            aria-label={"Open Menu"}
            sx={{ _hover: { bgColor: "gray.700" } }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <InputGroup
            ml={4}
            bg="brand.700"
            w="200px"
            borderColor="brand.900"
            borderRaidus={2}
          >
            <InputLeftElement pointerEvents="none">
              <FiSearch color="white" />
            </InputLeftElement>
            <Input
              placeholder="Search..."
              sx={{ _hover: { borderColor: "brand.500" } }}
            ></Input>
          </InputGroup>
        </Flex>
        <Flex alignItems={"center"} gap={2}>
          {icons.map((icon, index) => (
            <HeaderIcon key={index} icon={icon} />
          ))}
          <Avatar size={"sm"} ml={4} src={"https://bit.ly/broken-link"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
